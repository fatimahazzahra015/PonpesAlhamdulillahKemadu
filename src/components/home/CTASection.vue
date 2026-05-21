<template>
  <section class="cta-section py-5">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
        <!-- Kiri: Teks -->
        <div class="cta-text">
          <h2 class="cta-heading mb-2">
            Bergabunglah dalam Tarbiyah Bersama Pesantren Alhamdulillah
          </h2>
          <p class="cta-desc mb-0">
            Pendaftaran santri baru tahun ajaran 2026/2027 sudah dibuka. Daftarkan putra-putri Anda dan jadilah bagian dari keluarga besar kami.
          </p>
        </div>

        <!-- Kanan: Tombol -->
        <div class="d-flex gap-3 align-items-center flex-shrink-0">
          <router-link to="/akademik#pesantren" class="btn-cta-gold d-inline-flex align-items-center gap-2">
            Daftar Sekarang
            <VsxIcon iconName="ArrowRight2" size="18" color="#1a1a1a" />
          </router-link>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="btn-cta-outline-white d-inline-flex align-items-center">
            Tanya Ponpes
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VsxIcon } from 'vue-iconsax'
</script>

<style lang="scss" scoped>
// ── Section ──
.cta-section {
  background: #095717;
}

// ── Teks Kiri ──
.cta-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 1.65rem;
  color: #ffffff;
  line-height: 1.3;
  max-width: 520px;
}

.cta-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 500px;
}

// ── Tombol Emas "Daftar Sekarang" ──
.btn-cta-gold {
  background: #f39c12;
  color: #1a1a1a;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #e08e0b;
    color: #1a1a1a;
    transform: translateY(-1px);
  }
}

// ── Tombol Outline "Tanya Ponpes" ──
.btn-cta-outline-white {
  background: transparent;
  color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  white-space: nowrap;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.2s ease;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    transform: translateY(-1px);
  }
}

// ── Responsive ──
@media (max-width: 767.98px) {
  .cta-section {
    text-align: center;
  }

  .cta-heading {
    font-size: 1.35rem;
    max-width: 100%;
  }

  .cta-desc {
    max-width: 100%;
  }

  .btn-cta-gold,
  .btn-cta-outline-white {
    width: 100%;
    justify-content: center;
    padding: 0.65rem 1.25rem;
    font-size: 0.875rem;
  }
}
</style>
