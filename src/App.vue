<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <div class="p-4">
    <header class="text-center">
      <img alt="Vue logo" class="mx-auto w-20 h-20" src="@/assets/logo.svg" />
    </header>
    <RouterView />
  </div>
</template>