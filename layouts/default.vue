<template>
  <div class="h-dvh flex flex-col justify-between">
    <MainHeader />
    <main class="container h-[calc(100%-121px)] overflow-auto">
      <slot />
    </main>
    <AddProductForm />
  </div>
</template>

<script setup lang="ts"></script>
