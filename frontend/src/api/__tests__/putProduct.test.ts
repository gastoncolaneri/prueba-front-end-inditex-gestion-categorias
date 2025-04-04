import axios from "axios";
import { API_URL } from "../../constants";
import { putProduct } from "../putProduct";

jest.mock("axios");

describe("putProduct", () => {
  const mockProduct = {
    product_name: "Test Product",
    product_price: 10.99,
    product_image_url: "http://example.com/image.jpg",
    row_id: "123",
    id: "1",
  };
  it("should update a product using put method", async () => {
    const mockResponse = {
      product_name: "Test Product",
      product_price: 10.99,
      product_image_url: "http://example.com/image.jpg",
      row_id: "123",
    };
    (axios.put as jest.Mock).mockResolvedValue(mockResponse);
    const result = await putProduct(mockProduct);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axios.put).toHaveBeenCalledWith(
      `${API_URL}/${mockProduct.id}`,
      mockResponse
    );
    expect(result).toEqual(mockResponse);
  });
  it("should handle API failure and log the error", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const mockError = new Error("Network Error");
    (axios.put as jest.Mock).mockRejectedValue(mockError);

    const response = await putProduct(mockProduct);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error al actualizar el producto:",
      "Network Error"
    );

    expect(response).toBeUndefined();

    consoleErrorSpy.mockRestore();
  });
});
