<template>
  <main>
    <!-- ═══════════════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════════════ -->
    <section class="tentang-hero d-flex align-items-center" :style="{ backgroundImage: `url(https://picsum.photos/id/1018/1920/600)` }">
      <div class="container position-relative">
        <div class="col-lg-8">
          <BreadcrumbNav currentPage="Tentang Kami" />
          <h1 class="tentang-hero-title mt-3 mb-3">Tentang Kami</h1>
          <p class="tentang-hero-desc mb-0">
            Mengenal lebih dekat sejarah, visi, dan orang-orang di balik perjalanan Ponpes Alhamdulillah Kemadu.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         KONTEN (semua section dalam background #eef7f2)
         ═══════════════════════════════════════════════════ -->
    <div class="tentang-content">
      <TimelineSection />
      <VisiMisiSection />
      <PilarSection />
      <PengurusSection />
    </div>
  </main>
</template>

<script setup>
import BreadcrumbNav from '@/components/shared/BreadcrumbNav.vue'
import VisiMisiSection from '@/components/tentang/VisiMisiSection.vue'
import TimelineSection from '@/components/tentang/TimelineSection.vue'
import PilarSection from '@/components/tentang/PilarSection.vue'
import PengurusSection from '@/components/tentang/PengurusSection.vue'
</script>

<style lang="scss" scoped>
// ── Hero ──
.tentang-hero {
  position: relative;
  min-height: 65vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(27, 94, 32, 0.82);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.tentang-hero-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: #ffffff;
  line-height: 1.15;
}

.tentang-hero-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 540px;
}

// ── Content Wrapper ──
.tentang-content {
  background: #eef7f2;
}

@media (max-width: 767.98px) {
  .tentang-hero {
    min-height: 55vh;
  }

  .tentang-hero-title {
    font-size: 2rem;
  }

  .tentang-hero-desc {
    font-size: 0.9rem;
  }
}
</style>
