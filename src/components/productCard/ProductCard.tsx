import { Button } from "../button";
import { MdDeleteForever } from "react-icons/md";
import { Tooltip } from "../tooltip";
import { useProductsStore } from "../../store/productsStore";
import { DELETE, PRODUCT } from "../../constants/modalConstants";

const ProductCard = ({
  name,
  price,
  url,
}: {
  name: string;
  price: string;
  url: string;
}) => {
  const { setIsDeleteProductModalOpen } = useProductsStore();

  return (
    <div className="flex w-full h-full m-4 flex-col relative">
      <Button
        variant="primary"
        size="small"
        className="absolute -right-0 -top-0 rounded-full! h-10! w-10! flex items-center justify-center p-0! peer border-none bg-transparent!"
        onClick={() => setIsDeleteProductModalOpen(true)}
      >
        <MdDeleteForever size={25} />
      </Button>
      <Tooltip className="right-10 -top-6 ">
        {DELETE} {PRODUCT}
      </Tooltip>

      <div className="w-full h-full">
        <img
          className="h-30 w-30 object-fill md:h-70 md:w-100 sm:h-50 sm:w-80 lg:w-100 lg:h-100"
          alt={name}
          src={url}
        />
      </div>
      <div className="flex flex-col justify-center items-start mt-2 gap-1 uppercase">
        <p>{name}</p>
        <p>{price} EUR</p>
      </div>
    </div>
  );
};

export { ProductCard };
