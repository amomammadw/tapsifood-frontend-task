<template>
  <div>
    <input
      type="checkbox"
      v-bind="$attrs"
      v-model="checkboxValue"
      class="size-5 accent-orange-600 cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
const checkboxValue = defineModel();

defineOptions({ inheritAttrs: false });
</script>
