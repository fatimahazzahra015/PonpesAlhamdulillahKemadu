<template>
  <section id="smk" class="smk-detail section-padding">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Kolom Kiri: Informasi -->
        <div class="col-lg-6">
          <span class="smk-badge d-inline-block mb-3">Pendidikan Menengah Kejuruan</span>
          <h2 class="smk-heading mb-3">SMK Annuroniyyah</h2>
          <p class="smk-desc mb-4">
            SMK Annuroniyyah menyiapkan lulusan yang siap kerja, siap kuliah, dan siap berwirausaha dengan bekal nilai-nilai Islami. Fasilitas vokasional modern dan kemitraan industri menjadi andalan kami.
          </p>

          <h4 class="smk-subheading mb-3">Kompetensi Keahlian</h4>

          <div class="d-flex align-items-start gap-3 mb-3" v-for="(item, idx) in keahlianList" :key="idx">
            <VsxIcon iconName="TickCircle" size="20" color="#ea580c" class="flex-shrink-0 mt-0" />
            <div>
              <span class="smk-point-title">{{ item.title }}</span>
              <span class="smk-point-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Gambar (kanan pada lg+) -->
        <div class="col-lg-6">
          <img
            src="https://picsum.photos/id/1025/600/400"
            alt="Siswa SMK Annuroniyyah sedang praktik di lab komputer"
            class="smk-image img-fluid w-100 rounded-4 shadow"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

const keahlianList = [
  {
    title: 'Teknik Komputer & Jaringan (TKJ):',
    desc: ' Jaringan, server, cloud, dan keamanan siber.',
  },
  {
    title: 'Multimedia & Desain:',
    desc: ' Desain grafis, videografi, motion graphics.',
  },
  {
    title: 'Akuntansi & Keuangan Lembaga:',
    desc: ' Akuntansi syariah dan administrasi perpajakan.',
  },
  {
    title: 'Tata Busana Muslim:',
    desc: ' Desain, jahit, dan kewirausahaan fesyen muslim.',
  },
]
</script>

<style lang="scss" scoped>
.smk-image {
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
}

.smk-badge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #ea580c;
  background: #fff7ed;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
}

.smk-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #1a1a1a;
}

.smk-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
}

.smk-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.smk-point-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #1a1a1a;
}

.smk-point-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #6b7280;
}

@media (max-width: 767.98px) {
  .smk-heading {
    font-size: 1.6rem;
  }
}
</style>
