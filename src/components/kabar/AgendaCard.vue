<template>
  <div class="card agenda-card border-0 shadow-sm hover-card mb-3">
    <div class="card-body p-4">
      <div class="d-flex gap-3 align-items-start">
        <div class="date-box-gold flex-shrink-0">
          <div class="day">{{ day }}</div>
          <div class="month">{{ month }}</div>
        </div>
        <div class="flex-grow-1">
          <BadgeUnit :unit="item.unit" class="mb-2" />
          <h5 class="fw-bold mb-2" style="font-size: 1rem;">{{ item.title }}</h5>
          <div class="d-flex flex-wrap gap-3 text-muted small">
            <span class="d-flex align-items-center gap-1">
              <Calendar size="14" />
              {{ fullDate }}
            </span>
            <span class="d-flex align-items-center gap-1">
              <Location size="14" />
              {{ item.location }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BadgeUnit from '@/components/shared/BadgeUnit.vue'
import { VsxIcon } from 'vue-iconsax'
import { monthNames } from '@/data/agenda.js'

const props = defineProps({
  item: { type: Object, required: true },
})

const d = new Date(props.item.date)
const day = computed(() => d.getDate())
const month = computed(() => monthNames[d.getMonth()])
const fullDate = computed(() => d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }))
</script>

<style lang="scss" scoped>
.agenda-card {
  border-radius: 1rem;
}
</style>
