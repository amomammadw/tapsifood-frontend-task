<template>
  <div>
    <input type="checkbox" v-model="checkboxValue" />
  </div>
</template>

<script setup lang="ts">
const checkboxValue = defineModel();
</script>
