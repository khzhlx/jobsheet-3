const btnToggle = document.getElementById('themeToggleBtn');
const body = document.body;

// Cek apakah preferensi sistem perangkat pengguna menggunakan Dark Mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Inisialisasi awal berdasarkan preferensi sistem
if (prefersDark) {
  body.classList.add('dark-theme');
  btnToggle.textContent = "Switch to Light Mode";
}

// Event listener saat tombol diklik
btnToggle.addEventListener('click', () => {
  // Membalik (toggle) class dark-theme pada body
  body.classList.toggle('dark-theme');

  // Ubah teks tombol sesuai dengan state saat ini
  if (body.classList.contains('dark-theme')) {
    btnToggle.textContent = "Switch to Light Mode";
  } else {
    btnToggle.textContent = "Switch to Dark Mode";
  }
});
