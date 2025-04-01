import { AddRow } from "../components/addRow/AddRow";
import { CategoryRow } from "../components/categoryRow";
import { AddProductModal, DeleteModal } from "../components/modals";
import { Zoom } from "../components/zoom";
import { useProductsStore } from "../store/productsStore";

const Home = () => {
  const { isAddProductModalOpen, isDeleteProductModalOpen, isDeleteModalOpen } =
    useProductsStore();

  return (
    <div className="py-10 flex justify-center flex-col relative">
      <Zoom />
      {isAddProductModalOpen && <AddProductModal />}
      {isDeleteProductModalOpen && <DeleteModal type="delete-product" />}
      {isDeleteModalOpen && <DeleteModal type="delete-row" />}
      <CategoryRow />
      <AddRow />
    </div>
  );
};

export { Home };
