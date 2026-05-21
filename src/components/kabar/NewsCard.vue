<template>
  <div class="card news-card border-0 shadow-sm hover-card h-100">
    <div class="news-img-wrapper">
      <img :src="item.image" :alt="item.title" class="news-img w-100" loading="lazy" />
      <span class="news-date-badge">{{ formattedDate }}</span>
    </div>
    <div class="card-body p-4">
      <BadgeUnit :unit="item.unit" class="mb-2" />
      <h5 class="fw-bold mb-2" style="font-size: 1rem;">{{ item.title }}</h5>
      <p class="text-muted small mb-0">{{ item.excerpt }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BadgeUnit from '@/components/shared/BadgeUnit.vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const formattedDate = computed(() =>
  new Date(props.item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
)
</script>

<style lang="scss" scoped>
.news-card {
  border-radius: 1rem;
  overflow: hidden;
}
.news-img-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
}
.news-img {
  height: 100%;
  object-fit: cover;
}
.news-date-badge {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}
</style>
