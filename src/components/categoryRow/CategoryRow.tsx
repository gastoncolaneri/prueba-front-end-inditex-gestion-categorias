import { ProductCard } from "../productCard";
import productExample1 from "../../assets/product-example-1.jpg";
import productExample2 from "../../assets/product-example-2.png";
import productExample3 from "../../assets/product-example-3.png";

const CategoryRow = () => {
  return (
    <>
      <div className="w-full h-full flex items-center p-4 rounded-md border-2 border-gray-200 mb-10">
        <ProductCard name="Product 1" price="100" url={productExample1} />
        <ProductCard name="Product 2" price="200" url={productExample2} />
        <ProductCard name="Product 3" price="300" url={productExample3} />
      </div>
    </>
  );
};

export { CategoryRow };
