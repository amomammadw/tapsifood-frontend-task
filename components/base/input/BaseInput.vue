<template>
  <div>
    <input v-model="inputValue" />
  </div>
</template>

<script setup lang="ts">
const inputValue = defineModel();
</script>
