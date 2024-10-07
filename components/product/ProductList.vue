<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
    <template v-if="status === 'pending'">
      <div
        v-for="i in 10"
        class="w-full h-28 bg-gray-300 animate-pulse rounded-lg"
      ></div>
    </template>

    <template v-else-if="data && data.products.length > 0">
      <ProductCard v-for="item in data?.products" :item />
    </template>

    <template v-else>
      <ProductsNotItems class="col-span-full h-full pt-20" />
    </template>
  </div>
</template>

<script setup lang="ts">
const { status, data } = await useFetch("/api/products");
</script>
