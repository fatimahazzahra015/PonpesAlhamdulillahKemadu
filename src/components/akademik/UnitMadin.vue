<template>
  <section id="madin" class="madin-detail section-padding">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Kolom Kiri: Gambar -->
        <div class="col-lg-6">
          <img
            src="https://picsum.photos/id/20/600/400"
            alt="Santri Madrasah Diniyyah Annuroniyyah sedang mengaji bersama"
            class="madin-image img-fluid w-100 rounded-4 shadow"
            loading="lazy"
          />
        </div>

        <!-- Kolom Kanan: Informasi -->
        <div class="col-lg-6">
          <span class="madin-badge d-inline-block mb-3">Madrasah Diniyyah</span>
          <h2 class="madin-heading mb-3">Madrasah Diniyyah Annuroniyyah</h2>
          <p class="madin-desc mb-4">
            Madrasah Diniyyah menjadi ruh tarbiyah Ponpes. Kajian kitab kuning dilaksanakan ba'da Maghrib dan Shubuh dengan jenjang berjenjang dari Ula hingga Ulya — terbuka untuk santri mukim maupun santri kalong.
          </p>

          <h4 class="madin-subheading mb-3">Jenjang &amp; Kitab</h4>

          <div class="d-flex align-items-start gap-3 mb-3" v-for="(item, idx) in jenjangList" :key="idx">
            <VsxIcon iconName="TickCircle" size="20" color="#7c3aed" class="flex-shrink-0 mt-0" />
            <div>
              <span class="madin-point-title">{{ item.title }}</span>
              <span class="madin-point-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

const jenjangList = [
  {
    title: 'Ula (3 tahun):',
    desc: ' Aqidatul Awam, Safinatun Naja, Jurumiyah, Tijan.',
  },
  {
    title: 'Wustha (3 tahun):',
    desc: ' Fathul Qarib, Imrithi, Ta\'lim Muta\'allim, Bulughul Maram.',
  },
  {
    title: 'Ulya (3 tahun):',
    desc: ' Fathul Mu\'in, Alfiyah, Jam\'ul Jawami\', Tafsir Jalalain.',
  },
  {
    title: 'Jadwal:',
    desc: ' Ba\'da Maghrib (19.30–21.00) & Ba\'da Shubuh (05.00–06.15).',
  },
]
</script>

<style lang="scss" scoped>
.madin-image {
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
}

.madin-badge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #7c3aed;
  background: #f5f3ff;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
}

.madin-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #1a1a1a;
}

.madin-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
}

.madin-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.madin-point-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #1a1a1a;
}

.madin-point-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #6b7280;
}

@media (max-width: 767.98px) {
  .madin-heading {
    font-size: 1.6rem;
  }
}
</style>
