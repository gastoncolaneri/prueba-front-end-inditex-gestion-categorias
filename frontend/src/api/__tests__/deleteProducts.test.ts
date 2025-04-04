import axios from "axios";
import { deleteProduct } from "../deleteProduct";
import { API_URL } from "../../constants";

jest.mock("axios");

describe("deleteProduct", () => {
  it("should send a DELETE request and return void", async () => {
    const productId = 123;
    const mockResponse = { data: undefined };
    (axios.delete as jest.Mock).mockResolvedValue(mockResponse);

    const response = await deleteProduct(productId);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axios.delete).toHaveBeenCalledWith(`${API_URL}/${productId}`);

    expect(response).toBeUndefined();
  });

  it("should handle failure and log the error", async () => {
    const productId = 123;
    const mockError = new Error("Failed to delete product");
    (axios.delete as jest.Mock).mockRejectedValue(mockError);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const response = await deleteProduct(productId);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error al eliminar el producto:",
      "Failed to delete product"
    );

    expect(response).toBeUndefined();

    consoleErrorSpy.mockRestore();
  });
});
