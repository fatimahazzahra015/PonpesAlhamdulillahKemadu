<template>
  <section id="mi" class="mi-detail section-padding">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Kolom Kiri: Gambar -->
        <div class="col-lg-6">
          <img
            src="https://picsum.photos/id/1012/600/400"
            alt="Santri MI Annuroniyyah sedang belajar di kelas"
            class="mi-image img-fluid w-100 rounded-4 shadow"
            loading="lazy"
          />
        </div>

        <!-- Kolom Kanan: Informasi -->
        <div class="col-lg-6">
          <span class="mi-badge d-inline-block mb-3">Pendidikan Dasar</span>
          <h2 class="mi-heading mb-3">MI Annuroniyyah</h2>
          <p class="mi-desc mb-4">
            Madrasah Ibtidaiyah Annuroniyyah adalah jenjang pendidikan dasar setingkat SD dengan kurikulum nasional yang dipadukan muatan keislaman. Fokus kami: menumbuhkan kecintaan pada Al-Qur'an, literasi, dan akhlak sejak dini.
          </p>

          <h4 class="mi-subheading mb-3">Keunggulan Program</h4>

          <div class="d-flex align-items-start gap-3 mb-3" v-for="(item, idx) in keunggulanList" :key="idx">
            <VsxIcon iconName="TickCircle" size="20" color="#1a5c38" class="flex-shrink-0 mt-0" />
            <div>
              <span class="mi-point-title">{{ item.title }}</span>
              <span class="mi-point-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

const keunggulanList = [
  {
    title: 'Kurikulum Merdeka + Diniyyah:',
    desc: ' Penguatan akhlak, tahfidz juz 30, dan baca tulis Al-Qur\'an.',
  },
  {
    title: 'Pembelajaran Aktif & Bermakna:',
    desc: ' Project-based learning untuk literasi dan numerasi.',
  },
  {
    title: 'Program Tahfidz Reguler:',
    desc: ' Target hafalan 1 juz pada akhir kelas 6.',
  },
  {
    title: 'Ekstrakurikuler Beragam:',
    desc: ' Pramuka, kaligrafi, MTQ, sains club, robotik dasar.',
  },
]
</script>

<style lang="scss" scoped>
// ── Gambar ──
.mi-image {
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
}

// ── Badge ──
.mi-badge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #1a5c38;
  background: #eaf5ea;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
}

// ── Heading ──
.mi-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #1a1a1a;
}

// ── Deskripsi ──
.mi-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
}

// ── Subheading ──
.mi-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

// ── Point Items ──
.mi-point-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #1a1a1a;
}

.mi-point-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #6b7280;
}

@media (max-width: 767.98px) {
  .mi-heading {
    font-size: 1.6rem;
  }
}
</style>
