<template>
  <footer class="footer-section pt-5 pb-4">
    <div class="container">
      <div class="row g-4 text-start">
        <div class="col-md-4 col-sm-12">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="footer-brand-icon">
              <img 
                src="@/assets/logo.webp" 
                alt="Logo Ponpes Alhamdulillah Kemadu" 
                class="footer-brand-img"
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <div>
              <h5 class="footer-brand-title mb-0 lh-sm">Ponpes Alhamdulillah</h5>
              <span class="footer-brand-sub">Kemadu</span>
            </div>
          </div>

          <p class="footer-desc mb-3" style="max-width: 320px;">
            Mendidik generasi Qur'ani yang berakhlak mulia, cerdas, dan bermanfaat bagi masyarakat melalui pendidikan Islam terpadu.
          </p>

          <div class="d-flex gap-2 mb-2 mb-md-0">
            <a href="#" class="social-circle" aria-label="Facebook">
              <VsxIcon iconName="Facebook" size="16" color="#ffffff" />
            </a>
            <a href="#" class="social-circle" aria-label="Instagram">
              <VsxIcon iconName="Instagram" size="16" color="#ffffff" />
            </a>
            <a href="#" class="social-circle" aria-label="Youtube">
              <VsxIcon iconName="Youtube" size="16" color="#ffffff" />
            </a>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <h6 class="footer-heading mb-3">Kontak</h6>
          <div class="footer-contact-wrapper">
            <div class="d-flex align-items-start gap-2 mb-3">
              <VsxIcon iconName="Location" size="18" color="#f39c12" class="flex-shrink-0 mt-1" />
              <span class="footer-text">Desa Kemadu, Kec. Sulang, Kab. Rembang, Jawa Tengah 59254</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-3">
              <VsxIcon iconName="Call" size="18" color="#f39c12" class="flex-shrink-0" />
              <a href="tel:+6281234567890" class="footer-link">0812-3456-7890</a>
            </div>
            <div class="d-flex align-items-center gap-2 mb-3">
              <VsxIcon iconName="Sms" size="18" color="#f39c12" class="flex-shrink-0" />
              <a href="mailto:info@alhamdulillahkemadu.sch.id" class="footer-link text-break">info@alhamdulillahkemadu.sch.id</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <h6 class="footer-heading mb-3">Unit Pendidikan</h6>
          <ul class="list-unstyled mb-0 footer-menu">
            <li class="mb-2">
              <router-link to="/akademik#mi" class="footer-link">MI Annuroniyyah</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/akademik#smk" class="footer-link">SMK Annuroniyyah</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/akademik#madin" class="footer-link">Madrasah Diniyyah</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/akademik#pesantren" class="footer-link">Pesantren Alhamdulillah</router-link>
            </li>
          </ul>
        </div>
      </div>

      <hr class="footer-divider" />
      <div class="text-center footer-copy">
        &copy; {{ currentYear }} Ponpes Alhamdulillah Kemadu. Seluruh hak cipta dilindungi.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { VsxIcon } from 'vue-iconsax'

const currentYear = ref(new Date().getFullYear())
</script>

<style lang="scss" scoped>
// ── Footer Section ──
.footer-section {
  background: #010628;
}

// ── Kolom 1: Brand ──
.footer-brand-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer-brand-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #ffffff;
}

.footer-brand-sub {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.725rem;
  color: rgba(255, 255, 255, 0.55);
}

.footer-desc {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

// ── Social Circles ──
.social-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #f39c12;
    transform: translateY(-2px);
  }
}

// ── Kolom 2 & 3: Headings ──
.footer-heading {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
}

// ── Teks & Links ──
.footer-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.footer-link {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #f39c12;
  }
}

// ── Pembungkus Kontak Khusus Layar Desktop ──
.footer-contact-wrapper {
  max-width: 290px;
}

// ── Divider ──
.footer-divider {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin: 2rem 0 1.25rem;
}

// ── Copyright ──
.footer-copy {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}

// ── Aturan Media Query ──
@media (max-width: 767.98px) {
  .footer-contact-wrapper {
    max-width: 100%;
  }
  .footer-section {
    padding: 0 10px;
  }
}
</style>