# 🌱 Window Garden Pro

Window Garden Pro adalah aplikasi web simulasi perawatan tanaman (Virtual Pet) yang interaktif. Aplikasi ini menggunakan logika berbasis waktu nyata (real-time) untuk memberikan pengalaman merawat tanaman yang autentik langsung dari browser Anda.

---

## ✨ Fitur Utama

- **Visual Dinamis**  
  Tanaman tumbuh lebih tinggi seiring meningkatnya Level (XP) melalui kalkulasi SVG Path.

- **Logika Waktu Riil**  
  Kondisi tanaman (Segar, Normal, Haus, Layu) dihitung berdasarkan selisih waktu antara penyiraman terakhir dan waktu saat ini.

- **Mode Libur (Pause)**  
  Fitur khusus untuk menghentikan simulasi waktu sementara tanpa merusak progres, sehingga tanaman Anda tetap aman saat Anda tidak bisa membuka aplikasi.

- **Sistem Gamifikasi**
  - **XP & Level**: Kembangkan tanaman Anda dari bibit hingga pohon besar.
  - **Streak Hari**: Melacak konsistensi perawatan harian Anda.

- **Siklus Siang & Malam**  
  UI berubah secara otomatis (tema terang/gelap) berdasarkan waktu lokal pengguna.

- **Penyimpanan Lokal**  
  Semua data tersimpan otomatis di browser (`localStorage`), sehingga progres tidak akan hilang saat halaman dimuat ulang.

---

## 🛠️ Detail Teknis

### 1. Simulasi Waktu Cerdas

Aplikasi ini tidak menggunakan countdown sederhana. Sebaliknya, ia menyimpan timestamp penyiraman terakhir.

- **Rumus:**  
  `Sisa Waktu = Interval - (Waktu Sekarang - Waktu Terakhir Siram)`

- Hal ini memastikan bahwa jika pengguna menutup browser dan kembali 30 menit kemudian, timer akan berkurang tepat 30 menit.

---

### 2. Logika Mode Libur

Saat Mode Libur diaktifkan:

- Aplikasi mencatat kapan waktu jeda dimulai.
- Saat dinonaktifkan, aplikasi menghitung durasi libur tersebut dan menambahkannya ke timestamp penyiraman terakhir (`lastWatered`).
- Ini secara efektif "menggeser" waktu ke depan, sehingga status tanaman tetap identik dengan saat sebelum ditinggalkan.

---

### 3. Grafik SVG Prosedural

Batang tanaman digambar menggunakan **Quadratic Bezier Curve (`Q`) pada path SVG**. Titik kontrol kurva ini berubah sesuai status tanaman:

- **Segar**: Batang tegak lurus  
- **Normal**: Sedikit melengkung alami  
- **Haus**: Mulai condong  
- **Layu**: Batang melengkung ke samping secara dinamis  

---

## 🚀 Cara Penggunaan

1. Buka file `index.html` di browser apa pun  
2. Klik ikon setting untuk mengatur interval penyiraman atau mengaktifkan Mode Libur  
3. Siram tanaman tepat waktu untuk menjaga Streak dan meningkatkan Level  

---

## 📦 Teknologi yang Digunakan

- HTML5
- CSS3 (Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (ES6+)
- SVG (Procedural Rendering)
- Web APIs:
  - `localStorage`
  - `Date API`

---

## 🎯 Filosofi

Window Garden Pro dirancang sebagai **calm productivity companion**.

Aplikasi ini tidak memaksa, tidak memberikan notifikasi agresif, dan tidak membebani pengguna dengan target berlebihan.  
Sebaliknya, ia hadir sebagai refleksi sederhana dari perhatian yang Anda berikan.

Jika Anda lupa, tanaman akan layu.  
Namun ia selalu bisa hidup kembali — hanya dengan satu tetes air.

---

## 💡 Catatan

- Tidak memerlukan backend
- Tidak menggunakan library eksternal
- Berjalan 100% di browser
- Ukuran ringan & mobile-first

---

## 🧑‍💻 Kontribusi

Repository ini terbuka untuk eksplorasi dan pengembangan lebih lanjut.  
Silakan fork dan kembangkan sesuai kebutuhan atau ide Anda.

---

Dibuat dengan ❤️ untuk merawat 🌱 dan menemani waktu produktif Anda.