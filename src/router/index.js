import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Beranda — Yayasan Alhamdulillah Kemadu',
      description: 'Yayasan Alhamdulillah Kemadu — lembaga pendidikan Islam terpadu di Rembang sejak 1998. MI, SMK, Madrasah Diniyyah, dan Pesantren dalam satu ekosistem tarbiyah.'
    }
  },
  {
    path: '/tentang-kami',
    redirect: '/tentang',
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: () => import('@/views/TentangView.vue'),
    meta: {
      title: 'Tentang Kami — Yayasan Alhamdulillah Kemadu',
      description: 'Sejarah, visi, misi, dan struktur pengurus Yayasan Alhamdulillah Kemadu.'
    }
  },
  {
    path: '/akademik',
    name: 'akademik',
    component: () => import('@/views/AkademikView.vue'),
    meta: {
      title: 'Akademik — Unit Pendidikan Yayasan Alhamdulillah Kemadu',
      description: 'Profil lengkap MI, SMK, Madrasah Diniyyah, dan Pesantren Alhamdulillah Kemadu.'
    }
  },
  {
    path: '/kabar',
    name: 'kabar',
    component: () => import('@/views/KabarView.vue'),
    meta: {
      title: 'Kabar — Agenda & Berita Yayasan Alhamdulillah Kemadu',
      description: 'Pusat informasi real-time: agenda dan berita dari lingkungan Yayasan Alhamdulillah Kemadu.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Yayasan Alhamdulillah Kemadu'
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', to.meta.description || '')
})

export default router
