import { TProductResponse } from "~/types/product.type";

export default defineCachedEventHandler(
  async (event) => {
    const res = await $fetch<TProductResponse>(
      "https://shopping-list-ten-kohl.vercel.app/products.json"
    );

    if (res.products && res.products.length > 0) {
      return res as TProductResponse;
    }
  },
  { swr: true }
);
