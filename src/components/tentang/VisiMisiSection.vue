<template>
  <section class="visimisi-section section-padding py-5">
    <div class="container">
      <div class="text-center mb-5">
        <SectionLabel label="Arah Ponpes" centered />
        <SectionHeading heading="Empat Pilar Tarbiyah Kami" />
      </div>

      <div class="row g-5 justify-content-center">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="card visi-card border-0 rounded-4 shadow-sm h-100 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="card-icon mb-4">
                <VsxIcon iconName="Eye" size="32" type="linear" class="text-success-custom" />
              </div>
              <h3 class="card-heading visi-title mb-3">Visi</h3>
              <p class="card-desc mb-0">
                Menjadi lembaga pendidikan Islam terpadu yang melahirkan generasi Qur'ani, berakhlak mulia, cerdas, dan bermanfaat bagi umat.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <div class="card misi-card border-0 rounded-4 shadow-sm h-100 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="card-icon mb-4">
                <VsxIcon iconName="Radar" size="32" type="linear" class="text-warning-custom" />
              </div>
              <h3 class="card-heading misi-title mb-3">Misi</h3>
              <p class="card-desc mb-0">
                Menyelenggarakan tarbiyah Islamiyah komprehensif melalui jenjang formal dan diniyyah; membangun karakter santri yang shalih, mandiri, dan berdaya saing global; melayani masyarakat melalui pendidikan dan dakwah.
              </p>
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
</script>

<style lang="scss" scoped>
.visimisi-section {
  background-color: #ebf9eb;
}

// ── Header ──
.subtitle-line {
  display: inline-block;
  width: 24px;
  height: 2px;
  background: #f39c12;
  border-radius: 1px;
  flex-shrink: 0;
}

.title-decor {
  display: inline-block;
  width: 50px;
  height: 3px;
  background: #f39c12;
  border-radius: 2px;
  margin-top: 0.75rem;
}

.subtitle-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #1b5e20;
  letter-spacing: 0.08em;
}

.section-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2.25rem;
  color: #111d12;
}

// ── Cards Styling ──
.visi-card,
.misi-card {
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06) !important;
  }
}

// ── Iconsax Color Helpers ──
.text-success-custom {
  color: #1b5e20;
}

.text-warning-custom {
  color: #f39c12;
}

// ── Typography inside Cards ──
.card-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  
  &.visi-title {
    color: #1b5e20; // Warna judul visi hijau
  }
  
  &.misi-title {
    color: #f39c12; // Warna judul misi oranye
  }
}

.card-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.925rem;
  color: #4b5563;
  line-height: 1.75;
  text-align: justify; // Membuat sebaran teks rapi seperti di gambar
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .section-title {
    font-size: 1.85rem;
  }

  .visi-card .card-body,
  .misi-card .card-body {
    padding: 2rem 1.5rem !important;
  }
}
</style>