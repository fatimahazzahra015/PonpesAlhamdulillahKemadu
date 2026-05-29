<template>
  <section class="timeline-section section-padding">
    <div class="container">
      <div class="row g-4 g-lg-5">
        <div class="col-lg-4 col-md-5 timeline-left">
          <SectionLabel label="Sejarah Ponpes" />
          <SectionHeading heading="Perjalanan Tarbiyah Sejak 1998" />
          <p class="timeline-intro mt-3">
            Berawal dari pengajian kecil di langgar sederhana, Ponpes Alhamdulillah tumbuh menjadi ekosistem pendidikan Islam terpadu yang menaungi ribuan santri.
          </p>
        </div>

        <div class="col-lg-8 col-md-7">
          <div class="timeline">
            <div
              v-for="(item, idx) in timelineData"
              :key="item.year"
              class="timeline-item d-flex gap-3"
              :class="{ 'mb-4 mb-md-5': idx < timelineData.length - 1 }"
            >
              <div class="timeline-node flex-shrink-0 d-flex align-items-center justify-content-center">
                <span class="timeline-node-text">{{ item.year.slice(-2) }}</span>
              </div>

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
  padding: 60px 0; // Memastikan padding section aman
}

// ── Left Column: Sticky hanya aktif di desktop (md ke atas) ──
.timeline-left {
  @media (min-width: 768px) {
    position: sticky;
    top: 90px;
    align-self: flex-start;
    height: fit-content;
  }
}

.timeline-intro {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.925rem;
  color: #6b7280;
  line-height: 1.65;
}

// ── Induk Timeline (Garis ditaruh di sini agar kokoh) ──
.timeline {
  position: relative;
  padding-left: 0;

  &::before {
    content: '';
    position: absolute;
    // Posisi horizontal: setengah dari lebar node (44px / 2 = 22px)
    left: 22px; 
    top: 22px; // Mulai dari tengah lingkaran pertama
    bottom: 22px; // Berhenti di tengah lingkaran terakhir
    width: 2px;
    background: #d4e8d4;
    z-index: 1;
  }
}

.timeline-item {
  position: relative;
  z-index: 2; // Menjaga teks & node di atas garis pembungkus
}

// ── Node Lingkaran ──
.timeline-node {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #1a5c38;
  position: relative;
  z-index: 3;
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
  padding-top: 8px; // Diselaraskan agar teks pas di tengah vertikal lingkaran
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
  font-size: 1.1rem;
  color: #f5a623;
  white-space: nowrap;
}

.timeline-separator {
  color: #f5a623;
  font-weight: 500;
  display: none; // Default sembunyi di layar super kecil (HP)
}

.timeline-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.timeline-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}

/* ── RESPONSIVE TABLET & HP ── */

@media (min-width: 576px) {
  .timeline-separator {
    display: inline;
  }
}

@media (max-width: 767.98px) {
  .timeline-section {
    padding: 40px 0;
  }

  // Sesuaikan posisi garis induk karena ukuran lingkaran mengecil (38px / 2 = 19px)
  .timeline {
    &::before {
      left: 19px;
      top: 19px;
      bottom: 19px;
    }
  }

  .timeline-node {
    width: 38px;
    height: 38px;
  }

  .timeline-node-text {
    font-size: 0.6875rem;
  }

  .timeline-content {
    padding-top: 6px;
  }

  .timeline-header {
    flex-direction: column; // Tahun dan Judul menumpuk rapi ke bawah di HP
    gap: 0.15rem;
  }

  .timeline-year, .timeline-title {
    font-size: 1rem;
  }
}
</style>