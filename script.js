//1. Pilih tombol berdasarkan ID-nya 
const tombolsapa = document.getElemenByid('sapaBotton');
//2.Tambahkan 'event listener' untuk aksi 'click'
tombolsapa.addEventlistener('click', function() {
    //3. jalankan kode ini ketika tombol di-klik
    alert('halo! Terima kasih suda berkunjung!');
});
