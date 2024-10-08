import type { TProductResponse } from "~/types/product.type";

export const useProduct = () => {
  const { data } = useNuxtData<TProductResponse>("products-list");
  const selectedProducts = useState<string[]>("selectedProducts", () => []);

  function addProduct(title: string) {
    data.value?.products.push({
      id: randomGenerator(),
      title,
      description: "",
      base64Image: "",
      price: undefined,
      strikePrice: undefined,
    });
  }

  function deleteProducts() {
    selectedProducts.value.forEach((item: string) => {
      const foundIndex = data.value!.products.findIndex((x) => x.id === item);
      data.value!.products.splice(foundIndex, 1);
    });
    selectedProducts.value = [];
  }

  return { addProduct, deleteProducts, selectedProducts };
};
