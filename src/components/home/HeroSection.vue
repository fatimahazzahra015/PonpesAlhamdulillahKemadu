<template>
  <section class="hero-section d-flex align-items-center" :style="{ backgroundImage: `url(https://picsum.photos/seed/masjid/1920/1080)` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xl-7">
          <!-- Badge Pill -->
          <div class="hero-badge d-inline-flex align-items-center gap-2 mb-4">
            <VsxIcon iconName="Star1" size="11" color="black" />
            <span>PENDIDIKAN ISLAM TERPADU — SEJAK 1998</span>
          </div>

          <!-- H1 -->
          <h1 class="hero-title mb-3">
            Membentuk Generasi
            <span class="text-highlight">Qur'ani</span>
            yang Berakhlak &amp; Berprestasi
          </h1>

          <!-- Deskripsi -->
          <p class="hero-description mb-4">
            Ponpes Alhamdulillah Kemadu menaungi MI, SMK, Madrasah Diniyyah, dan Pesantren dalam satu ekosistem tarbiyah yang utuh — memadukan ilmu agama, akademik, dan keterampilan hidup.
          </p>

          <!-- CTA Buttons -->
          <div class="d-flex flex-wrap gap-3 mt-4">
            <router-link to="/akademik#pesantren" class="btn-cta-primary">
              Daftar Santri Baru
              <VsxIcon iconName="ArrowRight2" size="18" />
            </router-link>
            <router-link to="/tentang" class="btn-cta-outline">
              Kenali Ponpes
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
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
  }
}

// ── Badge Pill ──
.hero-badge {
  background: #f39c12;
  color: black;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  line-height: 1;
  white-space: nowrap;
}

// ── Heading H1 ──
.hero-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 1.2;
  color: #ffffff;
  letter-spacing: -0.02em;

  .text-highlight {
    color: #f39c12;
  }
}

// ── Deskripsi ──
.hero-description {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #e0e0e0;
  font-weight: 400;
  max-width: 540px;
}

// ── CTA Primary ──
.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f39c12;
  color: #1a1a1a;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  border: none;
  gap: 0.5rem;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #e08e0b;
    color: #1a1a1a;
    transform: translateY(-2px);
  }
}

// ── CTA Outline ──
.btn-cta-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.2s ease;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transform: translateY(-2px);
  }
}

@media (max-width: 991.98px) {
  .hero-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 767.98px) {
  .hero-section {
    min-height: 90vh;
  }

  .hero-title {
    font-size: 1.9rem;
  }

  .hero-description {
    font-size: 0.9375rem;
  }

  .hero-badge {
    font-size: 0.625rem;
    padding: 0.4rem 0.9rem;
    letter-spacing: 0.04em;
  }

  .btn-cta-primary,
  .btn-cta-outline {
    font-size: 0.875rem;
    padding: 0.65rem 1.25rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
