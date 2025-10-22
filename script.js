// Ambil tombol berdasarkan ID
const tombolSapa = document.getElementById('sapaButton');

// Tambahkan event saat tombol diklik
tombolSapa.addEventListener('click', function() {
  alert('Halo! Terima kasih sudah berkunjung');

  // Daftar warna untuk latar belakang
  const warna = ['#FFB6C1', '#90EE90', '#ADD8E6', '#FFFACD', '#E6E6FA', '#FFD700'];

  // Pilih warna acak
  const randomWarna = warna[Math.floor(Math.random() * warna.length)];

  // Ubah warna latar belakang body
  document.body.style.backgroundColor = randomWarna;
});
