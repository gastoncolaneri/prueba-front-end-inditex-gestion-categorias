import axios, { AxiosError } from "axios";
import { API_URL } from "../constants";
import { PutProduct } from "../types";

const putProduct = async ({
  product_name,
  product_price,
  product_image_url,
  row_id,
  id,
}: PutProduct) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
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
        "Error al actualizar el producto:",
        axiosError.response?.data || axiosError.message || "Error desconocido"
      );
    } else if (error instanceof Error) {
      console.error("Error al actualizar el producto:", error.message);
    } else {
      console.error("Error al actualizar el producto: Error desconocido");
    }
  }
};

export { putProduct };
