# 🕌 Ceklis Sholat - Prayer Tracker MVP

Aplikasi web sederhana untuk tracking sholat harian dengan sistem enable/disable otomatis berdasarkan waktu sholat.

## ✨ Features

### Core Features
- ✅ **Daily Prayer Checklist** - Track 5 waktu sholat (Subuh, Dzuhur, Ashar, Maghrib, Isya)
- ✅ **Jamaah Toggle** - Tandai sholat yang dilakukan berjamaah
- ✅ **Progress Tracker** - Visual progress ring dengan persentase harian
- ✅ **Auto Reset** - Data otomatis reset setiap hari baru (jam 04:30)
- ✅ **Smart Enable/Disable** - Ceklis otomatis disable di luar waktu sholat
- ✅ **Dark Mode** - Toggle light/dark theme dengan localStorage persistence
- ✅ **Friday Detection** - Label "Dzuhur / Jumat" otomatis di hari Jumat

### Smart Time Windows
Setiap waktu sholat punya enable window sendiri:
- **Subuh**: 04:30 - 06:00
- **Dzuhur**: 11:00 - 15:00
- **Ashar**: 15:00 - 18:00
- **Maghrib**: 18:00 - 19:00
- **Isya**: 19:00 - 04:30 (cross midnight)

### Dynamic Status Labels
- 🟢 **"Selesai"** - Sudah diceklis
- 🟡 **"Belum"** - Masih dalam waktu enable, belum diceklis
- 🔴 **"Ketinggalan"** - Waktu sudah lewat, tidak diceklis
- ⚪ **"Belum Waktunya"** - Belum masuk waktu sholat

## 🚀 Quick Start

### Installation
1. Clone atau download 3 file:
   - `index.html`
   - `style.css`
   - `script.js`

2. Pastikan ketiga file berada di folder yang sama

3. Buka `index.html` di browser

### Requirements
- Browser modern (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- LocalStorage enabled

## 📂 File Structure

```
ceklis-sholat/
├── index.html    # HTML structure
├── style.css     # All styling & visual states
└── script.js     # Core logic & time calculations
```

## 🧠 Logic Overview

### 1. Islamic Day Calculation
Hari dimulai di **jam 04:30**, bukan 00:00 (midnight).

**Contoh:**
- Jam 03:00 Jumat = masih "Kamis" (masih bisa ceklis Isya Kamis)
- Jam 04:30 Jumat = hari baru dimulai, data auto reset

### 2. Enable/Disable Logic
```javascript
if (prayer.done) {
    // Tetap bisa toggle walaupun waktu sudah lewat
    enabled = true;
} else {
    // Cek apakah dalam enable window
    enabled = (currentTime >= startTime && currentTime <= endTime);
}
```

### 3. Cross-Midnight Handling (Isya)
Isya enable dari 19:00 sampai 04:30 besoknya menggunakan OR logic:
```javascript
enabled = (currentMinutes >= 1140) || (currentMinutes <= 270)
// 1140 = 19:00 dalam menit
// 270 = 04:30 dalam menit
```

### 4. Auto Reset System
```javascript
function getCurrentIslamicDay() {
    const now = new Date();
    if (now.hours < 4 || (now.hours === 4 && now.minutes < 30)) {
        // Sebelum 04:30 = masih kemarin
        return yesterday;
    }
    return today;
}
```

## 🎨 UI States

### Prayer Card States
1. **Active (Enabled)**
   - Button: colorful, clickable
   - Status: "Belum" (yellow)

2. **Disabled (Belum Waktunya)**
   - Button: gray, non-clickable
   - Opacity: 50%
   - Status: "Belum Waktunya" (gray)

3. **Disabled (Ketinggalan)**
   - Button: gray, non-clickable
   - Opacity: 50%
   - Status: "Ketinggalan" (red)

4. **Done (Completed)**
   - Button: blue with checkmark
   - Border: left blue accent
   - Status: "Selesai" (blue)
   - **Always enabled** untuk toggle

## 💾 Data Storage

### LocalStorage Structure
```javascript
{
    "date": "20/3/2026",  // Islamic day format
    "data": {
        "Subuh": { "done": true, "jamaah": true },
        "Dzuhur": { "done": true, "jamaah": false },
        "Ashar": { "done": false, "jamaah": false },
        "Maghrib": { "done": false, "jamaah": false },
        "Isya": { "done": false, "jamaah": false }
    }
}
```

### Storage Key
- `sholat_tracker_v1` - Main data storage
- `theme` - Dark mode preference

## 🔧 Customization

### Adjust Prayer Times
Edit `prayerSchedule` object di `script.js`:
```javascript
const prayerSchedule = {
    'Subuh': { start: '04:30', end: '06:00' },
    'Dzuhur': { start: '11:00', end: '15:00' },
    // ... adjust sesuai lokasi
};
```

### Change Status Messages
Edit fungsi `updateProgress()` di `script.js`:
```javascript
if (percent === 100) statusLabel.innerText = "Custom message!";
```

### Modify Colors
Edit CSS classes di `style.css`:
```css
.status-belum {
    color: rgb(234 179 8); /* yellow-500 */
}
```

## 📱 Responsive Design

- Mobile-first design
- Max-width: 448px (md breakpoint)
- Touch-optimized tap targets
- Glass morphism cards
- Fixed bottom navigation

## 🌙 Dark Mode

- Auto-detect system preference
- Manual toggle dengan localStorage persistence
- Smooth transitions (0.3s)
- Icon changes: moon ↔ sun

## 🐛 Known Issues / Limitations

1. **Hardcoded Prayer Times**
   - Waktu sholat belum dynamic berdasarkan lokasi
   - Perlu manual adjustment per wilayah

2. **No Historical Data**
   - Data hanya tersimpan untuk hari ini
   - Belum ada fitur statistik/history

3. **No Notifications**
   - Belum ada reminder/notification system

## 🚀 Future Features (Roadmap)

- [ ] Statistik bulanan/tahunan
- [ ] Streak counter (berapa hari berturut-turut lengkap)
- [ ] API integrasi untuk waktu sholat by location
- [ ] Push notifications / reminders
- [ ] Export data (CSV/JSON)
- [ ] Gamifikasi (badges, achievements)
- [ ] Profil & settings page

## 🤝 Contributing

Feel free to fork, modify, atau suggest improvements!

## 📄 License

Free to use for personal/educational purposes.

## 👨‍💻 Developer

Built with ❤️ by an Indonesian Muslim Developer