<template>
  <div>
    <textarea
      v-bind="$attrs"
      v-model="inputValue"
      class="outline-none resize-none rounded-lg px-4 py-2 border border-gray-300 [&:user-invalid]:border-red-600 peer"
    />
  </div>
</template>

<script setup lang="ts">
const inputValue = defineModel<string>();

defineOptions({ inheritAttrs: false });
</script>
