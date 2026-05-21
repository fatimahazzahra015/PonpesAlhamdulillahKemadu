<template>
  <section id="pesantren" class="pesantren-section">
    <div class="container">

      <!-- ═══════════════════════════════════════════════════
           SUB 1: PROFILE & STATISTIK
           ═══════════════════════════════════════════════════ -->
      <div class="row align-items-center g-5 mb-5">
        <!-- Kiri: Gambar -->
        <div class="col-lg-6">
          <img
            src="https://picsum.photos/id/1060/600/450"
            alt="Santri Pesantren Alhamdulillah berdoa berjamaah di masjid"
            class="pesantren-image img-fluid w-100 rounded-4 shadow"
            loading="lazy"
          />
        </div>

        <!-- Kanan: Informasi -->
        <div class="col-lg-6">
          <span class="pesantren-badge d-inline-block mb-3">Pondok Pesantren</span>
          <h2 class="pesantren-heading mb-3">Pesantren Alhamdulillah Kemadu</h2>
          <p class="pesantren-desc mb-4">
            Pesantren adalah jantung Ponpes. Di sinilah santri mukim menjalani tarbiyah 24 jam — memadukan tahfidz, ilmu syar'i, pendidikan formal, dan keterampilan hidup dalam lingkungan Islami yang utuh.
          </p>

          <!-- Stat Cards -->
          <div class="row g-3">
            <div class="col-4" v-for="stat in statList" :key="stat.label">
              <div class="stat-card text-center p-3 rounded-3 shadow-sm">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           SUB 2: FASILITAS PONDOK
           ═══════════════════════════════════════════════════ -->
      <div class="mb-5">
        <h3 class="section-subheading mb-4">Fasilitas Pondok</h3>
        <div class="row g-3">
          <div class="col-md-6 col-lg-4" v-for="fac in facilityList" :key="fac.title">
            <div class="facility-card d-flex align-items-start gap-3 p-3 rounded-3 shadow-sm">
              <div class="facility-icon-box flex-shrink-0">
                <VsxIcon :iconName="fac.icon" size="20" color="#1a5c38" />
              </div>
              <div>
                <div class="facility-title">{{ fac.title }}</div>
                <div class="facility-desc">{{ fac.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           SUB 3: JADWAL HARIAN & TESTIMONI
           ═══════════════════════════════════════════════════ -->
      <div class="row g-4 mb-5">
        <!-- Kolom Kiri: Jadwal Harian -->
        <div class="col-lg-6">
          <h3 class="section-subheading mb-4">Jadwal Harian Santri</h3>
          <div class="schedule-card p-4 rounded-4 shadow-sm">
            <div
              class="schedule-row d-flex align-items-center gap-3"
              :class="{ 'schedule-row--last': idx === scheduleList.length - 1 }"
              v-for="(item, idx) in scheduleList"
              :key="idx"
            >
              <VsxIcon iconName="Clock" size="18" color="#1a5c38" class="flex-shrink-0" />
              <div>
                <span class="schedule-time">{{ item.time }}</span>
                <span class="schedule-sep"> — </span>
                <span class="schedule-activity">{{ item.activity }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Testimoni -->
        <div class="col-lg-6">
          <h3 class="section-subheading mb-4">Testimoni Alumni &amp; Wali</h3>
          <div class="testi-card rounded-3 p-4 mb-3" v-for="(t, idx) in testimoniList" :key="idx">
            <p class="testi-text mb-3">"{{ t.text }}"</p>
            <div class="testi-author fw-bold">{{ t.name }}</div>
            <div class="testi-role">{{ t.role }}</div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           SUB 4: BANNER CTA PENDAFTARAN
           ═══════════════════════════════════════════════════ -->
      <div class="cta-banner rounded-4 text-center py-5 px-4">
        <VsxIcon iconName="Award" size="40" color="#f39c12" class="mb-3" />
        <h3 class="cta-heading mb-3">Daftarkan Diri sebagai Santri Pesantren Alhamdulillah</h3>
        <p class="cta-sub mb-4">Pendaftaran tahun ajaran 2026/2027 sudah dibuka untuk santri putra &amp; putri.</p>
        <button class="cta-btn d-inline-flex align-items-center gap-2 rounded-pill px-4 py-3">
          <VsxIcon iconName="Profile2User" size="18" color="#1a1a1a" />
          <span>Form Pendaftaran Santri</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'

const statList = [
  { value: '800+', label: 'SANTRI MUKIM' },
  { value: '45', label: 'PENGASUH' },
  { value: '12', label: 'ASRAMA' },
]

const facilityList = [
  { icon: 'Home2', title: 'Asrama Putra & Putri', desc: 'Kamar nyaman terpisah dengan pengawasan 24 jam.' },
  { icon: 'Buildings', title: 'Masjid Pesantren', desc: 'Kapasitas 1.500 jamaah untuk ibadah & kajian.' },
  { icon: 'Book1', title: 'Perpustakaan', desc: '10.000+ koleksi kitab dan buku umum.' },
  { icon: 'Coffee', title: 'Dapur Umum', desc: 'Tiga kali makan sehat dengan menu bergizi.' },
  { icon: 'Wifi', title: 'Lab Komputer & WiFi Terbatas', desc: 'Untuk kebutuhan belajar santri.' },
  { icon: 'Game', title: 'Lapangan Olahraga', desc: 'Sepak bola, voli, dan bulu tangkis.' },
]

const scheduleList = [
  { time: '03.30 – 04.30', activity: 'Bangun, Qiyamul Lail, Persiapan Shubuh' },
  { time: '04.30 – 05.00', activity: 'Shalat Shubuh Berjamaah' },
  { time: '05.00 – 06.15', activity: 'Pengajian Kitab (Madin)' },
  { time: '06.15 – 07.00', activity: 'Sarapan & Persiapan Sekolah' },
  { time: '07.00 – 14.00', activity: 'Sekolah Formal (MI / SMK)' },
  { time: '14.00 – 17.00', activity: 'Istirahat, Mandi, Shalat Ashar' },
  { time: '17.00 – 19.30', activity: 'Tahfidz & Shalat Maghrib' },
  { time: '19.30 – 21.00', activity: 'Pengajian Malam (Madin)' },
  { time: '21.00 – 22.30', activity: 'Belajar Mandiri, Istirahat' },
]

const testimoniList = [
  {
    text: 'Pesantren Alhamdulillah membentuk anak saya menjadi pribadi yang santun, mandiri, dan rajin ibadah. Komunikasi dengan pengasuh sangat baik.',
    name: 'Ibu Hartini',
    role: 'Wali Santri Putri, Semarang',
  },
  {
    text: 'Tujuh tahun mondok di sini memberikan saya bekal ilmu agama dan disiplin yang sangat bermanfaat saat melanjutkan kuliah di Al-Azhar.',
    name: 'Ust. Hilmi Faruq',
    role: 'Alumni 2019',
  },
  {
    text: 'Yang paling berkesan adalah lingkungan tarbiyahnya yang utuh — antara akademik, akhlak, dan kemandirian benar-benar terbentuk.',
    name: 'Bapak Aris Wibowo',
    role: 'Wali Santri Putra',
  },
]
</script>

<style lang="scss" scoped>
// ── Section ──
.pesantren-section {
  background: #e6f8e6 ;
  padding: 5rem 0;
}

// ── Image ──
.pesantren-image {
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
}

// ── Badge ──
.pesantren-badge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #1a1a1a;
  background: #f5a623;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
}

// ── Heading ──
.pesantren-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #1a1a1a;
}

.pesantren-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
}

// ── Stat Cards ──
.stat-card {
  background: #ffffff;
}

.stat-value {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: #1a5c38;
  line-height: 1.2;
}

.stat-label {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  font-size: 0.6875rem;
  color: #6b7280;
  letter-spacing: 0.04em;
}

// ── Section Subheading ──
.section-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: #1a1a1a;
}

// ── Facility Cards ──
.facility-card {
  background: #ffffff;
}

.facility-icon-box {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #eaf5ea;
  display: flex;
  align-items: center;
  justify-content: center;
}

.facility-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  color: #1a1a1a;
  margin-bottom: 0.15rem;
}

.facility-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #6b7280;
}

// ── Schedule ──
.schedule-card {
  background: #ffffff;
}

.schedule-row {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;

  &--last {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
}

.schedule-time {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.8125rem;
  color: #1a5c38;
  white-space: nowrap;
}

.schedule-sep {
  color: #d1d5db;
  font-size: 0.8125rem;
}

.schedule-activity {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
}

// ── Testimoni ──
.testi-card {
  background: #ffffff;
  position: relative;

  &::after {
    content: '"';
    position: absolute;
    top: 8px;
    right: 16px;
    font-family: 'Georgia', serif;
    font-size: 2.5rem;
    color: #e5e7eb;
    line-height: 1;
  }
}

.testi-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  line-height: 1.6;
}

.testi-author {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  color: #1a1a1a;
}

.testi-role {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.75rem;
  color: #f5a623;
}

// ── CTA Banner ──
.cta-banner {
  background: #095717;
}

.cta-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.75rem;
  color: #ffffff;
}

.cta-sub {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
}

.cta-btn {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #1a1a1a;
  background: #f39c12;
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #e08e0b;
    transform: translateY(-2px);
  }
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .pesantren-section {
    padding: 3rem 0;
  }

  .pesantren-heading {
    font-size: 1.6rem;
  }

  .cta-heading {
    font-size: 1.35rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }
}
</style>
