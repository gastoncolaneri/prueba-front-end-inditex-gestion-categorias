import axios from "axios";
import { getProducts } from "../getProducts";
import { API_URL } from "../../constants";

jest.mock("axios");

describe("getProducts", () => {
  it("should send a GET request and return product data", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockProducts });

    const response = await getProducts();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(axios.get).toHaveBeenCalledWith(API_URL);

    expect(response).toEqual(mockProducts);
  });

  it("should handle failure and log the error", async () => {
    const mockError = new Error("Failed to fetch products");
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const response = await getProducts();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error al obtener los productos:",
      "Failed to fetch products"
    );

    expect(response.length).toBe(0);

    consoleErrorSpy.mockRestore();
  });
});
