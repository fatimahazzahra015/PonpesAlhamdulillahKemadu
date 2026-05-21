<template>
  <section class="about-section section-padding">
    <div class="container">
      <!-- About Row: Teks Kiri + Gambar Kanan -->
      <div class="row align-items-center g-5 mb-5">
        <!-- Kiri: Konten Teks -->
        <div class="col-lg-6">
          <SectionLabel label="Tentang Ponpes" />
          <SectionHeading heading="Tarbiyah Terpadu yang Membentuk Karakter Sepanjang Hidup" />
          <p class="about-text mb-4">
            Berdiri tahun 1998 di Desa Kemadu, Ponpes Alhamdulillah hadir sebagai rumah pendidikan bagi generasi muda Muslim. Empat unit pendidikan kami bekerja sinergis dari jenjang dasar hingga pesantren untuk mencetak pribadi yang shalih, cerdas, dan mandiri.
          </p>
          <router-link to="/tentang" class="about-link fw-semibold text-decoration-none d-inline-flex align-items-center gap-2">
            Pelajari sejarah & visi Ponpes
            <VsxIcon iconName="ArrowRight2" size="16" color="#1a5c38" />
          </router-link>
        </div>

        <!-- Kanan: Gambar + Badge Floating -->
        <div class="col-lg-6">
          <div class="about-image-wrapper">
            <img
              src="https://picsum.photos/seed/pesantren-building/800/600"
              alt="Gedung Ponpes Alhamdulillah Kemadu"
              class="about-image img-fluid w-100 rounded-4 shadow"
              loading="lazy"
            />
            <div class="about-floating-badge rounded-3 p-3">
              <span class="badge-number">28+</span>
              <span class="badge-label">TAHUN MENGABDI</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="row g-4">
        <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
          <div class="stat-card text-center p-4 h-100 rounded-3">
            <div class="stat-icon mb-3">
              <VsxIcon :iconName="stat.icon" size="28" color="#1a5c38" />
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
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

const stats = [
  { icon: 'Profile2User', value: '1.200+', label: 'SANTRI & SISWA' },
  { icon: 'Heart', value: '85+', label: 'ASATIDZ & GURU' },
  { icon: 'Award', value: '3.500+', label: 'ALUMNI TERSEBAR' },
  { icon: 'Star1', value: '1998', label: 'TAHUN BERDIRI' },
]
</script>

<style lang="scss" scoped>
.about-section {
  background: #ffffff;
}

// ── Teks ──
.about-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #6b7280;
}

.about-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1a5c38;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: #f5a623;
  }
}

// ── Gambar + Badge Floating ──
.about-image-wrapper {
  position: relative;
  display: inline-block;
}

.about-image {
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
}

.about-floating-badge {
  position: absolute;
  bottom: -12px;
  left: -12px;
  background: #f39c12;
  box-shadow: 0 6px 24px rgba(243, 156, 18, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.15;
  z-index: 2;

  .badge-number {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-weight: 800;
    font-size: 1.75rem;
    color: #1a1a1a;
  }

  .badge-label {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-weight: 600;
    font-size: 0.625rem;
    color: #1a1a1a;
    text-align: center;
    letter-spacing: 0.04em;
  }
}

// ── Stat Cards ──
.stat-card {
  background: #e6f8e6;
  border: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-value {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.75rem;
  color: #1a5c38;
  line-height: 1.1;
}

.stat-label {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.35rem;
}

@media (max-width: 767.98px) {
  .about-floating-badge {
    bottom: 1rem;
    left: 1rem;

    .badge-number {
      font-size: 1.4rem;
    }
  }

  .stat-value {
    font-size: 1.4rem;
  }
}
</style>
