import axios from "axios";
import { API_URL } from "../constants/apiConstants";
import { GetProduct } from "../types/apiTypes";

const getProducts = async (): Promise<GetProduct[]> => {
  const response = await axios.get<GetProduct[]>(API_URL);
  return response.data;
};

export { getProducts };
