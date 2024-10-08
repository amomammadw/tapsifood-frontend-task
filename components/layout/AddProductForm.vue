<template>
  <div class="py-4 border-t">
    <div class="container">
      <form
        @submit.prevent="handleFormSubmit"
        class="grid md:grid-cols-2 grid-cols-1 gap-3"
      >
        <BaseTextarea v-model="productTitle" class="size-full" required />
        <BaseButton type="submit">Add to List</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { addProduct } = useProduct();

const productTitle = ref("");

function handleFormSubmit() {
  addProduct(productTitle.value);
  productTitle.value = "";
}
</script>
