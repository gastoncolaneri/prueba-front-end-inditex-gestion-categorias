import axios from "axios";
import { AddProduct } from "../types";
import { API_URL } from "../constants";

const addProduct = async ({
  product_name,
  product_price,
  product_image_url,
  row_id,
}: AddProduct) => {
  try {
    return axios.post(API_URL, {
      product_name,
      product_price,
      product_image_url,
      row_id,
    });
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
