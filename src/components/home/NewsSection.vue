<template>
  <section class="news-section section-padding">
    <div class="container">
      <!-- Header: Kiri label + heading, Kanan link -->
      <div class="d-flex flex-wrap justify-content-between align-items-end mb-5">
        <div>
          <SectionLabel label="Kabar Terbaru" />
          <SectionHeading heading="Berita dari Lingkungan Ponpes" />
          <p class="news-subheading mt-2">
            Informasi dan cerita terbaru seputar kegiatan di empat unit pendidikan kami.
          </p>
        </div>
        <router-link :to="{ path: '/kabar', query: { tab: 'berita' } }" class="news-view-all fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 mt-2">
          Semua Berita
          <VsxIcon iconName="ArrowRight2" size="16" color="#1a5c38" />
        </router-link>
      </div>

      <!-- Grid 3 Kartu Berita -->
      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="item in displayNews" :key="item.id">
          <div class="news-card border-0 h-100 d-flex flex-column">
            <!-- Gambar -->
            <div class="news-img-wrapper">
              <img
                :src="item.image"
                :alt="item.title"
                class="news-img w-100"
                loading="lazy"
              />
            </div>

            <!-- Body -->
            <div class="news-card-body p-4 d-flex flex-column flex-grow-1">
              <!-- Meta Row: Badge + Date -->
              <div class="d-flex align-items-center gap-3 mb-3">
                <span class="news-badge-pill">{{ item.unit }}</span>
                <div class="d-flex align-items-center gap-1">
                  <VsxIcon iconName="Calendar" size="14" color="#9ca3af" />
                  <span class="news-date-text">{{ item.formattedDate }}</span>
                </div>
              </div>

              <!-- Judul -->
              <h4 class="news-title mb-2">{{ item.title }}</h4>

              <!-- Excerpt -->
              <p class="news-excerpt mb-3 flex-grow-1">{{ item.excerpt }}</p>

              <!-- Link -->
              <router-link :to="{ path: '/kabar', query: { tab: 'berita' }, hash: `#${item.id}` }" class="news-read-link fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 mt-auto">
                Baca Selengkapnya
                <VsxIcon iconName="ArrowRight2" size="14" color="#c9a84c" />
              </router-link>
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
import { VsxIcon } from 'vue-iconsax'
import { newsList } from '@/data/news.js'
import { computed } from 'vue'

const displayNews = computed(() => {
  return newsList.slice(0, 3).map(n => ({
    ...n,
    formattedDate: new Date(n.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
  }))
})
</script>

<style lang="scss" scoped>
// ── Section ──
.news-section {
  background: #ffffff;
}

.news-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.925rem;
  color: #6b7280;
  max-width: 460px;
  line-height: 1.5;
}

.news-view-all {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1a5c38;
  font-size: 0.925rem;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #c9a84c;
  }
}

// ── Kartu Berita ──
.news-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
  }
}

// ── Gambar ──
.news-img-wrapper {
  aspect-ratio: 16/10;
  overflow: hidden;
}

.news-img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  .news-card:hover & {
    transform: scale(1.04);
  }
}

// ── Badge Unit Pill (pastel green bg, dark green text) ──
.news-badge-pill {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #1a5c38;
  background: #eaf5ea;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  line-height: 1.4;
}

// ── Date Text ──
.news-date-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.775rem;
  color: #9ca3af;
}

// ── Judul ──
.news-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.05rem;
  color: #1a1a1a;
  line-height: 1.35;
}

// ── Excerpt ──
.news-excerpt {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.65;
}

// ── Read Link ──
.news-read-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #c9a84c;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #b8963a;
  }
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .news-title {
    font-size: 0.95rem;
  }
}
</style>
