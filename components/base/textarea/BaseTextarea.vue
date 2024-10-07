<template>
  <div>
    <textarea
      v-bind="$attrs"
      v-model="inputValue"
      class="outline-none resize-none rounded-lg px-4 py-2 border transition-all border-gray-300 hover:border-gray-400 [&:user-invalid]:border-red-600"
    />
  </div>
</template>

<script setup lang="ts">
const inputValue = defineModel<string>();

defineOptions({ inheritAttrs: false });
</script>
