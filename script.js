// Ambil tombol berdasarkan ID
const tombolSapa = document.getElementById('sapaButton');

// Fungsi untuk tombol "Sapa saya!"
tombolSapa.addEventListener('click', function() {
  alert('Halo! Terima kasih sudah berkunjung,');
});

// Tombol baru: "Ganti Warna Latar"
const tombolWarna = document.getElementById('gantiWarnaButton');

tombolWarna.addEventListener('click', function() {
  // Daftar warna yang bisa dipilih
  const warna = ['#FFB6C1', '#90EE90', '#ADD8E6', '#FFFACD', '#E6E6FA', '#FFD700'];

  // Ambil warna acak dari daftar
  const randomWarna = warna[Math.floor(Math.random() * warna.length)];

  // Ganti warna latar belakang
  document.body.style.backgroundColor = randomWarna;
});
// 🌗 Tombol untuk ganti mode terang/gelap
const tombolMode = document.getElementById('gantiMode');

tombolMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Ubah emoji sesuai mode
    if (document.body.classList.contains('dark-mode')) {
        tombolMode.textContent = '☀️ Ganti Mode';
    } else {
        tombolMode.textContent = '🌙 Ganti Mode';
    }
});
