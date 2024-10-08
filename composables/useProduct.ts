import type { TProductResponse } from "~/types/product.type";

export const useProduct = () => {
  const { data } = useNuxtData<TProductResponse>("products-list");

  function addProduct(title: string) {
    data.value?.products.push({ title });
  }

  return { addProduct };
};
