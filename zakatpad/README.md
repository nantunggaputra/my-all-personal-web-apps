# ⚖️ ZakatPad - Kalkulator Zakat Pribadi Anda

ZakatPad adalah aplikasi web kalkulator zakat dan sedekah modern dengan antarmuka bersih (clean UI) yang terinspirasi dari estetika Notion. Aplikasi ini dirancang dengan pendekatan **mobile-first**, ringan, dan berjalan sepenuhnya di sisi klien (client-side) tanpa memerlukan database atau backend.

---

## ✨ Fitur Utama

* **Empat Kategori Utama:**
  * **Zakat Fitrah:** Mendukung perhitungan per jiwa dengan pilihan satuan Kilogram (2.5kg) atau Liter (3.5L).
  * **Zakat Profesi:** Perhitungan otomatis berdasarkan nisab perak/beras (522kg beras).
  * **Zakat Maal:** Menghitung aset (tabungan, emas, perak) dikurangi hutang dengan nisab 85g emas.
  * **Sedekah:** Input bebas untuk mencatat atau menghitung niat sedekah.
* **Pengaturan Harga Dinamis:** User dapat memperbarui harga referensi emas dan beras secara mandiri melalui menu pengaturan.
* **Penyimpanan Lokal:** Menggunakan `localStorage` untuk menyimpan harga referensi dan preferensi pengguna sehingga data tetap ada saat halaman dimuat ulang.
* **Salin Ringkasan:** Fitur satu-klik untuk menyalin hasil perhitungan ke clipboard (siap dibagikan ke WhatsApp atau catatan pribadi).
* **Aksesibilitas & Validasi:** Mendukung screen reader (ARIA labels) dan validasi input untuk mencegah angka negatif.

---

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan teknologi web standar tanpa library eksternal untuk menjamin kecepatan maksimal:

* **HTML5:** Struktur semantik dan elemen input modern.
* **CSS3:** Layout Flexbox, variabel CSS untuk tema, dan desain responsif.
* **JavaScript (ES6+):** Logika perhitungan, manajemen state sederhana, dan interaksi DOM.
* **Web Storage API:** Persistensi data menggunakan `localStorage`.
* **Clipboard API:** Fitur salin teks otomatis.
* **Inline SVG:** Ikon yang ringan dan tajam tanpa perlu memuat file gambar atau font eksternal.

---

## 🚀 Cara Penggunaan

1. **Buka File:** Cukup buka file `index.html` di browser ponsel atau desktop Anda.
2. **Atur Harga:** Klik ikon roda gigi (pengaturan) di pojok kanan atas untuk memasukkan harga emas dan beras terkini di daerah Anda.
3. **Pilih Tab:** Pilih jenis zakat yang ingin dihitung.
4. **Input Data:** Masukkan angka pada kolom yang tersedia. Hasil akan muncul secara otomatis di bagian bawah.
5. **Salin:** Klik "Salin Ringkasan" untuk mengambil teks laporan perhitungan.

---

## 📝 Catatan Teknis

* **Tanpa Backend:** Aplikasi ini tidak mengirim data Anda ke server mana pun. Privasi data keuangan Anda tetap terjaga di perangkat Anda sendiri.
* **Mobile First:** Desain dioptimalkan untuk lebar layar smartphone, namun tetap proporsional saat dibuka di desktop.
* **Fallback:** Jika `localStorage` kosong, aplikasi menggunakan nilai standar (Emas: Rp1.350.000, Beras: Rp15.000) sebagai referensi awal.

---

Semoga bermanfaat dan menjadi amal jariyah.