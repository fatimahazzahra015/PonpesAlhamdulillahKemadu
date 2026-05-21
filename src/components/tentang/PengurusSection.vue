<template>
  <section class="pengurus-section section-padding">
    <div class="container">
      <div class="text-center mb-5">
        <SectionLabel label="Struktur Pengurus" centered />
        <SectionHeading heading="Dewan Pengasuh &amp; Pengurus Harian" />
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-md-4 col-sm-6" v-for="person in pengurusList" :key="person.id">
          <div class="card pengurus-card border-0 h-100">
            <div class="card-body d-flex flex-column align-items-center text-center p-4">
              <div class="pengurus-avatar mb-3">
                <span class="pengurus-initials">{{ person.initials }}</span>
              </div>
              <h5 class="pengurus-name mb-1">{{ person.name }}</h5>
              <span class="pengurus-title">{{ person.title }}</span>
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
import { pengurusList } from '@/data/pengurus.js'
</script>

<style lang="scss" scoped>
.pengurus-section {
  background: #ebeff196;
}

.pengurus-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

.pengurus-avatar {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #1a5c38;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pengurus-initials {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #ffffff;
  line-height: 1;
}

.pengurus-name {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a1a1a;
  line-height: 1.3;
}

.pengurus-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  color: #f5a623;
}
</style>
