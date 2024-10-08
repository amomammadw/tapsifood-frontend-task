<template>
  <div
    class="bg-orange-100 flex cursor-pointer justify-between gap-2 transition-all hover:bg-orange-200 rounded-lg p-3"
    @click="handleProductClick(!checked)"
  >
    <div class="flex gap-2">
      <NuxtImg
        :src="item.base64Image || '/fallback.png'"
        placeholder
        loading="lazy"
        width="100"
        height="100"
        class="rounded-md object-cover"
      />
      <div>
        <p class="text-sm">{{ item.title }}</p>
        <p class="text-xs text-balance line-clamp-3">{{ item.description }}</p>
        <div class="flex gap-1">
          <b v-if="item.price" class="text-sm">${{ item.price }}</b>
          <del class="text-gray-800 text-xs" v-if="item.strikePrice">
            ${{ item.strikePrice }}
          </del>
        </div>
      </div>
    </div>

    <BaseCheckbox
      :id="item.id"
      v-model="checked"
      :value="item.id"
      :name="item.title"
      @update:model-value="handleProductClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProductItem } from "~/types/product.type";

interface IProps {
  item: IProductItem;
}

defineProps<IProps>();

const checked = defineModel<boolean>();

function handleProductClick(value: boolean) {
  checked.value = value;
}
</script>
