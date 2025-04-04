import express from "express";
import { Pool } from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, welcome to my Express server on Vercel!");
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post("/products", async (req, res) => {
  const { product_name, product_price, product_image_url, row_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (product_name, product_price, product_image_url, row_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [product_name, product_price, product_image_url, row_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.put("/products/:id", async (req, res) => {
  const { product_name, product_price, product_image_url, row_id } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE products SET product_name = $1, product_price = $2, product_image_url = $3, row_id = $4 WHERE id = $5 RETURNING *",
      [product_name, product_price, product_image_url, row_id, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
