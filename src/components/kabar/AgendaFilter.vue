<template>
  <div class="d-flex flex-wrap gap-2">
    <button
      v-for="unit in filterOptions"
      :key="unit.value"
      @click="$emit('filter', unit.value)"
      class="filter-badge btn btn-sm rounded-pill"
      :class="modelValue === unit.value ? 'btn-success' : 'btn-outline-secondary'"
    >
      {{ unit.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: 'Semua' },
})

defineEmits(['filter'])

const filterOptions = [
  { value: 'Semua', label: 'Semua' },
  { value: 'Ponpes', label: 'Ponpes' },
  { value: 'MI', label: 'MI' },
  { value: 'SMK', label: 'SMK' },
  { value: 'Madin', label: 'Madin' },
  { value: 'Pesantren', label: 'Pesantren' },
]
</script>

<style lang="scss" scoped>
.btn-outline-secondary {
  color: #6b7280;
  border-color: #d1d5db;
  &:hover {
    background: #f3f4f6;
    color: #1a5c38;
    border-color: #1a5c38;
  }
}
.btn-success {
  background-color: #1a5c38;
  border-color: #1a5c38;
}
</style>
