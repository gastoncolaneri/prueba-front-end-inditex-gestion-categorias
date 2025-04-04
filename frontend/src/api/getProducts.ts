import axios, { AxiosError } from "axios";
import { API_URL } from "../constants";
import { GetProduct } from "../types";

const getProducts = async (): Promise<GetProduct[]> => {
  try {
    const response = await axios.get<GetProduct[]>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(
        "Error al obtener los productos:",
        axiosError.response?.data || axiosError.message || "Error desconocido"
      );
    } else if (error instanceof Error) {
      console.error("Error al obtener los productos:", error.message);
    } else {
      console.error("Error al obtener los productos: Error desconocido");
    }
    return [];
  }
};

export { getProducts };
