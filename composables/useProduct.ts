import type { TProductResponse } from "~/types/product.type";

/**
 * Provides functions to add a new product or delete all selected products.
 *
 * @returns An object with the following functions:
 *   - `addProduct`: Adds a new product with the given title.
 *   - `deleteProducts`: Deletes all products that are selected.
 *   - `selectedProducts`: A reactive ref to an array of IDs of selected products.
 */
export const useProduct = () => {
  const { data } = useNuxtData<TProductResponse>("products-list");
  const selectedProducts = useState<string[]>("selectedProducts", () => []);

  /**
   * Add a new product with the given title.
   * The product is assigned a random ID.
   * @param title - The title of the new product.
   */
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

  /**
   * Deletes all products that are selected.
   * Resets the selectedProducts state to an empty array.
   */
  function deleteProducts() {
    selectedProducts.value.forEach((item: string) => {
      const foundIndex = data.value!.products.findIndex((x) => x.id === item);
      data.value!.products.splice(foundIndex, 1);
    });
    selectedProducts.value = [];
  }

  return { addProduct, deleteProducts, selectedProducts };
};
