<template>
  <nav class="mt-4" v-if="totalPages > 1">
    <ul class="pagination justify-content-center gap-1">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="$emit('page', currentPage - 1)">&lsaquo;</a>
      </li>
      <li
        class="page-item"
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('page', page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="$emit('page', currentPage + 1)">&rsaquo;</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

defineEmits(['page'])
</script>

<style lang="scss" scoped>
.page-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a5c38;
  border-radius: 0.5rem !important;
  padding: 0;
  &:hover { background: #f0fdf4; }
}
.page-item.active .page-link {
  background-color: #1a5c38;
  border-color: #1a5c38;
  color: #fff;
}
.page-item.disabled .page-link {
  color: #9ca3af;
}
</style>
