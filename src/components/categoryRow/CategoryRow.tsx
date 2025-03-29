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

const CategoryRow = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-7 rounded-md border-2 border-gray-200 mb-10 relative">
        <div className="flex gap-2 self-end flex-row">
          <AlignButton tooltipText="Alinear izquierda">
            <MdFormatAlignLeft size={20} />
          </AlignButton>
          <AlignButton tooltipText="Alinear centro">
            <MdFormatAlignCenter size={20} />
          </AlignButton>
          <AlignButton tooltipText="Alinear derecha">
            <MdFormatAlignRight size={20} />
          </AlignButton>
        </div>
        <Button
          variant="secondary"
          size="small"
          className="absolute -right-4 -top-4  flex items-center justify-center p-0! peer border-none rounded-full! "
        >
          <MdOutlineClose size={30} />
        </Button>
        <Tooltip className="-right-10 -top-13">Eliminar fila</Tooltip>
        <div className="flex gap-2 mb-5">
          <ProductCard name="Product 1" price="100" url={productExample1} />
          <ProductCard name="Product 2" price="200" url={productExample2} />
        </div>
        <div className="flex w-full h-full flex-col relative justify-center items-end">
          <Button
            variant="primary"
            size="small"
            className="rounded-full! h-10! w-10! flex items-center justify-center p-0! peer border-none bg-transparent!"
          >
            <MdPostAdd size={40} />
          </Button>
          <Tooltip className="-right-10 -top-7 ">Agregar producto</Tooltip>
        </div>
      </div>
    </>
  );
};

export { CategoryRow };
