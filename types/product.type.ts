export interface IProductItem {
  id: string;
  price?: number;
  title: string;
  base64Image: string;
  description: string;
  strikePrice?: number;
}

export type TProductResponse = { products: IProductItem[] };
