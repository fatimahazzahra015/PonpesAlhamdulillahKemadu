<template>
  <nav aria-label="breadcrumb" class="mb-0">
    <ol class="breadcrumb" :class="{ 'justify-content-center': centered }">
      <li class="breadcrumb-item">
        <router-link to="/" class="text-white-50 text-decoration-none">Beranda</router-link>
      </li>
      <li class="breadcrumb-item active text-white" aria-current="page">{{ currentPage }}</li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: { type: String, required: true },
  centered: { type: Boolean, default: false },
})
</script>
