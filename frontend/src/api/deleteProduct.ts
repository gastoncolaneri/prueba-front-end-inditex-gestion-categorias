import axios from "axios";
import { API_URL } from "../constants/apiConstants";

const deleteProduct = async (id: number): Promise<void> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data as void;
};

export { deleteProduct };
