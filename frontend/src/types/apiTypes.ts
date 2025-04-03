interface GetProduct {
  id: number;
  product_name: string;
  product_price: number;
  product_image_url: string;
  row_id: string;
}

interface AddProduct {
  product_name: string;
  product_price: number;
  product_image_url: string;
  row_id: string;
}

export type { AddProduct, GetProduct };
