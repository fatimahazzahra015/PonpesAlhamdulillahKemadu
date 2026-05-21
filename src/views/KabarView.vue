<template>
  <main>
    <!-- ═══════════════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════════════ -->
    <section class="kabar-hero d-flex align-items-center" :style="{ backgroundImage: `url(https://picsum.photos/seed/masjid/1920/800)` }">
      <div class="container position-relative">
        <div class="col-lg-8">
          <BreadcrumbNav currentPage="Kabar" />
          <h1 class="kabar-hero-title mt-3 mb-3">Kabar</h1>
          <p class="kabar-hero-desc mb-0">
            Pusat informasi real-time: agenda dan berita dari seluruh unit pendidikan Ponpes Alhamdulillah Kemadu.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         CONTENT: TABS + FILTER + CARDS
         ═══════════════════════════════════════════════════ -->
    <section class="section-padding">
      <div class="container">

        <!-- Tab Navigation -->
        <div class="d-flex justify-content-center gap-5 mb-4">
          <button
            class="kabar-tab"
            :class="{ 'kabar-tab--active': activeTab === 'agenda' }"
            @click="activeTab = 'agenda'"
          >
            Agenda
          </button>
          <button
            class="kabar-tab"
            :class="{ 'kabar-tab--active': activeTab === 'berita' }"
            @click="activeTab = 'berita'"
          >
            Berita
          </button>
        </div>

        <!-- Filter Pills -->
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            v-for="cat in filterCategories"
            :key="cat"
            class="filter-pill"
            :class="{ 'filter-pill--active': currentFilter === cat }"
            @click="setFilter(cat)"
          >
            {{ cat }}
          </button>
        </div>

        <!-- ═══════════════════════════════════════════
             TAB: AGENDA
             ═══════════════════════════════════════════ -->
        <div v-if="activeTab === 'agenda'">
          <div class="row g-4" v-if="paginatedAgenda.length">
            <div class="col-md-6 col-lg-4" v-for="item in paginatedAgenda" :key="item.id">
              <div class="agenda-card rounded-3 p-4 h-100">
                <div class="d-flex gap-3 align-items-start">
                  <!-- Date Box -->
                  <div class="agenda-date-box flex-shrink-0 text-center rounded-3">
                    <div class="agenda-date-day">{{ getDay(item.date) }}</div>
                    <div class="agenda-date-month">{{ getMonth(item.date) }}</div>
                  </div>
                  <!-- Info -->
                  <div class="flex-grow-1">
                    <span class="agenda-badge" :class="'agenda-badge--' + item.unit.toLowerCase()">{{ item.unit.toUpperCase() }}</span>
                    <h5 class="agenda-title mb-2">{{ item.title }}</h5>
                    <div class="d-flex flex-wrap gap-3">
                      <span class="agenda-meta">
                        <VsxIcon iconName="Calendar" size="14" color="#6b7280" />
                        {{ formatFullDate(item.date) }}
                      </span>
                      <span class="agenda-meta">
                        <VsxIcon iconName="Location" size="14" color="#6b7280" />
                        {{ item.location }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-5 text-muted">Tidak ada agenda untuk filter yang dipilih.</div>

          <!-- Pagination Agenda -->
          <Pagination
            v-if="agendaTotalPages > 1"
            :currentPage="agendaPage"
            :totalPages="agendaTotalPages"
            @page="agendaPage = $event"
          />
        </div>

        <!-- ═══════════════════════════════════════════
             TAB: BERITA
             ═══════════════════════════════════════════ -->
        <div v-if="activeTab === 'berita'">
          <div v-if="filteredNews.length">
            <!-- Highlight Card (hanya halaman 1) -->
            <div class="news-highlight rounded-4 shadow-sm mb-4 overflow-hidden" v-if="highlightNews && newsPage === 1">
              <div class="row g-0 align-items-stretch">
                <div class="col-lg-6">
                  <img :src="highlightNews.image" :alt="highlightNews.title" class="news-highlight-img w-100 h-100" loading="lazy" />
                </div>
                <div class="col-lg-6">
                  <div class="news-highlight-body d-flex flex-column justify-content-center p-4 p-lg-5">
                    <div class="d-flex align-items-center gap-2 mb-3">
                      <span class="agenda-badge" :class="'agenda-badge--' + highlightNews.unit.toLowerCase()">{{ highlightNews.unit.toUpperCase() }}</span>
                      <span class="news-highlight-date">
                        <VsxIcon iconName="Calendar" size="14" color="#6b7280" />
                        {{ formatFullDate(highlightNews.date) }}
                      </span>
                    </div>
                    <h3 class="news-highlight-title mb-3">{{ highlightNews.title }}</h3>
                    <p class="news-highlight-excerpt mb-3">{{ highlightNews.excerpt }}</p>
                    <a href="#" class="news-readmore" @click.prevent>Baca Selengkapnya →</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Grid -->
            <div class="row g-4">
              <div class="col-md-6 col-lg-4" v-for="item in paginatedNews" :key="item.id">
                <div class="news-card rounded-3 shadow-sm overflow-hidden h-100">
                  <div class="news-card-img-wrapper">
                    <img :src="item.image" :alt="item.title" class="news-card-img w-100" loading="lazy" />
                  </div>
                  <div class="news-card-body p-4">
                    <span class="agenda-badge mb-2" :class="'agenda-badge--' + item.unit.toLowerCase()">{{ item.unit.toUpperCase() }}</span>
                    <span class="news-card-date mb-2">
                      <VsxIcon iconName="Calendar" size="13" color="#6b7280" />
                      {{ formatFullDate(item.date) }}
                    </span>
                    <h5 class="news-card-title mb-2">{{ item.title }}</h5>
                    <p class="news-card-excerpt mb-3">{{ item.excerpt }}</p>
                    <a href="#" class="news-readmore" @click.prevent>Baca Selengkapnya →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-5 text-muted">Tidak ada berita untuk filter yang dipilih.</div>

          <!-- Pagination Berita -->
          <Pagination
            v-if="newsTotalPages > 1"
            :currentPage="newsPage"
            :totalPages="newsTotalPages"
            @page="newsPage = $event"
          />
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BreadcrumbNav from '@/components/shared/BreadcrumbNav.vue'
import Pagination from '@/components/kabar/Pagination.vue'
import { VsxIcon } from 'vue-iconsax'
import { agendaList, monthNames } from '@/data/agenda.js'
import { newsList } from '@/data/news.js'

const route = useRoute()
const activeTab = ref('agenda')
const agendaFilter = ref('Semua')
const newsFilter = ref('Semua')
const agendaPage = ref(1)
const newsPage = ref(1)
const perPage = 6
const newsPerPage = 4
const firstPageSlots = 3 // halaman 1: 1 highlight + 3 regular = 4 card

const filterCategories = ['Semua', 'Ponpes', 'MI', 'SMK', 'Madin', 'Pesantren']

const currentFilter = computed(() =>
  activeTab.value === 'agenda' ? agendaFilter.value : newsFilter.value
)

function setFilter(cat) {
  if (activeTab.value === 'agenda') {
    agendaFilter.value = cat
    agendaPage.value = 1
  } else {
    newsFilter.value = cat
    newsPage.value = 1
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
  if (route.query.tab === 'berita' || route.hash) {
    activeTab.value = 'berita'
    
    // Opsional: Jika membawa hash, buat halaman otomatis scroll halus ke posisi berita tersebut
    if (route.hash) {
      setTimeout(() => {
        const element = document.querySelector(route.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300) // Beri jeda sedikit agar render DOM selesai
    }
  }
})

// ── Agenda ──
const filteredAgenda = computed(() => {
  if (agendaFilter.value === 'Semua') return agendaList
  return agendaList.filter(a => a.unit === agendaFilter.value)
})

const agendaTotalPages = computed(() => Math.ceil(filteredAgenda.value.length / perPage))

const paginatedAgenda = computed(() => {
  const start = (agendaPage.value - 1) * perPage
  return filteredAgenda.value.slice(start, start + perPage)
})

// ── Berita ──
const filteredNews = computed(() => {
  let list = newsList
  if (newsFilter.value !== 'Semua') {
    list = newsList.filter(n => n.unit === newsFilter.value)
  }
  return list
})

const highlightNews = computed(() => filteredNews.value.find(n => n.highlight) || filteredNews.value[0])

const regularNews = computed(() => filteredNews.value.filter(n => !n.highlight))

const newsTotalPages = computed(() => {
  const total = regularNews.value.length
  if (total <= firstPageSlots) return 1
  return 1 + Math.ceil((total - firstPageSlots) / newsPerPage)
})

const paginatedNews = computed(() => {
  if (newsPage.value === 1) {
    return regularNews.value.slice(0, firstPageSlots)
  }
  const start = firstPageSlots + (newsPage.value - 2) * newsPerPage
  return regularNews.value.slice(start, start + newsPerPage)
})

// ── Helpers ──
function getDay(dateStr) {
  return new Date(dateStr).getDate()
}
function getMonth(dateStr) {
  return monthNames[new Date(dateStr).getMonth()]
}
function formatFullDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<style lang="scss" scoped>
// ── Hero ──
.kabar-hero {
  position: relative;
  min-height: 65vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:rgba(27, 94, 32, 0.82);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.kabar-hero-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: #ffffff;
  line-height: 1.15;
}

.kabar-hero-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 540px;
}

// ── Tab Navigation ──
.kabar-tab {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #6b7280;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0.5rem 0.25rem;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #1a5c38;
  }

  &--active {
    color: #1a5c38;
    border-bottom-color: #f5a623;
  }
}

// ── Filter Pills ──
.filter-pill {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  color: #1a1a1a;
  background: #ffffff;
  border: 1px solid #d1d5db;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    border-color: #1a5c38;
    color: #1a5c38;
  }

  &--active {
    background: #1a5c38;
    color: #ffffff;
    border-color: #1a5c38;

    &:hover {
      background: #154a2d;
      color: #ffffff;
    }
  }
}

// ── Unit Badge Colors ──
.agenda-badge {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  display: inline-block;

  &--Ponpes { background: #eaf5ea; color: #1a5c38; }
  &--mi { background: #e8f0fe; color: #1a56db; }
  &--smk { background: #fff7ed; color: #ea580c; }
  &--madin { background: #f5f3ff; color: #7c3aed; }
  &--pesantren { background: #fefce8; color: #a16207; }
}

// ── Agenda Cards ──
.agenda-card {
  background: #ffffff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  
}

.agenda-date-box {
  width: 58px;
  min-height: 64px;
  background: #eaf5ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.agenda-date-day {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.35rem;
  color: #1a5c38;
  line-height: 1.1;
}

.agenda-date-month {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.6875rem;
  color: #1a5c38;
  letter-spacing: 0.04em;
}

.agenda-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
}

.agenda-meta {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

// ── News Highlight ──
.news-highlight {
  background: #ffffff;

  .row {
    min-height: 360px;
  }
}

.news-highlight-img {
  object-fit: cover;
  aspect-ratio: 4/3;
}

.news-highlight-body {
  min-height: 100%;
}

.news-highlight-date {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.news-highlight-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.45rem;
  color: #1a1a1a;
  line-height: 1.3;
}

.news-highlight-excerpt {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
}

// ── News Read More Link ──
.news-readmore {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #f5a623;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #d4891a;
  }
}

// ── News Regular Cards ──
.news-card {
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
  }
}

.news-card-img-wrapper {
  overflow: hidden;
  aspect-ratio: 16/10;

  .news-card-img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover .news-card-img {
    transform: scale(1.04);
  }
}

.news-card-date {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.75rem;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.news-card-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.35;
}

.news-card-excerpt {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  line-height: 1.5;
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .kabar-hero {
    min-height: 55vh;
  }

  .kabar-hero-title {
    font-size: 2rem;
  }

  .kabar-hero-desc {
    font-size: 0.9rem;
  }

  .news-highlight-title {
    font-size: 1.15rem;
  }

  .news-highlight {
    .row {
      min-height: auto;
    }
  }
}
</style>
