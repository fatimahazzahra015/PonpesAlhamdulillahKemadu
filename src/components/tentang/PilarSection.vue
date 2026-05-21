<template>
  <section class="pilar-section section-padding">
    <div class="container">
      <div class="text-center mb-5">
        <SectionLabel label="Nilai-nilai" centered />
        <SectionHeading heading="Empat Pilar Tarbiyah Kami" />
      </div>

      <div class="row g-4">
        <div class="col-lg-3 col-md-6" v-for="pilar in pilarList" :key="pilar.id">
          <div class="card pilar-card border-0 h-100 text-center">
            <div class="card-body p-4 d-flex flex-column align-items-center">
              <div class="pilar-icon-wrap mb-3">
                <VsxIcon :iconName="pilar.icon" size="30" color="#f5a623" />
              </div>
              <h4 class="pilar-title mb-2">{{ pilar.title }}</h4>
              <p class="pilar-desc mb-0">{{ pilar.description }}</p>
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

const pilarList = [
  { id: 1, title: 'Tafaqquh fi al-Din', icon: 'Book1', description: 'Mendalami ilmu agama Islam secara komprehensif dari sumber otentik Al-Qur\'an dan As-Sunnah.' },
  { id: 2, title: 'Akhlak Karimah', icon: 'Heart', description: 'Membentuk karakter mulia melalui pembiasaan, keteladanan, dan lingkungan Islami yang kondusif.' },
  { id: 3, title: 'Wasathiyyah', icon: 'ElementEqual', description: 'Menerapkan sikap moderat, seimbang, dan toleran dalam beragama dan bermasyarakat.' },
  { id: 4, title: 'Kemandirian', icon: 'Profile2User', description: 'Melatih kemandirian ekonomi dan sosial santri melalui program life skill dan kewirausahaan.' },
]
</script>

<style lang="scss" scoped>
.pilar-section {
  background: #ffffff;
}

.pilar-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  }
}

.pilar-icon-wrap {
  width: 62px;
  height: 62px;
  border-radius: 14px;
  background: rgba(201, 168, 76, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pilar-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #1a1a1a;
}

.pilar-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}
</style>
