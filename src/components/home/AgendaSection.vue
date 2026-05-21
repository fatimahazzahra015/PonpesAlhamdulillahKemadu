<template>
  <section class="agenda-section section-padding">
    <div class="container">
      <!-- Header: Kiri label + heading, Kanan link -->
      <div class="d-flex flex-wrap justify-content-between align-items-end mb-5">
        <div>
          <SectionLabel label="Agenda Terkini" />
          <SectionHeading heading="Catat Tanggal Penting Kami" />
          <p class="agenda-subheading mt-2">
            Ikuti seluruh rangkaian kegiatan dan acara penting di lingkungan Ponpes.
          </p>
        </div>
        <router-link to="/kabar" class="agenda-view-all fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 mt-2">
          Lihat Semua Agenda
          <VsxIcon iconName="ArrowRight2" size="16" color="#1a5c38" />
        </router-link>
      </div>

      <!-- Grid 3 Kartu Agenda -->
      <div class="row g-4">
        <div class="col-md-4" v-for="item in displayAgenda" :key="item.id">
          <div class="agenda-card d-flex gap-3 p-4 h-100">
            <!-- Date Box -->
            <div class="agenda-date-box flex-shrink-0 text-center">
              <span class="agenda-day">{{ item.day }}</span>
              <span class="agenda-month">{{ item.month }}</span>
            </div>

            <!-- Konten -->
            <div class="d-flex flex-column">
              <span class="agenda-badge-pill align-self-start mb-2">{{ item.unit }}</span>
              <h5 class="agenda-title mb-2">{{ item.title }}</h5>
              <div class="mt-auto">
                <div class="agenda-meta d-flex align-items-center gap-1 mb-1">
                  <VsxIcon iconName="Calendar" size="14" color="#5a7a5a" />
                  <span>{{ item.fullDate }}</span>
                </div>
                <div class="agenda-meta d-flex align-items-center gap-1">
                  <VsxIcon iconName="Location" size="14" color="#5a7a5a" />
                  <span>{{ item.location }}</span>
                </div>
              </div>
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
import { agendaList } from '@/data/agenda.js'
import { computed } from 'vue'

const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES']
const dayNames = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

const displayAgenda = computed(() => {
  return agendaList.slice(0, 3).map(a => {
    const d = new Date(a.date)
    return {
      ...a,
      day: d.getDate(),
      month: monthNames[d.getMonth()],
      fullDate: `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`,
    }
  })
})
</script>

<style lang="scss" scoped>
// ── Section ──
.agenda-section {
  background: #e6f8e6;
}

.agenda-subheading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.925rem;
  color: #6b7280;
  max-width: 460px;
  line-height: 1.5;
}

.agenda-view-all {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1a5c38;
  font-size: 0.925rem;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #c9a84c;
  }
}

// ── Kartu Agenda ──
.agenda-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }
}

// ── Date Box ──
.agenda-date-box {
  width: 58px;
  height: 64px;
  background: #e6f8e6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.agenda-day {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: #1a5c38;
}

.agenda-month {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.65rem;
  color: #1a5c38;
  letter-spacing: 0.05em;
  margin-top: 2px;
}

// ── Badge Unit Pill (solid dark green) ──
.agenda-badge-pill {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #ffffff;
  background: #1a5c38;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  line-height: 1.4;
}

// ── Title ──
.agenda-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a1a1a;
  line-height: 1.35;
}

// ── Meta Info ──
.agenda-meta {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.775rem;
  color: #5a7a5a;
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .agenda-card {
    flex-direction: column;
  }

  .agenda-date-box {
    width: 100%;
    height: auto;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.5rem 1rem;

    .agenda-day {
      font-size: 1.2rem;
    }

    .agenda-month {
      font-size: 0.7rem;
      margin-top: 0;
    }
  }
}
</style>
