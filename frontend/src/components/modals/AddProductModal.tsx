import { useState } from "react";
import { addProduct } from "../../api/addProduct";
import {
  ADD,
  PRODUCT,
  CANCEL,
  UPLOAD_IMAGE,
  PNG_JPG_GIF,
  NAME,
  VALUE,
} from "../../constants/modalConstants";
import { useProductsStore } from "../../store/productsStore";
import { supabase } from "../../utils";
import { getProducts } from "../../api/getProducts";
import { Spinner } from "../spinner/Spinner";
import { ToastProps } from "../../types/toastTypes";

const AddProductModal = () => {
  const {
    setAddProductModalState,
    setProducts,
    setToastState,
    setIsLoading,
    isLoading,
    addProductModalState,
  } = useProductsStore();
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const showToast = ({ type, title, message }: ToastProps) => {
    setToastState({
      isToastDisplayed: true,
      type,
      title,
      message,
    });
    setTimeout(() => {
      setToastState({
        isToastDisplayed: false,
        type,
        title: "",
        message: "",
      });
    }, 3000);
  };

  const uploadImage = async () => {
    if (!image) {
      alert("No image selected");
      return;
    }

    const filePath = `images/${Date.now()}_${image.name}`;
    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, image);

    if (error) {
      console.error("Error uploading image:", error);
      return;
    }
    const { data } = supabase.storage.from("images").getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleCreateProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    (async () => {
      try {
        await uploadImage();
        const image_url = await uploadImage();
        if (image_url) {
          await addProduct({
            product_name: productName,
            product_price: Number(productPrice),
            product_image_url: image_url,
            row_id: addProductModalState?.rowId || "",
          });
          setAddProductModalState({
            isOpen: false,
            rowId: "",
          });
          const products = await getProducts();
          setProducts(products);
        }
        showToast({
          type: "success",
          title: "Producto creado",
          message: "El producto se ha creado correctamente",
        });
        setIsLoading(false);
      } catch (error: unknown) {
        showToast({
          type: "error",
          title: "Error al crear el producto",
          message: "El producto no se ha creado correctamente",
        });
        if (error instanceof Error) {
          console.error("Error creating product:", error.message);
        } else {
          console.error("Error creating product:", String(error));
        }
      }
    })()
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Unhandled promise rejection:", error.message);
        } else {
          console.error("Unhandled promise rejection:", String(error));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
      <form className="fixed z-50 bg-white justify-center items-center border-2 border-gray-200 flex-col p-10">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="space-y-5">
              <div className="border-b border-gray-900/10">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  {`${ADD} ${PRODUCT}`}
                </h2>
              </div>
              <>
                <>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="product-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      {NAME}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zara-100 sm:text-sm/6"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="product-price"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      {VALUE}
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="product-price"
                        id="product-price"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zara-100 sm:text-sm/6"
                        onChange={(e) =>
                          setProductPrice(Number(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </>
                <div className="col-span-full">
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto size-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-zara-200 focus-within:ring-2  hover:text-zara-100"
                        >
                          <span>{UPLOAD_IMAGE}</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-xs/5 text-gray-600">{PNG_JPG_GIF}</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm/6 font-semibold text-gray-900 hover:text-zara-100"
                onClick={() =>
                  setAddProductModalState({
                    isOpen: false,
                    rowId: "",
                  })
                }
              >
                {CANCEL}
              </button>
              <button
                type="submit"
                className="rounded-md bg-zara-100 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zara-200"
                onClick={handleCreateProduct}
              >
                {`${ADD} ${PRODUCT}`}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export { AddProductModal };
