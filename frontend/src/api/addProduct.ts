import axios from "axios";
import { AddProduct } from "../types/apiTypes";
import { API_URL } from "../constants/apiConstants";

const addProduct = async ({
  product_name,
  product_price,
  product_image_url,
}: AddProduct) => {
  try {
    const response = await axios.post(API_URL, {
      product_name,
      product_price,
      product_image_url,
    });
    console.log("Product created:", response.data);
  } catch (error) {
    console.error(
      "Error creating product:",
      error instanceof Error
        ? error.message
        : axios.isAxiosError(error) && error.response
        ? error.response.data
        : "Unknown error"
    );
  }
};

export { addProduct };
