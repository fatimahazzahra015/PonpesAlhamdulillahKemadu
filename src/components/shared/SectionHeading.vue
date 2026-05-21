<template>
  <div class="section-heading-wrap mb-4">
    <h2 class="section-heading mb-0">{{ heading }}</h2>
  </div>
</template>

<script setup>
defineProps({
  heading: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
.section-heading-wrap {
  position: relative;
}

.section-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 1.25;
  color: #1a1a1a;
}

@media (max-width: 767.98px) {
  .section-heading {
    font-size: 1.75rem;
  }
}
</style>
