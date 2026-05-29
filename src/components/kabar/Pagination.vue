<template>
  <nav class="d-flex justify-content-center mt-5" aria-label="Navigasi halaman">
    <ul class="pagination-custom d-flex align-items-center gap-1 p-0 m-0">
      <!-- Tombol Prev -->
      <li>
        <button 
          class="page-btn" 
          :disabled="currentPage === 1" 
          @click="$emit('page', currentPage - 1)"
          aria-label="Halaman sebelumnya"
        >
          &larr;
        </button>
      </li>

      <!-- Nomor Halaman -->
      <li v-for="page in totalPages" :key="page">
        <button 
          class="page-number-btn" 
          :class="{ 'page-number-btn--active': currentPage === page }"
          @click="$emit('page', page)"
        >
          {{ page }}
        </button>
      </li>

      <!-- Tombol Next -->
      <li>
        <button 
          class="page-btn" 
          :disabled="currentPage === totalPages" 
          @click="$emit('page', currentPage + 1)"
          aria-label="Halaman selanjutnya"
        >
          &rarr;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true }
})

defineEmits(['page'])
</script>

<style lang="scss" scoped>
.pagination-custom {
  list-style: none;
}

.page-btn, .page-number-btn {
  background: #ffffff;
  border: 1px solid #d1d5db;
  color: #4b5563;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  height: 38px;
  min-width: 38px;
  padding: 0 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #1a5c38;
    color: #1a5c38;
    background: #f0fdf4;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f3f4f6;
  }
}

.page-number-btn {
  border-radius: 8px;
  
  &--active {
    background: #1a5c38;
    color: #ffffff;
    border-color: #1a5c38;

    &:hover {
      background: #154a2d;
      color: #ffffff;
    }
  }
}
</style>