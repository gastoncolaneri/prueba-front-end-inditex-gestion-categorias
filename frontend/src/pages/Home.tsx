import { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AddRow } from "../components/addRow/AddRow";
import { CategoryRow } from "../components/categoryRow";
import { AddProductModal, DeleteModal } from "../components/modals";
import { Zoom } from "../components/zoom";
import { useProductsStore } from "../store/productsStore";
import { getProducts } from "../api/getProducts";
import { Toast } from "../components/modals/Toast";

const Home = () => {
  const {
    isAddProductModalOpen,
    setProducts,
    toastState,
    rows,
    deleteModalState,
  } = useProductsStore();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    void fetchProducts();
  }, [setProducts]);

  return (
    <div className="py-10 flex justify-center flex-col relative">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        wheel={{
          disabled: true,
        }}
        doubleClick={{ step: 0.3, disabled: false }}
      >
        {(utils) => (
          <>
            <Zoom
              zoomIn={utils.zoomIn}
              zoomOut={utils.zoomOut}
              resetTransform={utils.resetTransform}
            />

            {isAddProductModalOpen && <AddProductModal />}
            {deleteModalState?.isOpen && (
              <DeleteModal
                type={deleteModalState.type}
                id={deleteModalState.id}
              />
            )}
            {toastState?.isToastDisplayed && (
              <Toast
                type={toastState.type}
                title={toastState.title}
                message={toastState.message}
              />
            )}
            <TransformComponent contentClass="w-full">
              <div className="flex w-full">
                {rows.map((row) => (
                  <CategoryRow id={row} key={row} />
                ))}
              </div>
            </TransformComponent>
            <AddRow />
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export { Home };
