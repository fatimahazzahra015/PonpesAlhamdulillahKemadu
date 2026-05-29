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

<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
  align-items: center;
  + .breadcrumb-item::before {
    float: none; // Membersihkan float bawaan bootstrap lama jika ada
    content: ">" !important;
    color: rgba(255, 255, 255, 0.8) !important; // Putih sedikit transparan agar tidak terlalu kontras
    padding-right: var(--bs-breadcrumb-item-padding-x, 0.5rem);
  }
}
.text-white-50 {
  transition: color 0.2s ease;
  &:hover {
    color: #ffffff !important;
  }
}
</style>