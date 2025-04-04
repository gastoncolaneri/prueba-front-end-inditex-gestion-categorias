import axios from "axios";
import { API_URL } from "../../constants";
import { addProduct } from "../addProduct";

jest.mock("axios");

describe("addProduct", () => {
  const mockProduct = {
    product_name: "Test Product",
    product_price: 10.99,
    product_image_url: "http://example.com/image.jpg",
    row_id: "123",
  };

  it("should successfully post product data to API", async () => {
    const mockResponse = { data: { success: true } };
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    const result = await addProduct(mockProduct);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axios.post).toHaveBeenCalledWith(API_URL, mockProduct);
    expect(result).toEqual(mockResponse);
  });
  it("should handle API failure and log the error", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const mockError = new Error("Network Error");
    (axios.post as jest.Mock).mockRejectedValue(mockError);

    const response = await addProduct(mockProduct);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error al crear el producto:",
      "Network Error"
    );

    expect(response).toBeUndefined();

    consoleErrorSpy.mockRestore();
  });
});
