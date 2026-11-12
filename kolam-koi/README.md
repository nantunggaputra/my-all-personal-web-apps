# Kolam Koi

Aplikasi simulasi kolam ikan koi interaktif berbasis web dengan tampilan tampak atas (*top-down view*), UI *glassmorphism* yang bersih, serta lingkungan alami yang berubah mengikuti waktu. Latar ceritanya adalah kolam milik Kakek di sebuah pedesaan di Kabupaten Kebumen.

Versi saat ini: v5.7 (mengikuti penanda versi pada komentar kode).

---

## Fitur Utama

### Kolam dan Penghuninya

- **Bentuk kolam organik:** Tepi kolam berupa kurva acak yang terlihat alami, dibangun ulang setiap kali ukuran layar berubah.
- **Ikan koi:** 16 ekor koi (7 ukuran sedang dan 9 ukuran kecil) dengan lima variasi warna. Koi berenang santai, berbelok menjauhi tepi kolam, dan mengejar pelet makanan yang berada dalam jangkauannya. Saat makan, ikan sedikit naik ke permukaan dan menimbulkan riak.
- **Ikan sapu-sapu:** 4 ekor ikan sapu-sapu menyusuri tepi dasar kolam dengan pelan. Sesekali mereka berhenti dan menghadap dinding kolam untuk "bersih-bersih".
- **Kura-kura hijau:** Seekor kura-kura hijau di dasar kolam. Geraknya sangat lambat dan acak: lurus, berbelok, atau putar balik, bisa ke tepi maupun ke tengah. Saat malam berhenti berenang dan diam beristirahat.
- **Gelembung udara:** Gelembung naik dari dasar kolam dan pecah di permukaan sambil membentuk riak kecil.
- **Riak air:** Muncul secara berkala, saat pelet jatuh, saat ikan makan, dan saat gelembung pecah.
- **Ekosistem dasar kolam:** Rumpun rumput laut (tampak atas, berupa titik-titik yang bergoyang pelan) dan dua kelompok karang berwarna-warni di area kiri atas dan kanan bawah.

### Lansekap Sekitar Kolam

- **Padang rumput:** Tekstur titik dan gradasi acak yang dibuat sekali lalu digambar ulang di setiap frame, dengan warna yang menyesuaikan waktu.
- **Batu tepi kolam:** Disusun mengelilingi kolam, lengkap dengan bayangan yang arah dan ukurannya mengikuti waktu.
- **Bunga kecil:** Tiga jenis bunga (merah muda berkelompok 3, kuning tunggal, dan biru kecil berkelompok banyak) yang mekar di pagi hari lalu menguncup dan memudar saat siang.
- **Pohon apel:** Pucuk pohon di pojok kiri atas, tampak menutupi hewan-hewan (kumbang, kucing, kunang-kunang) dan bunga, berada di bawah kabut dan bayangan walet.
- **Tumpukan kayu api unggun:** Balok kayu dan ranting kecil yang masih utuh, tersusun di tenggara kolam (arah jam 4). Ranting berkumpul rapat di tengah tumpukan. Belum menyala.

### Siklus Waktu

Aplikasi memiliki empat suasana waktu. Mode awal ditentukan dari jam perangkat (pagi 06.00-10.59, siang 11.00-14.59, sore 15.00-17.59, selain itu malam), dan bisa diganti manual kapan saja.

| Waktu | Suasana dan kejadian |
|-------|----------------------|
| Pagi | Kabut tipis di atas kolam dan rumput, bunga mekar, dan seekor kumbang merah mungil dengan tiga bintik hitam hinggap berpindah dari bunga ke bunga. |
| Siang | Pencahayaan terang. Bayangan burung walet melintas pelan di atas rumput dan air (maksimal 3 sekaligus). Bunga menguncup. Sprinkle aktif menyemprotkan air. |
| Sore | Cahaya jingga hangat dari arah barat (kiri layar) yang berdenyut halus di atas air dan rumput. |
| Malam | Suasana gelap dengan empat lampu bawah air di tepi kolam, kunang-kunang yang berkedip pelan, ikan yang berenang lebih tenang, dan kura-kura yang beristirahat. Seekor kucing hitam muncul sekali setiap kali halaman dimuat, minum di tepi kolam, lalu pergi. Jika waktu berganti ke siang saat kucing masih ada, kucing langsung pulang. |

### Interaksi dan UI

- **Beri makan lewat tombol:** Tombol "Beri Makan Koi" menebar pelet di sekitar tengah kolam.
- **Beri makan lewat klik atau tap:** Klik atau tap di area air untuk menjatuhkan pelet di lokasi tersebut. Klik di luar kolam diabaikan.
- **Ubah waktu:** Tombol di header berpindah berurutan: Pagi, Siang, Sore, Malam.
- **Mini Weather:** Di bagian paling atas pop up (di atas tab) ada strip 4 ikon berjejer: Cuaca, Suhu, Kelembapan, dan Kabut, masing-masing dengan keterangan singkat di bawahnya. Isinya berganti mengikuti waktu (Pagi, Siang, Sore, Malam). Angkanya diacak sedikit di sekitar nilai acuan setiap kali halaman dimuat, lalu tetap sama selama sesi, jadi ganti waktu manual tidak mengacak ulang.

  | Waktu | Cuaca | Suhu | Kelembapan | Kabut |
  |-------|-------|------|------------|-------|
  | Pagi | Misty | 21°C (±2) | 92% (±4) | 40% (±10) |
  | Siang | Sunny | 30°C (±2) | 58% (±6) | 0% |
  | Sore | Warm | 25°C (±2) | 74% (±5) | 0% |
  | Malam | Clear | 20°C (±2) | 90% (±4) | 4% (±3) |
- **Papan Sambutan:** Tombol ikon gelombang di header membuka pop up berisi surat sambutan yang menceritakan suasana kolam di tiap waktu. Pop up bisa ditutup dengan tombol OK atau dengan mengetuk area gelap di luar kartu. Pop up memiliki dua tab, yaitu Papan Sambutan dan Peta Denah Kolam. Tab Peta Denah Kolam belum aktif dan hanya menampilkan notifikasi "Coming Soon".
- **Audio ambient:** Suara latar dimulai saat tombol ikon gelombang pertama kali ditekan (sesuai aturan autoplay browser), lalu berputar terus dengan volume 50%. Tidak ada tombol pause di UI, dan kalau dijeda dari luar halaman (misalnya kontrol media OS), suara dilanjutkan lagi. File `ambient.mp3` harus berada satu folder dengan `index.html`.
- **Responsif untuk mobile:** Tinggi layar mengikuti viewport aktual (`dvh`), dan kontrol bawah dipasang dengan mempertimbangkan area aman (*safe area*) perangkat.

---

## Teknologi yang Digunakan

- **HTML5 dan Canvas 2D API:** Rendering visual real-time, simulasi riak air, perilaku hewan, dan seluruh efek lingkungan.
- **Vanilla JavaScript (ES6+):** Tanpa framework dan tanpa dependensi tambahan untuk logika simulasi.
- **Tailwind CSS (CDN):** Tata letak responsif dan komponen UI.
- **Lucide Icons (CDN):** Ikon antarmuka.
- **Google Fonts (Plus Jakarta Sans):** Tipografi antarmuka.

Catatan: Tailwind, Lucide, dan font dimuat lewat CDN, jadi dibutuhkan koneksi internet saat pertama kali membuka aplikasi.

---

## Cara Menjalankan

1. Download atau clone repository ini.
2. Buka file `index.html` langsung di browser (Chrome, Firefox, Edge, Safari, dan sebagainya).
3. Tidak diperlukan *build tool* maupun server lokal.

---

## Cara Bermain

1. **Beri makan:** Tekan tombol "Beri Makan Koi" di bawah layar, atau klik/tap langsung di area kolam untuk menjatuhkan pelet.
2. **Ganti waktu:** Tekan tombol waktu di header untuk berpindah suasana Pagi, Siang, Sore, dan Malam.
4. **Baca sambutan:** Tekan ikon gelombang di header untuk membuka Papan Sambutan. Musik ambient ikut mulai saat tombol ini pertama kali ditekan.
5. **Cek cuaca:** Di pop up yang sama, lihat strip Mini Weather di bagian atas. Isinya ikut berubah saat kamu mengganti waktu.
6. **Kejutan malam hari:** Pindah ke waktu malam dan tunggu beberapa saat untuk melihat kucing hitam datang minum di tepi kolam. Kucing hanya muncul sekali per pemuatan halaman, jadi muat ulang halaman untuk melihatnya lagi.

---

## Roadmap

- [ ] **Peta Denah Kolam:** Mengaktifkan tab kedua pada pop up Papan Sambutan.
- [ ] **Variasi jenis ikan dan toko ikan:** Opsi menambah spesies baru (Ikan Mas Koki, Black Tele, Koi Tancho).
- [ ] **Dekorasi kolam kustom:** Menempatkan bunga teratai, lentera batu, atau jembatan kayu kecil.
- [ ] **Audio dan SFX:** Musik latar ambient serta suara gemericik air saat memberi makan.
- [ ] **Pindahkan kura-kura:** Memindahkan kura-kura hijau ke luar atau ke dalam kolam (saat ini tombol masih Segera Hadir).
- [ ] **Tangkap sapu-sapu:** Menangkap dan melepaskan ikan sapu-sapu (saat ini tombol masih Segera Hadir).
- [ ] **Panggil kucing hitam:** Memanggil kucing hitam kapan saja / bisa di luar waktu malam (saat ini tombol masih Segera Hadir).
- [ ] **Kuras air kolam:** Menguras air kolam yang keruh saat tidak ada ikan sapu-sapu (saat ini tombol masih Segera Hadir).
- [ ] **Api unggun:** Membakar dan menyiram tumpukan kayu untuk menyalakan atau mematikan api unggun (saat ini tombol masih Segera Hadir).
- [ ] **Sistem level dan kebutuhan ikan:** Tingkat kenyang, pertumbuhan ukuran ikan, dan pengumpulan poin koi.

---

## Lisensi

Proyek ini dibuat sebagai prototipe MVP (*Minimum Viable Product*) dan bebas dikembangkan lebih lanjut.
