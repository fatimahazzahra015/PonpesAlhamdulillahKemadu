<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-white shadow-sm py-2">
    <div class="container">
      <!-- Kiri: Logo & Brand -->
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
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
        <div class="d-flex flex-column lh-sm">
          <span class="brand-title">Ponpes Alhamdulillah</span>
          <span class="brand-subtitle">Kemadu — Pendidikan Islam Terpadu</span>
        </div>
      </router-link>

      <!-- Hamburger Mobile -->
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Tengah: Navigasi + Kanan: CTA -->
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
          <li class="nav-item" v-for="item in navMenus" :key="item.path">
            <router-link :to="item.path" class="nav-link rounded-3 px-3" :class="{ 'nav-link--active': isActive(item.path) }">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <router-link to="/akademik#pesantren" class="btn-cta-nav ms-lg-3">
          Daftar Santri
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { VsxIcon } from 'vue-iconsax'

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
  width: 46px;
  height: 46px;
  flex-shrink: 0;
}

.brand-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #1b5e20;
  letter-spacing: 0.01em;
}

.brand-subtitle {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.6875rem;
  color: #6c757d;
  font-weight: 400;
}

// ── Nav Links ──
.nav-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.925rem;
  color: #222222 !important;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #1b5e20 !important;
  }

  // Gunakan &. untuk spesifisitas tinggi agar menimpa default bootstrap
  &.nav-link--active {
    background: #e6f8e6 !important;
    color: #1b5e20 !important;

    &:hover {
      color: #1b5e20 !important;
      background: #dffbdf !important;
    }
  }
}

// ── CTA Button ──
.btn-cta-nav {
  display: inline-block;
  background: #f39c12;
  color: #1a1a1a;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.55rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #e08e0b;
    color: #1a1a1a;
    transform: translateY(-1px);
  }
}

// ── Responsive ──
@media (max-width: 991.98px) {
  .nav-link {
    padding: 0.625rem 1rem;

    &:hover {
      background: rgba(27, 94, 32, 0.04);
    }

    &--active {
      display: inline-block;
    }
  }

  .btn-cta-nav {
    margin-top: 0.5rem;
    text-align: center;
    display: block;
  }
}
</style>
