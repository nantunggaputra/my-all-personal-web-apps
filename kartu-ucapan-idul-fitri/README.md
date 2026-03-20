# 🌙 Kartu Ucapan Idul Fitri

Web app sederhana untuk membuat kartu ucapan Idul Fitri digital yang bisa dipersonalisasi dan dibagikan melalui link — tanpa backend.

---

## ✨ Fitur Utama

- 🎨 Pilih tema kartu (Pink Mawar / Hijau Tosca)
- ✍️ Input nama pengirim (opsional dengan "& Keluarga")
- 🔗 Generate link shareable (tanpa database)
- 📱 Share langsung ke WhatsApp & Telegram
- 📋 Copy link ke clipboard
- 🧾 Generate QR Code (canvas-based)
- 🖼️ Download kartu sebagai gambar (PNG)
- 💾 Auto-save state via localStorage
- 🔓 Decode kartu langsung dari URL

---

## 🧠 Cara Kerja

Aplikasi ini sepenuhnya berjalan di sisi client (browser):

- Data pengguna **tidak disimpan di server**
- State kartu di-*encode* ke URL menggunakan Base64
- Saat link dibuka:
  - Data akan di-*decode*
  - UI dirender ulang sesuai isi kartu

**Contoh URL:**
```
https://domain.com/?c=encoded_string
```

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Custom Properties + Responsive Design)
- **Vanilla JavaScript** (No Framework)
- **Canvas API** (QR Code & Image Export)
- **LocalStorage API**
- **External API:**
  - Hijriyah Date: `https://api.aladhan.com`

---

## 📂 Struktur Project

```
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## 🚀 Cara Menjalankan

### 1. Clone repository ini:

```bash
git clone https://github.com/username/repo-name.git
```

### 2. Buka file:

Buka `index.html` di browser atau gunakan live server (disarankan).

---

## 🌐 Deployment

Karena ini static app, bisa di-deploy ke:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

Tidak membutuhkan backend atau database.

---

## ⚠️ Catatan

- QR Code saat ini menggunakan simulasi visual (bukan QR valid)
- Data encoding menggunakan Base64 sederhana (bukan untuk data sensitif)
- Tidak ada autentikasi atau penyimpanan permanen

---

## 💡 Ide Pengembangan

1. Generate QR Code yang valid (library ringan)
2. Tambah lebih banyak tema kartu
3. Custom pesan ucapan
4. Export kualitas tinggi (HD)
5. Multi-language support
6. Progressive Web App (PWA)

---

## 📜 Lisensi

Free to use untuk keperluan personal dan pembelajaran.