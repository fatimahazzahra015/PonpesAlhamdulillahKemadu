<template>
  <div class="agenda-card rounded-3 p-4 h-100 shadow-sm">
    <div class="d-flex flex-row gap-3 align-items-start">
      <!-- Date Box -->
      <div class="agenda-date-box flex-shrink-0 text-center rounded-3">
        <div class="agenda-date-day">{{ getDay(item.date) }}</div>
        <div class="agenda-date-month">{{ getMonth(item.date) }}</div>
      </div>
      <!-- Info -->
      <div class="flex-grow-1 min-w-0">
        <span class="agenda-badge mb-2" :class="'agenda-badge--' + item.unit.toLowerCase()">
          {{ item.unit.toUpperCase() }}
        </span>
        <h5 class="agenda-title mb-3 text-truncate-2">{{ item.title }}</h5>
        <div class="d-flex flex-column gap-2">
          <span class="agenda-meta">
            <VsxIcon iconName="Calendar" size="14" color="#6b7280" class="flex-shrink-0" />
            <span class="text-truncate">{{ formatFullDate(item.date) }}</span>
          </span>
          <span class="agenda-meta">
            <VsxIcon iconName="Location" size="14" color="#6b7280" class="flex-shrink-0" />
            <span class="text-truncate">{{ item.location }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

defineProps({
  item: { type: Object, required: true },
  getMonth: { type: Function, required: true },
  getDay: { type: Function, required: true },
  formatFullDate: { type: Function, required: true }
})
</script>

<style lang="scss" scoped>
.agenda-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.agenda-date-box {
  width: 58px;
  min-height: 64px;
  background: #eaf5ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.agenda-date-day {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.35rem;
  color: #1a5c38;
  line-height: 1.1;
}

.agenda-date-month {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 0.6875rem;
  color: #1a5c38;
  letter-spacing: 0.04em;
}

.agenda-title {
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

.agenda-meta {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  min-width: 0;
}

.agenda-badge {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  display: inline-block;

  &--ponpes { background: #eaf5ea; color: #1a5c38; }
  &--mi { background: #e8f0fe; color: #1a56db; }
  &--smk { background: #fff7ed; color: #ea580c; }
  &--madin { background: #f5f3ff; color: #7c3aed; }
  &--pesantren { background: #fefce8; color: #a16207; }
}
</style>