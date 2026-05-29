<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-white shadow-sm py-2">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2 text-decoration-none me-2">
        <div class="brand-logo-circle d-flex align-items-center justify-content-center">
          <img 
            src="@/assets/logo.webp" 
            alt="Logo Ponpes Alhamdulillah Kemadu" 
            class="brand-logo-img"
            width="32"
            height="32"
            loading="lazy"
          />
        </div>
        <div class="d-flex flex-column lh-sm brand-text-wrapper">
          <span class="brand-title">Ponpes Alhamdulillah</span>
          <span class="brand-subtitle text-truncate">Kemadu — Pendidikan Islam Terpadu</span>
        </div>
      </router-link>

      <button 
        class="navbar-toggler border-0 shadow-none p-2" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarMain" 
        aria-controls="navbarMain" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav mx-auto mb-3 mb-lg-0 gap-1 pt-3 pt-lg-0">
          <li class="nav-item" v-for="item in navMenus" :key="item.path">
            <router-link 
              :to="item.path" 
              class="nav-link rounded-3 px-3" 
              :class="{ 'nav-link--active': isActive(item.path) }"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="pt-2 pt-lg-0 border-top border-light border-lg-0 d-grid d-lg-inline-block">
          <router-link to="/akademik#pesantren" class="btn-cta-nav text-center">
            Daftar Santri
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navMenus = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Akademik', path: '/akademik' },
  { label: 'Kabar', path: '/kabar' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style lang="scss" scoped>
// ── Brand ──
.brand-logo-circle {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  
  @media (min-width: 992px) {
    width: 46px;
    height: 46px;
  }
}

.brand-text-wrapper {
  max-width: 180px; // Mencegah teks menabrak hamburger di layar HP super kecil (seperti iPhone SE)
  
  @media (min-width: 360px) {
    max-width: 210px;
  }
  @media (min-width: 400px) {
    max-width: 100%;
  }
}

.brand-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #1b5e20;
  letter-spacing: 0.01em;

  @media (min-width: 992px) {
    font-size: 1.05rem;
  }
}

.brand-subtitle {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.65rem;
  color: #6c757d;
  font-weight: 400;

  @media (min-width: 992px) {
    font-size: 0.725rem;
  }
}

// ── Nav Links ──
.nav-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #374151 !important; // Lebih lembut dari murni #222
  padding: 0.6rem 1rem;
  text-decoration: none;
  display: block; // Memastikan klik penuh selebar menu di mobile
  transition: all 0.2s ease;

  &:hover {
    color: #1b5e20 !important;
    background: rgba(27, 94, 32, 0.04);
  }

  &.nav-link--active {
    background: #e6f8e6 !important;
    color: #1b5e20 !important;

    &:hover {
      background: #dffbdf !important;
    }
  }
}

// ── CTA Button ──
.btn-cta-nav {
  display: inline-block;
  background: #f39c12;
  color: #ffffff !important; // Diubah ke putih agar kontras tinggi & memenuhi standar aksesibilitas web
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(243, 156, 18, 0.2);
  transition: all 0.25s ease;

  &:hover {
    background: #e08e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(243, 156, 18, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

// ── Penyesuaian Khusus Desktop (Layar Lebar) ──
@media (min-width: 992px) {
  .navbar-nav {
    align-items: center;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    
    &:hover {
      background: transparent; // Menghilangkan background abu-abu saat hover di desktop
    }
  }

  .btn-cta-nav {
    margin-left: 1rem;
  }
}

// ── Penyesuaian Khusus Mobile & Tablet (Layar Kecil) ──
@media (max-width: 991.98px) {
  .navbar-collapse {
    // Memberikan transisi/padding yang rapi saat menu hamburger di-expand
    padding-bottom: 1rem;
  }
}
</style>