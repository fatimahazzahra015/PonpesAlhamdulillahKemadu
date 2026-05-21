<template>
  <div class="section-label-outer d-flex mb-3" :class="{ 'justify-content-center': centered }">
    <span class="section-label text-uppercase">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  centered: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
.section-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #1a5c38;
  letter-spacing: 0.06em;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
</style>
