import { GetProduct } from "./apiTypes";

interface Row {
  id: string;
  products: GetProduct[];
}

interface CategoryRowProps {
  id: string;
  products: GetProduct[];
}

export type { Row, CategoryRowProps };
