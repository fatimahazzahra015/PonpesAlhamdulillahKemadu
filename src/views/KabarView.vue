<template>
  <main>
    <!-- HERO -->
    <section class="kabar-hero d-flex align-items-center" :style="{ backgroundImage: `url(https://picsum.photos/seed/masjid/1920/800)` }">
      <div class="container relative-box">
        <div class="row">
          <div class="col-12 col-lg-8 text-start">
            <BreadcrumbNav currentPage="Kabar" />
            <h1 class="kabar-hero-title mt-3 mb-3">Kabar</h1>
            <p class="kabar-hero-desc mb-0">
              Pusat informasi real-time: agenda dan berita dari seluruh unit pendidikan Ponpes Alhamdulillah Kemadu.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="section-padding py-5">
      <div class="container">

        <!-- Tab Navigation -->
        <div class="d-flex justify-content-center gap-4 gap-md-5 mb-4 border-bottom pb-2">
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

        <!-- Filter Pills (Scrollable di Mobile) -->
        <div class="filter-scroll-container mb-4 mb-md-5">
          <div class="filter-scroll-wrapper">
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
        </div>

        <!-- TAB: AGENDA -->
        <div v-if="activeTab === 'agenda'">
          <div class="row g-3 g-md-4" v-if="paginatedAgenda.length">
            <div class="col-12 col-md-6 col-lg-4" v-for="item in paginatedAgenda" :key="item.id">
              <AgendaCard 
                :item="item"
                :getDay="getDay"
                :getMonth="getMonth"
                :formatFullDate="formatFullDate"
              />
            </div>
          </div>
          <div v-else class="text-center py-5 text-muted">Tidak ada agenda untuk filter yang dipilih.</div>

          <Pagination
            v-if="agendaTotalPages > 1"
            :currentPage="agendaPage"
            :totalPages="agendaTotalPages"
            @page="handleAgendaPageChange"
          />
        </div>

        <!-- TAB: BERITA -->
        <div v-if="activeTab === 'berita'">
          <div v-if="filteredNews.length">
            <!-- Highlight Card (Hanya Halaman 1) -->
            <div class="news-highlight rounded-4 shadow-sm mb-4 overflow-hidden" v-if="highlightNews && newsPage === 1">
              <div class="row g-0 align-items-stretch">
                <div class="col-12 col-lg-6 position-relative">
                  <img :src="highlightNews.image" :alt="highlightNews.title" class="news-highlight-img w-100 h-100" loading="lazy" />
                </div>
                <div class="col-12 col-lg-6 bg-white d-flex align-items-center">
                  <div class="news-highlight-body p-4 p-md-5 w-100">
                    <div class="d-flex align-items-center gap-2 mb-3">
                      <span class="agenda-badge" :class="'agenda-badge--' + highlightNews.unit.toLowerCase()">
                        {{ highlightNews.unit.toUpperCase() }}
                      </span>
                      <span class="news-highlight-date">
                        <VsxIcon iconName="Calendar" size="14" color="#6b7280" />
                        {{ formatFullDate(highlightNews.date) }}
                      </span>
                    </div>
                    <h3 class="news-highlight-title mb-3">{{ highlightNews.title }}</h3>
                    <p class="news-highlight-excerpt mb-4">{{ highlightNews.excerpt }}</p>
                    <a href="#" class="news-readmore" @click.prevent>Baca Selengkapnya →</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Grid -->
            <div class="row g-3 g-md-4">
              <div class="col-12 col-md-6 col-lg-4" v-for="item in paginatedNews" :key="item.id">
                <NewsCard :item="item" :formatFullDate="formatFullDate" />
              </div>
            </div>
          </div>
          <div v-else class="text-center py-5 text-muted">Tidak ada berita untuk filter yang dipilih.</div>

          <Pagination
            v-if="newsTotalPages > 1"
            :currentPage="newsPage"
            :totalPages="newsTotalPages"
            @page="handleNewsPageChange"
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
import AgendaCard from '@/components/kabar/AgendaCard.vue'
import NewsCard from '@/components/kabar/NewsCard.vue'
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
const firstPageSlots = 3

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

function handleAgendaPageChange(page) {
  agendaPage.value = page
  scrollToSection()
}

function handleNewsPageChange(page) {
  newsPage.value = page
  scrollToSection()
}

function scrollToSection() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
}

onMounted(() => {
  window.scrollTo(0, 0)
  if (route.query.tab === 'berita' || route.hash) {
    activeTab.value = 'berita'
    if (route.hash) {
      setTimeout(() => {
        const element = document.querySelector(route.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }
})

// ── Agenda Logic ──
const filteredAgenda = computed(() => {
  if (agendaFilter.value === 'Semua') return agendaList
  return agendaList.filter(a => a.unit === agendaFilter.value)
})
const agendaTotalPages = computed(() => Math.ceil(filteredAgenda.value.length / perPage))
const paginatedAgenda = computed(() => {
  const start = (agendaPage.value - 1) * perPage
  return filteredAgenda.value.slice(start, start + perPage)
})

// ── News Logic ──
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
function getDay(dateStr) { return new Date(dateStr).getDate() }
function getMonth(dateStr) { return monthNames[new Date(dateStr).getMonth()] }
function formatFullDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<style lang="scss" scoped>
// ── Hero ──
.kabar-hero {
  position: relative;
  min-height: 50vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(27, 94, 32, 0.85);
    z-index: 1;
  }

  .relative-box {
    position: relative;
    z-index: 2;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.kabar-hero-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #ffffff;
}

.kabar-hero-desc {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  max-width: 580px;
}

// ── Tab Navigation ──
.kabar-tab {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #6b7280;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { color: #1a5c38; }
  &--active {
    color: #1a5c38;
    border-bottom-color: #f5a623;
  }
}

// ── Scrollable Filter Pills ──
.filter-scroll-container {
  width: 100%;
  overflow: hidden;
}

.filter-scroll-wrapper {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
  padding: 4px 2px;
  justify-content: md-start;
  
  @media (min-width: 768px) {
    justify-content: center;
  }

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.filter-pill {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: #4b5563;
  background: #ffffff;
  border: 1px solid #d1d5db;
  padding: 0.45rem 1.2rem;
  border-radius: 999px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a5c38;
    color: #ffffff;
  }

  &--active {
    background: #1a5c38;
    color: #ffffff;
    border-color: #1a5c38;
  }
}

// ── News Highlight ──
.news-highlight {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.news-highlight-img {
  object-fit: cover;
  min-height: 250px;
  max-height: 400px;
  
  @media (min-width: 992px) {
    height: 100% !important;
    max-height: none;
  }
}

.news-highlight-date {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.8125rem;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.news-highlight-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.35rem;
  color: #1a1a1a;
  line-height: 1.3;
}

.news-highlight-excerpt {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}

.news-readmore {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #f5a623;
  text-decoration: none;
}

.agenda-badge {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;

  &--ponpes { background: #eaf5ea; color: #1a5c38; }
  &--mi { background: #e8f0fe; color: #1a56db; }
  &--smk { background: #fff7ed; color: #ea580c; }
  &--madin { background: #f5f3ff; color: #7c3aed; }
  &--pesantren { background: #fefce8; color: #a16207; }
}

// ── Responsive Breakpoints ──
@media (max-width: 991.98px) {
  .kabar-hero { min-height: 40vh; }
  .kabar-hero-title { font-size: 2.2rem; }
  .news-highlight-title { font-size: 1.25rem; }
}

@media (max-width: 575.98px) {
  .kabar-hero-title { font-size: 1.85rem; }
  .kabar-hero-desc { font-size: 0.9rem; }
  .news-highlight-body { padding: 1.5rem !important; }
}
</style>