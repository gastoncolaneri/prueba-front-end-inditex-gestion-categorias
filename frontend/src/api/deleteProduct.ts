import axios from "axios";
import { API_URL } from "../constants";

const deleteProduct = async (id: number): Promise<void> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data as void;
};

export { deleteProduct };
