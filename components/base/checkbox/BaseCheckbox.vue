<template>
  <div>
    <input
      type="checkbox"
      class="size-5 accent-orange-600 cursor-pointer"
      v-model="checkboxValue"
    />
  </div>
</template>

<script setup lang="ts">
const checkboxValue = defineModel();
</script>
