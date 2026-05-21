export const agendaList = [
  {
    id: 1,
    date: '2026-05-24',
    unit: 'Ponpes',
    title: 'Haflah Akhirussanah & Wisuda Tahfidz 2026',
    location: 'Aula Utama Ponpes',
  },
  {
    id: 2,
    date: '2026-06-02',
    unit: 'Pesantren',
    title: 'Penerimaan Santri Baru Gelombang II',
    location: 'Kantor Pesantren',
  },
  {
    id: 3,
    date: '2026-06-15',
    unit: 'MI',
    title: 'Lomba Kaligrafi & MTQ Tingkat Kabupaten',
    location: 'MI Annuroniyyah',
  },
  {
    id: 4,
    date: '2026-06-20',
    unit: 'SMK',
    title: 'Workshop Wirausaha Muslim',
    location: 'Aula SMK',
  },
  {
    id: 5,
    date: '2026-07-01',
    unit: 'Madin',
    title: 'Pengajian Kitab Akbar Bulanan',
    location: 'Masjid Pesantren',
  },
  {
    id: 6,
    date: '2026-07-10',
    unit: 'Pesantren',
    title: "Khataman Al-Qur'an Santri Tahfidz",
    location: 'Masjid Pesantren',
  },
  {
    id: 7,
    date: '2026-08-05',
    unit: 'Ponpes',
    title: 'Peringatan Hari Kemerdekaan & Lomba Antar Unit',
    location: 'Lapangan Utama Ponpes',
  },
]

export const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
]

export function formatAgendaDate(dateStr) {
  const d = new Date(dateStr)
  return { day: d.getDate(), month: monthNames[d.getMonth()] }
}
