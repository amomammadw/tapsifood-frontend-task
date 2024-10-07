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
      <ProductCard v-for="item in data.products" :item :key="item.id" />
    </template>

    <!-- * no items or fallback -->
    <template v-else>
      <ProductsNoItems class="col-span-full h-full pt-20" />
    </template>
  </div>
</template>

<script setup lang="ts">
const { status, data } = await useLazyFetch("/api/products");
</script>
