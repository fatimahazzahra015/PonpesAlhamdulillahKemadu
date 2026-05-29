<template>
  <div class="news-card rounded-3 shadow-sm overflow-hidden h-100 d-flex flex-column">
    <div class="news-card-img-wrapper">
      <img :src="item.image" :alt="item.title" class="news-card-img w-100" loading="lazy" />
    </div>
    <div class="news-card-body p-4 d-flex flex-column flex-grow-1">
      <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
        <span class="agenda-badge" :class="'agenda-badge--' + item.unit.toLowerCase()">
          {{ item.unit.toUpperCase() }}
        </span>
        <span class="news-card-date">
          <VsxIcon iconName="Calendar" size="13" color="#6b7280" />
          {{ formatFullDate(item.date) }}
        </span>
      </div>
      <h5 class="news-card-title mb-2 text-truncate-2">{{ item.title }}</h5>
      <p class="news-card-excerpt mb-4 text-truncate-3">{{ item.excerpt }}</p>
      <a href="#" class="news-readmore mt-auto" @click.prevent="$emit('read', item)">
        Baca Selengkapnya →
      </a>
    </div>
  </div>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

defineProps({
  item: { type: Object, required: true },
  formatFullDate: { type: Function, required: true }
})

defineEmits(['read'])
</script>

<style lang="scss" scoped>
.news-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
  }
}

.news-card-img-wrapper {
  overflow: hidden;
  aspect-ratio: 16/10;

  .news-card-img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
}

.news-card:hover .news-card-img {
  transform: scale(1.04);
}

.news-card-date {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.75rem;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.news-card-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.4;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-excerpt {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  line-height: 1.5;
}

.news-readmore {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #f5a623;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #d4891a;
  }
}

.agenda-badge {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;

  &--ponpes { background: #eaf5ea; color: #1a5c38; }
  &--mi { background: #e8f0fe; color: #1a56db; }
  &--smk { background: #fff7ed; color: #ea580c; }
  &--madin { background: #f5f3ff; color: #7c3aed; }
  &--pesantren { background: #fefce8; color: #a16207; }
}
</style>