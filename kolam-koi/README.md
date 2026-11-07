# 🎏 Kolam Koi (Koi Pond MVP)

Aplikasi simulasi kolam ikan koi interaktif berbasis web dengan tampilan tampak atas (*top-down view*), desain UI modern yang bersih (*clean glassmorphism UI*), serta lingkungan alami yang dinamis.

![Kolam Koi Screenshot Placeholder](https://via.placeholder.com/800x450/0f172a/ffffff?text=Kolam+Koi+MVP+Top-Down+View)

---

## 🌟 Fitur Utama

- **Perspektif Top-Down Realistis:** View dari atas kolam menampilkan pergerakan ikan koi, bayangan dasar kolam, dan ekosistem air.
- **Bentuk Kolam Organik & Air Jernih:** Shapes kolam acak alami dengan efek animasi riak air (*water ripples*) dinamis saat ikan bergerak atau makan.
- **Ekosistem Dasar Kolam:** 
  - **Rumput Laut (POV Atas):** Gugusan rumpun tanaman air titik-titik melingkar yang mengembang dan menguncup halus (*pulsing sway effect*).
  - **Terumbu Karang Hias:** Cluster terumbu karang berwarna-warni di area *top-left* dan *bottom-right* dasar kolam.
- **Lansekap Luar Kolam:** Dikelilingi padang rumput hijau segar berpola tekstur alami dan bebatuan abu-abu dengan bayangan dinamis sesuai siklus waktu.
- **Sistem 4 Siklus Pencahayaan (Waktu Real & Manual):**
  - 🌅 **Pagi:** Nuansa hangat lembut dengan rumput hijau muda.
  - ☀️ **Siang:** Pencahayaan terang dan kontras jernih.
  - 🌇 **Sore:** Rona merah/keemasan hangat khas senja.
  - 🌙 **Malam:** Nuansa zamrud gelap dengan **lampu otomatis (*subtle underwater spotlights*)** di sudut-sudut kolam, bayangan pekat di dasar, **kunang-kunang** berkedip pelan, serta **kucing hitam rahasia** yang muncul sekali saat malam untuk minum air di tepi kolam.
- **Interaksi "Beri Makan":** 
  - Tombol **Beri Makan** atau klik langsung di area air untuk menjatuhkan pelet.
  - AI Ikan Koi mendeteksi makanan, berenang mendekat, dan membuat efek gelombang air di permukaan saat melahap pelet.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5 & Canvas 2D API:** Untuk komputasi visual, simulasi fisika riak air, AI kawanan ikan, perilaku hewan, dan rendering grafis *real-time*.
- **Tailwind CSS (CDN):** Untuk tata letak responsif dan komponen UI modern.
- **Lucide Icons:** Ikonografi UI modern.
- **Vanilla JavaScript (ES6+):** Tanpa dependensi berat tambahan.

---

## 🚀 Cara Menjalankan

1. Download atau clone repository ini.
2. Buka file `index.html` langsung di browser web favorit Anda (Chrome, Firefox, Edge, Safari, dll.).
3. Tidak memerlukan *build tool* atau server lokal (Node.js/Python) untuk menjalankannya.

---

## 🎮 Cara Bermain / Interaksi

1. **Beri Makan (Tombol Utama):** Klik tombol **"Beri Makan Koi"** di bagian bawah layar untuk menebar pelet secara acak di tengah kolam.
2. **Beri Makan (Klik Langsung):** Klik atau tap bagian mana saja di dalam kolam untuk menjatuhkan pelet tepat di lokasi tersebut.
3. **Ubah Waktu Pencahayaan:** Klik tombol **"Ubah Waktu"** di header atas untuk berganti suasana pencahayaan secara manual (Pagi → Siang → Sore → Malam).
4. **Kejutan Malam Hari:** Beralih ke waktu malam dan tunggu beberapa saat untuk melihat kunjungan kucing hitam di pinggir kolam.

---

## 🗺️ Rencana Pengembangan Fitur Selanjutnya (Roadmap)

- [ ] **Variasi Jenis & Toko Ikan:** Opsi menambah spesies ikan baru (Ikan Mas Koki, Black Tele, Koi Tancho).
- [ ] **Dekorasi Kolam Kustom:** Memungkinkan pemain menempatkan bunga teratai (*water lilies*), lentera batu, atau jembatan kayu kecil.
- [ ] **Audio & SFX:** Musik latar ambient yang menenangkan dan suara gemericik air/riak air saat memberi makan.
- [ ] **Sistem Level & Kebutuhan Ikan:** Tingkat kenyang, pertumbuhan ukuran ikan, dan pengumpulan poin Koi.

---

## 📄 Lisensi

Proyek ini dibuat sebagai prototipe MVP (*Minimum Viable Product*) dan bebas dikembangkan lebih lanjut.