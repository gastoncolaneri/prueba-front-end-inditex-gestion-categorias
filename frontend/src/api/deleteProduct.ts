import axios, { AxiosError } from "axios";
import { API_URL } from "../constants";

const deleteProduct = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data as void;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(
        "Error al eliminar el producto:",
        axiosError.response?.data || axiosError.message || "Error desconocido"
      );
    } else if (error instanceof Error) {
      console.error("Error al eliminar el producto:", error.message);
    } else {
      console.error("Error al eliminar el producto: Error desconocido");
    }
  }
};

export { deleteProduct };
