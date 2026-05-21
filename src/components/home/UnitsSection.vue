<template>
  <section class="section-padding bg-light-warm">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5">
        <div class="d-flex justify-content-center"><SectionLabel label="Unit Pendidikan" /></div>
        <SectionHeading heading="Empat Unit, Satu Visi Pendidikan" />
        <p class="units-subheading mx-auto">
          Setiap unit memiliki keunggulan tersendiri namun berjalan dalam satu nafas tarbiyah yang sama.
        </p>
      </div>

      <!-- Kartu Unit -->
      <div class="row g-4">
        <div class="col-lg-3 col-md-6" v-for="unit in unitList" :key="unit.id">
          <div class="card unit-card border-0 h-100">
            <div class="card-body p-4 d-flex flex-column">
              <!-- Icon Wrapper -->
              <div class="unit-icon-wrap mb-3" :style="{ background: unit.iconBg }">
                <VsxIcon :iconName="unit.icon" size="26" color="#1a5c38" />
              </div>

              <!-- Label Kecil -->
              <span class="unit-label text-uppercase mb-2">{{ unit.label }}</span>

              <!-- Nama Unit -->
              <h4 class="unit-name mb-2">{{ unit.name }}</h4>

              <!-- Deskripsi -->
              <p class="unit-desc mb-3 flex-grow-1">{{ unit.description }}</p>

              <!-- Link -->
              <router-link :to="`/akademik#${unit.id}`" class="unit-link fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 mt-auto">
                Selengkapnya
                <VsxIcon iconName="ArrowRight2" size="15" color="#1a5c38" />
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

const unitList = [
  {
    id: 'mi',
    name: 'MI Annuroniyyah',
    label: 'Pendidikan Dasar',
    icon: 'Teacher',
    iconBg: '#e8f5e9',
    description: 'Madrasah Ibtidaiyah yang memadukan kurikulum nasional dengan muatan pesantren. Siswa dibekali dasar Al-Qur\'an, akhlak, dan ilmu pengetahuan umum.',
  },
  {
    id: 'smk',
    name: 'SMK Annuroniyyah',
    label: 'Pendidikan Menengah',
    icon: 'Buildings',
    iconBg: '#fff8e1',
    description: 'Sekolah Menengah Kejuruan dengan program TKJ, Multimedia, dan Tata Busana — mencetak lulusan siap kerja berjiwa wirausaha Islami.',
  },
  {
    id: 'madin',
    name: 'Madrasah Diniyyah',
    label: 'Pendidikan Diniyyah',
    icon: 'Book1',
    iconBg: '#f3e5f5',
    description: 'Pendidikan keagamaan Islam klasik jenjang Ula–Wustha–Ulya dengan fokus pada penguasaan kitab kuning dan Bahasa Arab.',
  },
  {
    id: 'pesantren',
    name: 'Pesantren Alhamdulillah',
    label: 'Pondok Pesantren',
    icon: 'Home2',
    iconBg: '#fff3e0',
    description: 'Unit inti Ponpes — tarbiyah 24 jam dengan program tahfidz Al-Qur\'an, pengajian kitab, dan pembinaan karakter dalam lingkungan asrama.',
  },
]
</script>

<style lang="scss" scoped>
.bg-light-warm {
  background: #ebeff196;
}

// ── Header ──
.units-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  max-width: 560px;
  line-height: 1.6;
  margin-top: 0.25rem;
}

// ── Kartu Unit ──
.unit-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
}

// Icon wrapper: kotak kecil rounded
.unit-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// Label kecil uppercase
.unit-label {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #c9a84c;
  letter-spacing: 0.05em;
}

// Nama unit
.unit-name {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

// Deskripsi
.unit-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.55;
}

// Link
.unit-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1a5c38;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: #c9a84c;
  }
}
</style>
