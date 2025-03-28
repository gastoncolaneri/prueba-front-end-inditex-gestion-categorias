const ProductCard = ({
  name,
  price,
  url,
}: {
  name: string;
  price: string;
  url: string;
}) => {
  return (
    <div className="flex w-full h-full m-4 flex-col ">
      <div className="w-full h-full">
        <img
          className="h-30 w-30 object-fill md:h-70 md:w-100 sm:h-50 sm:w-80 lg:w-100 lg:h-100 "
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
