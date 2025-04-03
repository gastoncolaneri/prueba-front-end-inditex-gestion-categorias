import axios from "axios";
import { API_URL } from "../constants";
import { GetProduct } from "../types";

const getProducts = async (): Promise<GetProduct[]> => {
  const response = await axios.get<GetProduct[]>(API_URL);
  return response.data;
};

export { getProducts };
