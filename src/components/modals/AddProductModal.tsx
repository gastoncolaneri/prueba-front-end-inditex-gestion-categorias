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

const AddProductModal = () => {
  const { setIsAddProductModalOpen } = useProductsStore();
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
      <form className="fixed z-50 bg-white justify-center items-center border-2 border-gray-200 flex-col p-10">
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
            onClick={() => setIsAddProductModalOpen(false)}
          >
            {CANCEL}
          </button>
          <button
            type="submit"
            className="rounded-md bg-zara-100 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zara-200"
          >
            {`${ADD} ${PRODUCT}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddProductModal };
