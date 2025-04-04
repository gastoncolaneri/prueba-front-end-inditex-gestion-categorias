import axios, { AxiosError } from "axios";
import { AddProduct } from "../types";
import { API_URL } from "../constants";

const addProduct = async ({
  product_name,
  product_price,
  product_image_url,
  row_id,
}: AddProduct) => {
  try {
    const response = await axios.post(API_URL, {
      product_name,
      product_price,
      product_image_url,
      row_id,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(
        "Error al crear el producto:",
        axiosError.response?.data || axiosError.message || "Error desconocido"
      );
    } else if (error instanceof Error) {
      console.error("Error al crear el producto:", error.message);
    } else {
      console.error("Error al crear el producto: Error desconocido");
    }
  }
};

export { addProduct };
