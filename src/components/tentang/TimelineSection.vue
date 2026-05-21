<template>
  <section class="timeline-section section-padding">
    <div class="container">
      <div class="row g-5">
        <!-- Kiri: Label + Heading (sticky) -->
        <div class="col-lg-4 col-md-5 timeline-left">
          <SectionLabel label="Sejarah Ponpes" />
          <SectionHeading heading="Perjalanan Tarbiyah Sejak 1998" />
          <p class="timeline-intro mt-3">
            Berawal dari pengajian kecil di langgar sederhana, Ponpes Alhamdulillah tumbuh menjadi ekosistem pendidikan Islam terpadu yang menaungi ribuan santri.
          </p>
        </div>

        <!-- Kanan: Timeline -->
        <div class="col-lg-8 col-md-7">
          <div class="timeline">
            <div
              v-for="(item, idx) in timelineData"
              :key="item.year"
              class="timeline-item d-flex gap-3"
              :class="{ 'mb-5': idx < timelineData.length - 1 }"
            >
              <!-- Node Lingkaran -->
              <div class="timeline-node flex-shrink-0 d-flex align-items-center justify-content-center">
                <span class="timeline-node-text">{{ item.year.slice(-2) }}</span>
              </div>

              <!-- Konten -->
              <div class="timeline-content">
                <div class="timeline-header">
                  <span class="timeline-year">{{ item.year }}</span>
                  <span class="timeline-separator">—</span>
                  <span class="timeline-title">{{ item.title }}</span>
                </div>
                <p class="timeline-desc mb-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionLabel from '@/components/shared/SectionLabel.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { timelineList } from '@/data/pengurus.js'

const timelineData = timelineList
</script>

<style lang="scss" scoped>
.timeline-section {
  background: #ffffff;
}

// ── Left Column: Sticky ──
.timeline-left {
  position: sticky;
  top: 90px;
  align-self: flex-start;
  height: fit-content;
}

.timeline-intro {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.925rem;
  color: #6b7280;
  line-height: 1.65;
}

.timeline {
  position: relative;
  padding-left: 0;
}

.timeline-item {
  position: relative;
}

// ── Node Lingkaran ──
.timeline-node {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #1a5c38;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: calc(100% + 3rem);
    background: #d4e8d4;
    z-index: 0;
  }

  .timeline-item:last-child &::after {
    display: none;
  }
}

.timeline-node-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
  line-height: 1;
}

// ── Konten ──
.timeline-content {
  padding-top: 2px;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.4rem;
}

.timeline-year {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #f5a623;
  white-space: nowrap;
}

.timeline-separator {
  color: #f5a623;
  font-weight: 500;
  display: none;
}

.timeline-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
}

.timeline-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (min-width: 576px) {
  .timeline-separator {
    display: inline;
  }
}

@media (max-width: 767.98px) {
  .timeline-node {
    width: 38px;
    height: 38px;

    &::after {
      top: 38px;
    }
  }

  .timeline-node-text {
    font-size: 0.6875rem;
  }

  .timeline-header {
    flex-direction: column;
    gap: 0.15rem;
  }
}
</style>
