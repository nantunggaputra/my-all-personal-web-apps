# Kolam Koi

Aplikasi simulasi kolam ikan koi interaktif berbasis web dengan tampilan tampak atas (*top-down view*), UI *glassmorphism* yang bersih, serta lingkungan alami yang berubah mengikuti waktu. Latar ceritanya adalah kolam milik Kakek di sebuah pedesaan di Kabupaten Kebumen.

Versi saat ini: v6.3 (mengikuti penanda versi pada komentar kode).

---

## Fitur Utama

### Kolam dan Penghuninya

- **Bentuk kolam organik:** Tepi kolam berupa kurva acak yang terlihat alami, dibangun ulang setiap kali ukuran layar berubah.
- **Ikan koi:** 16 ekor koi (7 ukuran sedang dan 9 ukuran kecil) dengan lima variasi warna. Koi berenang santai, berbelok menjauhi tepi kolam, dan mengejar pelet makanan yang berada dalam jangkauannya. Saat makan, ikan sedikit naik ke permukaan dan menimbulkan riak.
- **Ikan sapu-sapu:** 4 ekor ikan sapu-sapu menyusuri tepi dasar kolam dengan pelan. Sesekali mereka berhenti dan menghadap dinding kolam untuk "bersih-bersih". Bisa ditangkap (disembunyikan) dan dilepaskan lagi lewat tombol slider (lihat bagian Tangkap Sapu-Sapu di bawah).
- **Kura-kura hijau:** Seekor kura-kura hijau di dasar kolam. Geraknya sangat lambat dan acak: lurus, berbelok, atau putar balik, bisa ke tepi maupun ke tengah. Saat malam berhenti berenang, kepala dan kakinya masuk ke cangkang, dan ia diam beristirahat. Bisa dipindahkan ke rerumputan lewat tombol slider (lihat bagian Pindahkan Kura-Kura di bawah).
- **Gelembung udara:** Gelembung naik dari dasar kolam dan pecah di permukaan sambil membentuk riak kecil. Gelembung perlahan berhenti muncul saat sapu-sapu sedang ditangkap, dan muncul lagi saat dilepaskan.
- **Riak air:** Muncul secara berkala, saat pelet jatuh, saat ikan makan, dan saat gelembung pecah.
- **Ekosistem dasar kolam:** Rumpun rumput laut (tampak atas, berupa titik-titik yang bergoyang pelan) dan dua kelompok karang berwarna-warni di area kiri atas dan kanan bawah.

### Lansekap Sekitar Kolam

- **Padang rumput:** Tekstur titik dan gradasi acak yang dibuat sekali lalu digambar ulang di setiap frame, dengan warna yang menyesuaikan waktu.
- **Batu tepi kolam:** Disusun mengelilingi kolam, lengkap dengan bayangan yang arah dan ukurannya mengikuti waktu.
- **Bunga kecil:** Tiga jenis bunga (merah muda berkelompok 3, kuning tunggal, dan biru kecil berkelompok banyak) yang mekar di pagi hari lalu menguncup dan memudar saat siang.
- **Pohon apel:** Pucuk pohon di pojok kiri atas, tampak menutupi hewan-hewan (kumbang, kucing, kunang-kunang) dan bunga, berada di bawah kabut dan bayangan walet.
- **Api unggun:** Tumpukan balok kayu dan ranting kecil di tenggara kolam (arah jam 4), dengan ranting berkumpul rapat di tengah tumpukan. Awalnya belum menyala. Api dinyalakan dan dimatikan oleh Bocah Bolang lewat tombol slider (lihat bagian Api Unggun di bawah).
- **Bocah Bolang:** Muncul berkeliling di sore hari, dan juga datang dari tepi layar kapan saja saat diminta menyalakan atau mematikan api unggun. Ia berkeliling santai di sekitar kolam, bisa berteduh di bawah pohon apel, berjalan di tepi kolam, atau melintas di rerumputan. Penampilannya tampak atas dengan topi merah terbalik, singlet putih, dan ransel hitam. Begitu malam tiba, ia langsung berlari pergi.

### Api Unggun (Baru di v6.0)

Tombol api unggun di slider bawah berganti label antara "Nyalakan Api Unggun" dan "Matikan Api Unggun", dan seluruh pekerjaannya dilakukan oleh Bocah Bolang:

- **Menyalakan:** Bolang berjalan ke tumpukan kayu (dengan gaya jalan yang sama seperti biasa), berhenti 1 detik, lalu api mulai menyala dan ia berlari pergi.
- **Mematikan:** Bolang berjalan ke tumpukan kayu, berhenti 1 detik, lalu api mulai padam dan ia berlari pergi. Setelah api benar-benar padam, kayu meninggalkan bekas gosong selama 3 detik, lalu memudar kembali ke warna kayu normal.
- **Efek api:** Lidah api tampak atas berlapis merah, oranye, kuning, dan inti terang yang berkedip. Cahaya hangat menerangi sekitar api (paling kuat saat malam), dan kayu tampak memerah saat terbakar.
- **Bara api:** Bara berterbangan ke segala arah dari api lalu memudar dan hilang pada radius tertentu.
- **Tombol terkunci:** Jika tombol diklik saat Bolang masih bertugas atau masih berlari di layar, tombol tidak berfungsi dan muncul pop up "Harap Tunggu" (gaya yang sama dengan "Segera Hadir").
- **Di luar sore hari:** Bolang muncul dari tepi layar hanya untuk tugas ini, lalu berlari pergi dan tidak kembali sampai sore. Jika diklik saat ia sedang berkeliling di sore hari, ia langsung dialihkan ke tumpukan kayu.
- **Lintasan:** Bolang berdiri di sisi samping tumpukan kayu (bukan sisi kolam). Jika jalur lurus terhalang kolam, ia memutar lewat sisi luar kolam.

### Pindahkan Kura-Kura (Baru di v6.1)

Tombol "Pindahkan Kura-Kura" di slider bawah memindahkan kura-kura antara dasar kolam dan rerumputan:

- **Ke rerumputan:** Jika kura-kura di dasar kolam, klik membuatnya tiba-tiba berada di rerumputan. Kepala dan kakinya hilang dulu (masuk cangkang), lalu muncul pelan-pelan seperti sehabis tidur.
- **Kembali ke kolam:** Jika diklik lagi, kura-kura tiba-tiba kembali ke dasar kolam, juga dengan kepala dan kaki hilang dulu.
- **Gerak di darat:** Sama lambat dan acak seperti di kolam (lurus, belok, putar balik). Bayangannya sama di semua waktu.
- **Tidak bisa kembali ke kolam sendiri:** Saat berjalan di darat, kura-kura menghindari kolam, lingkar batu, tumpukan api unggun, pohon, dan tepi layar. Jika jalannya terhalang, ia berbalik ke arah yang bebas.
- **Malam hari:** Kura-kura tetap diam dengan kepala dan kaki di dalam cangkang. Jika sedang di rerumputan, warnanya ikut meredup perlahan.
- **Tidak ada tempat:** Jika layar terlalu sempit sehingga tidak ada ruang kosong di rerumputan, muncul notifikasi "Tidak ada tempat".
- **Ubah ukuran layar:** Kura-kura dibuat ulang di dasar kolam.

### Tangkap Sapu-Sapu (Baru di v6.2)

Tombol di slider bawah berganti label antara "Tangkap Sapu-Sapu" dan "Lepaskan Sapu-Sapu":

- **Tangkap:** Keempat sapu-sapu memudar lalu hilang dari kolam. Warna air perlahan berubah menjadi biru kehijau-hijauan (tiga hijau toska bergradasi dari terang di tengah sampai gelap di tepi), dan gelembung perlahan berhenti muncul.
- **Lepaskan:** Sapu-sapu muncul kembali dan melanjutkan dari posisi terakhirnya. Warna air perlahan kembali ke biru semula, dan gelembung perlahan muncul lagi.
- **Peralihan halus:** Perubahan warna air dan jumlah gelembung berlangsung bertahap (sekitar beberapa detik), bukan mendadak. Gelembung yang sudah naik tetap pecah seperti biasa.
- **Ubah ukuran layar:** Status tangkap/lepas tetap tersimpan.

### Panggil Kucing Hitam (Baru di v6.3)

Tombol "Panggil Kucing Hitam" di slider bawah kini sudah berfungsi dan bisa digunakan kapan saja, tanpa harus menunggu malam:

- **Panggil:** Kucing hitam datang dari luar layar melalui jalur yang menghindari area kolam, kemudian mendekati tepi kolam untuk minum.
- **Semua waktu:** Kucing bisa dipanggil pada pagi, siang, sore, maupun malam.
- **Tidak otomatis pulang:** Jika waktu berubah ketika kucing masih berada di layar, kucing tetap melanjutkan aktivitasnya sampai selesai dan pergi melalui jalur kedatangannya.
- **Sudah datang:** Jika tombol ditekan ketika kucing masih berada di layar, muncul notifikasi "Sudah Datang".
- **Panggil kembali:** Setelah kucing selesai dan meninggalkan layar, tombol bisa digunakan kembali untuk memanggilnya.
- **Kemunculan otomatis malam:** Mekanisme kemunculan otomatis pada malam hari tetap dipertahankan, yaitu sekali setiap pemuatan halaman. Jika kucing sudah dipanggil secara manual, kemunculan otomatis tidak akan membuat kucing kedua.
- **Tidak ada tempat:** Jika tidak ditemukan jalur yang memungkinkan kucing datang dengan aman, muncul notifikasi "Tidak ada tempat".

### Siklus Waktu

Aplikasi memiliki empat suasana waktu. Mode awal ditentukan dari jam perangkat (pagi 06.00-10.59, siang 11.00-14.59, sore 15.00-17.59, selain itu malam), dan bisa diganti manual kapan saja.

| Waktu | Suasana dan kejadian |
|-------|----------------------|
| Pagi | Kabut tipis di atas kolam dan rumput, bunga mekar, dan seekor kumbang merah mungil dengan tiga bintik hitam hinggap berpindah dari bunga ke bunga. |
| Siang | Pencahayaan terang. Bayangan burung walet melintas pelan di atas rumput dan air (maksimal 3 sekaligus). Bunga menguncup. Sprinkle aktif menyemprotkan air. |
| Sore | Cahaya jingga hangat dari arah barat (kiri layar) yang berdenyut halus di atas air dan rumput. Seorang bocah Bolang bertopi merah terbalik berkeliling santai, lalu berlari pergi saat malam tiba. |
| Malam | Suasana gelap dengan empat lampu bawah air di tepi kolam, kunang-kunang yang berkedip pelan, ikan yang berenang lebih tenang, dan kura-kura yang beristirahat. Seekor kucing hitam muncul sekali setiap kali halaman dimuat, minum di tepi kolam, lalu pergi. Kucing tidak lagi otomatis pulang ketika waktu berganti ke siang dan tetap menyelesaikan aktivitasnya. Kucing juga bisa dipanggil secara manual kapan saja melalui tombol Panggil Kucing Hitam. |

Api unggun bisa menyala di waktu apa pun. Cahayanya paling terasa saat malam dan sore.

### Interaksi dan UI

- **Beri makan lewat tombol:** Tombol "Beri Makan Koi" menebar pelet di sekitar tengah kolam.
- **Beri makan lewat klik atau tap:** Klik atau tap di area air untuk menjatuhkan pelet di lokasi tersebut. Klik di luar kolam diabaikan.
- **Slider 6 tombol:** Tombol bawah bisa digeser ke kiri untuk berganti aktivitas: Beri Makan Koi, Pindahkan Kura-Kura, Tangkap Sapu-Sapu, Panggil Kucing Hitam, Kuras Air Kolam, dan Nyalakan/Matikan Api Unggun. Tombol yang sudah berfungsi: Beri Makan Koi, Pindahkan Kura-Kura, Tangkap Sapu-Sapu, Panggil Kucing Hitam, dan Api Unggun. Kuras Air Kolam masih menampilkan "Segera Hadir".
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
3. **Nyalakan api unggun:** Geser tombol bawah ke kiri sampai "Nyalakan Api Unggun", lalu tekan. Tunggu Bolang berjalan ke tumpukan kayu dan menyalakan apinya. Tekan lagi ("Matikan Api Unggun") untuk memadamkannya. Selama Bolang masih bertugas atau berlari di layar, tombol akan menampilkan "Harap Tunggu".
4. **Pindahkan kura-kura:** Geser tombol ke "Pindahkan Kura-Kura" lalu tekan untuk memindahkannya ke rerumputan. Tekan lagi untuk mengembalikannya ke dasar kolam.
5. **Tangkap sapu-sapu:** Geser tombol ke "Tangkap Sapu-Sapu" lalu tekan. Perhatikan air yang berubah kehijauan dan gelembung yang menghilang. Tekan lagi ("Lepaskan Sapu-Sapu") untuk mengembalikannya.
6. **Panggil kucing hitam:** Geser tombol ke "Panggil Kucing Hitam" lalu tekan untuk mendatangkan kucing kapan saja. Jika kucing masih berada di layar, muncul notifikasi "Sudah Datang".
7. **Baca sambutan:** Tekan ikon gelombang di header untuk membuka Papan Sambutan. Musik ambient ikut mulai saat tombol ini pertama kali ditekan.
8. **Cek cuaca:** Di pop up yang sama, lihat strip Mini Weather di bagian atas. Isinya ikut berubah saat kamu mengganti waktu.
9. **Kejutan malam hari:** Pindah ke waktu malam dan tunggu beberapa saat untuk melihat kucing hitam datang minum di tepi kolam secara otomatis. Kucing otomatis muncul sekali setiap pemuatan halaman. Kamu juga bisa memanggilnya secara manual kapan saja. Nyalakan api unggun di malam hari untuk melihat cahaya dan bara apinya paling jelas.

---

## Roadmap

- [ ] **Peta Denah Kolam:** Mengaktifkan tab kedua pada pop up Papan Sambutan.
- [ ] **Variasi jenis ikan dan toko ikan:** Opsi menambah spesies baru (Ikan Mas Koki, Black Tele, Koi Tancho).
- [ ] **Dekorasi kolam kustom:** Menempatkan bunga teratai, lentera batu, atau jembatan kayu kecil.
- [ ] **Audio dan SFX:** Musik latar ambient serta suara gemericik air saat memberi makan. (Musik latar sudah ada, SFX belum.)
- [x] **Pindahkan kura-kura:** Memindahkan kura-kura hijau ke rerumputan dan kembali ke dasar kolam (v6.1), meredup saat malam (v6.2).
- [x] **Tangkap sapu-sapu:** Menangkap dan melepaskan ikan sapu-sapu, air berubah kehijauan dan gelembung menghilang saat tidak ada sapu-sapu (v6.2).
- [x] **Panggil kucing hitam:** Memanggil kucing hitam kapan saja, termasuk di luar waktu malam, dengan perilaku tetap melanjutkan aktivitas meskipun waktu berubah (v6.3).
- [ ] **Kuras air kolam:** Menguras air kolam yang keruh saat tidak ada ikan sapu-sapu (saat ini tombol masih Segera Hadir).
- [x] **Api unggun:** Bocah Bolang menyalakan dan mematikan api unggun, lengkap dengan efek api, bara, dan bekas gosong (v6.0).
- [ ] **Sistem level dan kebutuhan ikan:** Tingkat kenyang, pertumbuhan ukuran ikan, dan pengumpulan poin koi.

---

## Lisensi

Proyek ini dibuat sebagai prototipe MVP (*Minimum Viable Product*) dan bebas dikembangkan lebih lanjut.
