# 🎓 UNPAM KP Validator — Sistem Audit & Pengecekan Otomatis Laporan Kerja Praktek

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://username.github.io/unpam-kp-validator/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![Prodi](https://img.shields.io/badge/Prodi-Sistem_Informasi_S1-blue?style=for-the-badge)](https://unpam.ac.id)
[![Pedoman](https://img.shields.io/badge/Pedoman_KP-Edisi_2026-amber?style=for-the-badge)](#)

> **Aplikasi Web Interaktif (Single Page Application)** untuk membantu mahasiswa **Universitas Pamulang (UNPAM) Program Studi Sistem Informasi S1** mengaudit, memeriksa format penulisan, kelengkapan sub-bab, sitasi literatur, istilah asing, dan lampiran laporan Kerja Praktek (KP) secara otomatis sebelum diajukan ke Dosen Pembimbing & Penguji.

---

## 📌 Latar Belakang & Masalah
Seringkali laporan Kerja Praktek mahasiswa ditolak atau mendapatkan banyak revisi pada saat bimbingan karena:
- Format margin, jenis huruf, atau penomoran halaman Romawi / Angka tidak sesuai pedoman resmi.
- Tidak mencantumkan sub-bab wajib (seperti **2.2 Tinjauan Pustaka** atau **2.5 Kerangka Berfikir**).
- Jumlah jurnal ilmiah kurang dari 20 jurnal (wajib 5 tahun terakhir: 2021–2026) atau buku teks kurang dari 5 buku.
- Istilah asing teknologi (*online, database, real-time, website, login, security*) belum dicetak miring (*italic*).
- Masih menyisakan kata bekas copy-paste laporan lain (seperti nama PT yang tertukar atau istilah "sistem absensi" pada laporan buku tamu).
- Lampiran wajib tidak lengkap, terutama dokumen **SIUP/NIB** dan **Implementation Arrangement (IA) Siskerma**.

**UNPAM KP Validator** hadir sebagai solusi mandiri berbasis web yang cepat, transparan, dan interaktif untuk memastikan laporan Anda 100% layak sebelum diserahkan!

---

## ✨ Fitur Utama

- 📂 **Multi-Format Document Parser (.PDF & .DOCX)**:
  Membaca dan memindai teks dokumen secara langsung di browser (*100% Client-Side*, aman dan menjaga privasi data kelompok).
- 🎯 **Multi-Stage Audit (Pilih Batas BAB)**:
  Pengecekan fleksibel sesuai progres bimbingan kelompok Anda:
  1. *Baru Sampai BAB I* (Cover, Pra-Bab, Format Kertas & 9 Sub-Bab Pendahuluan)
  2. *Sampai BAB II* (Profil PT, Tinjauan Pustaka, Teori, 20 Jurnal & 5 Buku)
  3. *Sampai BAB III* (UML Diagram, UI/UX Wireframe & BlackBox Testing)
  4. *Lengkap (BAB I–IV Full + Lampiran)* (Min. 50 Halaman, Kesimpulan, Daftar Pustaka & 8 Lampiran Wajib)
- 🔍 **Kamus Istilah Asing & Italic Detector**:
  Mendeteksi kata-kata teknis bahasa Inggris dan menyediakan fitur *copy* cepat untuk pencarian massal di Word via `Ctrl + H`.
- 📲 **Export Ringkasan ke WhatsApp Kelompok**:
  Satu klik untuk menyalin seluruh daftar temuan revisi ke clipboard dengan format rapi siap kirim ke grup WhatsApp.
- 🖨️ **Cetak Lembar Audit Mandiri**:
  Tampilan cetak formal untuk dilampirkan atau dijadikan bukti pengecekan mandiri sebelum menemui dosen.
- 🧮 **Kalkulator Simulasi Nilai Sidang KP**:
  Menghitung estimasi nilai berdasarkan Pedoman BAB VI Hal. 8 (*40% Pemahaman + 20% Laporan + 40% Keaktifan*).
- 💾 **Penyimpanan Lokal (Local Storage)**:
  Status checklist revisi Anda tersimpan otomatis di browser tanpa hilang saat di-refresh.

---

## 🛠️ Teknologi yang Digunakan
- **HTML5** — Semantik & struktur SPA yang ringan.
- **Tailwind CSS (CDN)** — Tata letak responsif, modern, dan palet warna kampus profesional.
- **Vanilla JavaScript (ES6+)** — Logika interaktif murni tanpa framework rumit.
- **PDF.js** — Ekstraksi teks dokumen PDF langsung di sisi klien.
- **Mammoth.js** — Ekstraksi dokumen Microsoft Word (.docx).
- **Font Awesome 6 & Google Fonts** — Ikonografi akademik dan tipografi Plus Jakarta Sans.

---

## 🚀 Cara Menjalankan Secara Lokal

Aplikasi ini tidak memerlukan instalasi backend / server Node.js. Cukup:

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/unpam-kp-validator.git
   cd unpam-kp-validator
   ```
2. **Buka file `index.html`:**
   - Cukup klik dua kali (double click) file `index.html`, atau
   - Buka melalui browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox).

---

## 🌐 Cara Mengaktifkan GitHub Pages (Online Gratis)
Agar web ini bisa dibuka oleh teman sekelompok atau mahasiswa lain melalui link internet gratis:

1. Buka repository Anda di GitHub.
2. Klik tab **Settings** (di menu atas).
3. Di panel menu kiri, klik **Pages**.
4. Pada bagian **Build and deployment** > **Branch**:
   - Pilih branch `main` (atau `master`).
   - Pilih folder `/ (root)`.
   - Klik **Save**.
5. Tunggu sekitar 1–2 menit, link website Anda akan aktif di:
   `https://<username-github>.github.io/<nama-repo>/`

---

## 📖 Rujukan Resmi
- **Buku Pedoman Kerja Praktek Program Studi Sistem Informasi S1**, Fakultas Ilmu Komputer, Universitas Pamulang (Edisi Revisi 2026).
- Catatan dan temuan hasil bimbingan dosen pembimbing KP Universitas Pamulang.

---

## 📄 Lisensi
Didistribusikan di bawah Lisensi MIT. Silakan gunakan dan kembangkan untuk kemanfaatan seluruh mahasiswa Universitas Pamulang!
