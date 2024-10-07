<template>
  <div class="py-4 border-t">
    <div class="container">
      <form
        @submit.prevent="() => {}"
        class="grid md:grid-cols-2 grid-cols-1 gap-3"
      >
        <BaseTextarea class="size-full" required />
        <BaseButton type="submit">Add to List</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
