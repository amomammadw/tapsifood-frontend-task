<template>
  <div
    class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
  >
    <!-- * loading -->
    <template v-if="status === 'pending'">
      <div
        v-for="i in 10"
        class="w-full h-28 bg-gray-300 animate-pulse rounded-lg"
      ></div>
    </template>

    <!-- * product cards -->
    <template v-else-if="data && data.products.length > 0">
      <ProductCard
        :item
        :key="item.id"
        @update:model-value="onUpdateModelValue($event, item.id)"
        v-for="(item, idx) in data.products"
      />
    </template>

    <!-- * no items or fallback -->
    <template v-else>
      <ProductsNoItems class="col-span-full h-full pt-20" />
    </template>
  </div>
</template>

<script setup lang="ts">
const { status, data } = await useLazyFetch("/api/products", {
  key: "products-list",
});

const { selectedProducts } = useProduct();

function onUpdateModelValue(event: boolean, value: string) {
  if (event) {
    selectedProducts.value.push(value);
  } else if (selectedProducts.value.includes(value)) {
    const foundIndex = selectedProducts.value.findIndex((x) => x === value);
    selectedProducts.value.splice(foundIndex, 1);
  }
}
</script>
