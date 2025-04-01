import {
  MdOutlineClose,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdPostAdd,
} from "react-icons/md";

import { ProductCard } from "../productCard";
import productExample1 from "../../assets/product-example-1.jpg";
import productExample2 from "../../assets/product-example-2.png";
import { AlignButton, Button } from "../button";
import { Tooltip } from "../tooltip";
import { useProductsStore } from "../../store/productsStore";
import { DELETE, ROW, PRODUCT, ADD } from "../../constants/modalConstants";
import { LEFT, CENTER, RIGHT, ALIGN } from "../../constants/buttonConstants";

const CategoryRow = () => {
  const { setIsAddProductModalOpen, setIsDeleteModalOpen } = useProductsStore();

  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-7 rounded-md border-2 border-gray-200 mb-10 relative test">
        <div className="flex gap-2 self-end flex-row">
          <AlignButton tooltipText={`${ALIGN} ${LEFT}`}>
            <MdFormatAlignLeft size={20} />
          </AlignButton>
          <AlignButton tooltipText={`${ALIGN} ${CENTER}`}>
            <MdFormatAlignCenter size={20} />
          </AlignButton>
          <AlignButton tooltipText={`${ALIGN} ${RIGHT}`}>
            <MdFormatAlignRight size={20} />
          </AlignButton>
        </div>
        <Button
          variant="secondary"
          size="small"
          className="absolute -right-4 -top-4  flex items-center justify-center p-0! peer border-none rounded-full! "
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <MdOutlineClose size={30} />
        </Button>
        <Tooltip className="-right-10 -top-13">
          {DELETE} {ROW}
        </Tooltip>
        <div className="flex gap-2 mb-5">
          <ProductCard name="Product 1" price="100" url={productExample1} />
          <ProductCard name="Product 2" price="200" url={productExample2} />
        </div>
        <div className="flex w-full h-full flex-col relative justify-center items-end">
          <Button
            variant="primary"
            size="small"
            className="rounded-full! h-10! w-10! flex items-center justify-center p-0! peer border-none bg-transparent!"
            onClick={() => setIsAddProductModalOpen(true)}
          >
            <MdPostAdd size={40} />
          </Button>
          <Tooltip className="-right-10 -top-7 ">
            {ADD} {PRODUCT}
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export { CategoryRow };
