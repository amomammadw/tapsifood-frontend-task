<template>
  <header class="bg-orange-500 py-4">
    <nav class="container grid grid-cols-3 items-center">
      <div></div>

      <h1
        class="font-semibold text-2xl whitespace-nowrap justify-self-center text-white"
      >
        Shopping List
      </h1>

      <div class="justify-self-end">
        <Icon
          name="tabler:trash-filled"
          size="24px"
          @click="handleDeleteProducts"
          class="text-white cursor-pointer hover:bg-gray-200 transition-all"
        />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { deleteProducts, selectedProducts } = useProduct();

function handleDeleteProducts() {
  if (selectedProducts.value.length === 0) {
    alert("Please Select Some Products");
    return;
  }
  deleteProducts();
}
</script>
