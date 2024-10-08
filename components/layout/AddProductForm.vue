<template>
  <div class="py-4 border-t">
    <div class="container">
      <form
        @submit.prevent="handleFormSubmit"
        class="grid md:grid-cols-2 grid-cols-1 gap-3"
      >
        <BaseTextarea
          required
          :key="formKey"
          class="size-full"
          v-model="productTitle"
        />
        <BaseButton type="submit">Add to List</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { addProduct } = useProduct();

const productTitle = ref("");
const formKey = ref(0);

/**
 * Handles form submission by adding a new product with the given title
 * and then resetting the form by clearing the input
 */
function handleFormSubmit() {
  addProduct(productTitle.value);
  productTitle.value = "";
  formKey.value++;
}
</script>
