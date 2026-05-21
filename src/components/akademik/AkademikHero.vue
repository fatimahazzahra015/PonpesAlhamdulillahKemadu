<template>
  <section class="akademik-hero d-flex align-items-center text-center" :style="{ backgroundImage: `url(https://picsum.photos/seed/pesantren/1920/800)` }">
    <div class="container position-relative">
      <BreadcrumbNav currentPage="Akademik" centered />
      <h1 class="akademik-hero-title mb-3">Unit Pendidikan</h1>
      <p class="akademik-hero-desc mx-auto mb-4">
        Empat unit pendidikan kami berjalan beriringan untuk membentuk generasi yang utuh — dari madrasah dasar hingga pesantren tinggi.
      </p>

      <!-- Pill Buttons -->
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <button
          v-for="pill in unitPills"
          :key="pill.id"
          class="hero-pill d-inline-flex align-items-center gap-2"
          @click="scrollToUnit(pill.id)"
        >
          <VsxIcon :iconName="pill.icon" size="18" color="#ffffff" />
          <span>{{ pill.label }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import BreadcrumbNav from '@/components/shared/BreadcrumbNav.vue'
import { VsxIcon } from 'vue-iconsax'

const unitPills = [
  { id: 'mi', label: 'MI Annuroniyyah', icon: 'Building' },
  { id: 'smk', label: 'SMK Annuroniyyah', icon: 'Award' },
  { id: 'madin', label: 'Madrasah Diniyyah', icon: 'Book1' },
  { id: 'pesantren', label: 'Pesantren', icon: 'Home2' },
]

function scrollToUnit(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style lang="scss" scoped>
.akademik-hero {
  position: relative;
  min-height: 65vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:rgba(27, 94, 32, 0.82);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.akademik-hero-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: #ffffff;
  line-height: 1.15;
}

.akademik-hero-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 600px;
}

// ── Pill Buttons ──
.hero-pill {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.55);
    transform: translateY(-2px);
  }
}

@media (max-width: 767.98px) {
  .akademik-hero {
    min-height: 55vh;
  }

  .akademik-hero-title {
    font-size: 2rem;
  }

  .akademik-hero-desc {
    font-size: 0.9rem;
  }

  .hero-pill {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>
