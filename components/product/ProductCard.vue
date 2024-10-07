<template>
  <div class="bg-orange-100 transition-all hover:bg-orange-200 rounded-lg p-3">
    Card Item
  </div>
</template>

<script setup lang="ts">
import type { IProductItem } from "~/types/product.type";

interface IProps {
  item: IProductItem;
}

defineProps<IProps>();
</script>
