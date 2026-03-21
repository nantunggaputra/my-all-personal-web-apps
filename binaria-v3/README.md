# Binaria v3 - Mobile Multi Cipher Tool

Aplikasi web ringan untuk encode dan decode berbagai jenis cipher langsung di browser tanpa backend.

Dirancang dengan pendekatan **Mobile-First** dan dapat digunakan **100% offline**.

---

## ✨ Fitur Utama

- **Real-time Conversion** - Langsung saat mengetik
- **Multi-Cipher Support**:
  - Binary (8-bit ASCII)
  - Binary (16-bit Unicode)
  - Base64
  - Morse Code
- **Smart Validation** - Mencegah input salah dengan validasi real-time
- **Clipboard Integration** - Copy hasil dengan satu klik
- **Download** - Simpan hasil sebagai `.txt`
- **Export HTML** - Download hasil sebagai file HTML mandiri yang bisa dibuka offline
- **Local History** - Riwayat tersimpan di perangkat (max 10 item)
- **Light / Dark Mode** - Toggle tema dengan menyimpan preferensi
- **Zero Dependencies** - Tanpa library, CDN, atau font eksternal
- **Fully Responsive** - Optimized untuk mobile dan desktop

---

## 🧠 Cara Kerja

Semua proses encoding dan decoding dilakukan **langsung di browser** menggunakan JavaScript vanilla.

**Tidak ada data yang dikirim ke server.**

---

## 💾 Penyimpanan

Menggunakan `localStorage` untuk:
- Riwayat konversi (maksimal 10 item)
- Preferensi tema (light/dark)

---

## 📱 Cara Penggunaan

### Basic Usage

1. **Pilih Mode**:
   - `Encode` → Ubah teks menjadi kode
   - `Decode` → Ubah kode kembali ke teks

2. **Pilih Cipher**:
   - Binary 8-bit (ASCII)
   - Binary 16-bit (Unicode)
   - Base64
   - Morse Code

3. **Input**:
   - Ketik atau paste teks/kode di area input
   - Hasil muncul otomatis (real-time)

4. **Action**:
   - **Copy** - Salin hasil ke clipboard
   - **Download** - Unduh sebagai file `.txt`
   - **Export HTML** - Export sebagai file HTML standalone
   - **Clear** - Bersihkan input dan output

---

## 📤 Export HTML

Fitur unggulan v3! Memungkinkan hasil konversi diunduh sebagai file HTML yang:
- Dapat dibuka tanpa koneksi internet
- Memiliki styling sendiri (embedded CSS)
- Menampilkan metadata (cipher, mode, timestamp)
- Dapat di-copy langsung dari file HTML

**Use case**:
- Berbagi hasil konversi tanpa perlu aplikasi
- Arsip offline yang dapat dibuka kapan saja
- Dokumentasi hasil enkripsi/dekripsi

---

## 🌗 Light/Dark Mode

- Toggle dengan tombol di pojok kanan atas
- Preferensi tersimpan otomatis
- Tetap aktif setelah reload

---

## 📝 Aturan Input

### Binary (8-bit & 16-bit)
- Hanya angka `0` dan `1`
- Dipisahkan dengan spasi
- Contoh: `01000001 01000010 01000011`

### Base64
- Karakter valid: `A-Z`, `a-z`, `0-9`, `+`, `/`, `=`
- Contoh: `SGVsbG8gV29ybGQ=`

### Morse Code
- Titik (`.`), garis (`-`), dan garis miring (`/` untuk spasi)
- Dipisahkan dengan spasi
- Contoh: `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`

---

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + Enter` - Process conversion
- `Ctrl/Cmd + K` - Clear input/output

---

## 🛠️ Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Custom properties (CSS variables) untuk theming
- **Vanilla JavaScript** - Zero dependencies
- **Web APIs**:
  - `localStorage` - Persistent storage
  - `Clipboard API` - Copy to clipboard
  - `Blob API` - File download
  - `btoa/atob` - Base64 encoding/decoding

---

## 📁 Struktur File

```
binaria-v3/
├── index.html      # Struktur HTML
├── style.css       # Styling dengan CSS variables
├── script.js       # Logic & functionality
└── README.md       # Dokumentasi
```

---

## 🔒 Privasi & Keamanan

- ✅ **Semua proses lokal** - Data tidak dikirim ke server
- ✅ **No tracking** - Tidak ada analytics atau cookies pihak ketiga
- ✅ **Offline-capable** - Dapat digunakan tanpa koneksi internet
- ✅ **Open source** - Kode transparan dan dapat diaudit

---

## 🚀 Deployment

### Option 1: Static Hosting
Upload ketiga file ke:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Option 2: Lokal
Buka `index.html` langsung di browser (no server required)

---

## 📌 Roadmap

**Planned Features**:
- [ ] Auto-detect cipher type
- [ ] Multi-layer encoding (encode hasil encode)
- [ ] File upload & batch decode
- [ ] Audio Morse (Web Audio API)
- [ ] QR Code generator untuk hasil
- [ ] PWA support (installable app)
- [ ] Export to PDF

---

## 🐛 Known Issues

- Morse code tidak support karakter di luar A-Z, 0-9, dan spasi
- Base64 encoding untuk emoji mungkin berbeda di browser lama

---

## 🤝 Kontribusi

Proyek ini open untuk improvement! Silakan:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 License

MIT License - Bebas digunakan untuk personal maupun komersial.

---

## 👨‍💻 Author

**Frontend Developer**  
Dibuat sebagai eksplorasi encoding, cipher tools, dan aplikasi offline-first.