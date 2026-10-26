# 🎓 UNPAM KP Validator by ncexs — Sistem Audit & Pengecekan Otomatis Laporan Kerja Praktek

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://ncexs.github.io/unpam-kp-validator/)
[![Author: ncexs](https://img.shields.io/badge/Developer-ncexs-f59e0b?style=for-the-badge&logo=github)](https://github.com/ncexs)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![Prodi](https://img.shields.io/badge/Prodi-Sistem_Informasi_S1-blue?style=for-the-badge)](https://unpam.ac.id)
[![Pedoman](https://img.shields.io/badge/Pedoman-KP_UNPAM-amber?style=for-the-badge)](#)

> **Aplikasi Web Interaktif (Single Page Application)** yang dikembangkan oleh **ncexs** untuk membantu mahasiswa **Universitas Pamulang (UNPAM) Program Studi Sistem Informasi S1** mengaudit, memeriksa format penulisan, kelengkapan sub-bab, sitasi literatur, istilah asing, dan lampiran laporan Kerja Praktek (KP) secara otomatis sebelum diajukan ke Dosen Pembimbing & Penguji.

---

## 📌 Latar Belakang & Masalah
Seringkali laporan Kerja Praktek mahasiswa ditolak atau mendapatkan banyak revisi pada saat bimbingan karena:
- Format margin, jenis huruf, atau penomoran halaman Romawi / Angka tidak sesuai pedoman resmi.
- Tidak mencantumkan sub-bab wajib (seperti **2.2 Tinjauan Pustaka** atau **2.5 Kerangka Berfikir**).
- Jumlah jurnal ilmiah kurang dari 20 jurnal (wajib 5 tahun terakhir: 2021–2026) atau buku teks kurang dari 5 buku.
- Istilah asing teknologi (*online, database, real-time, website, login, security*) belum dicetak miring (*italic*).
- Masih menyisakan kata bekas copy-paste laporan lain (seperti nama PT yang tertukar atau istilah "sistem absensi" pada laporan buku tamu).
- Lampiran wajib tidak lengkap, terutama dokumen **SIUP/NIB** dan **Implementation Arrangement (IA) Siskerma**.

**UNPAM KP Validator by ncexs** hadir sebagai solusi mandiri berbasis web yang cepat, transparan, dan interaktif untuk memastikan laporan Anda 100% layak sebelum diserahkan!

---

## ✨ Fitur Unggulan

- 🎯 **Hanya Menampilkan Temuan yang Perlu Diperbaiki**:
  Hasil audit hanya memuat poin yang **masih salah atau kurang**, lengkap dengan **lokasi temuan** (bab/sub-bab, atau nomor halaman bila terdeteksi) dan **cara memperbaikinya** sesuai Pedoman KP. Poin yang sudah benar tidak ditampilkan.
- 📂 **Multi-Format Document Parser (.PDF & .DOCX)**:
  Membaca dan memindai teks dokumen secara langsung di browser (*100% Client-Side*, aman dan menjaga privasi data kelompok).
- 🎯 **Multi-Stage Audit (Pilih Batas BAB)**:
  Pengecekan fleksibel sesuai progres bimbingan kelompok Anda:
  1. *Baru Sampai BAB I* (Cover, Pra-Bab, Format Kertas & 9 Sub-Bab Pendahuluan)
  2. *Sampai BAB II* (Profil PT, Tinjauan Pustaka, Teori, 20 Jurnal & 5 Buku)
  3. *Sampai BAB III* (UML Diagram, UI/UX Wireframe & BlackBox Testing)
  4. *Lengkap (BAB I–IV Full + Lampiran)* (Min. 50 Halaman, Kesimpulan, Daftar Pustaka & 8 Lampiran Wajib)
- 🔍 **Deteksi Istilah Asing Dinamis & Universal (Dengan Info Nomor Halaman)**:
  Mendeteksi kata-kata teknis bahasa Inggris di berbagai ranah TI (Web, Mobile, AI/Machine Learning, IoT, Cyber Security, Jaringan, Database, UI/UX) yang masih tegak, lengkap dengan info nomor halaman lokasi temuan (`Hal. X`) dan tombol *salin* cepat per kata untuk pencarian massal di Word via `Ctrl + H`.
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
- **PDF.js (Blob Worker Safe)** — Ekstraksi teks dokumen PDF langsung di sisi klien bebas CORS.
- **Mammoth.js** — Ekstraksi dokumen Microsoft Word (.docx).
- **Font Awesome 6 & Google Fonts** — Ikonografi akademik dan tipografi Plus Jakarta Sans.

---

## 🌐 Demo Online
Aplikasi ini dapat diakses secara gratis di:  
🔗 **[https://ncexs.github.io/unpam-kp-validator/](https://ncexs.github.io/unpam-kp-validator/)**

---

## 👨‍💻 Pengembang
Dikembangkan dengan penuh dedikasi oleh **[ncexs](https://github.com/ncexs)** untuk seluruh rekan mahasiswa Program Studi Sistem Informasi Universitas Pamulang.

---

## 📄 Lisensi
Didistribusikan di bawah Lisensi MIT. Silakan gunakan dan kembangkan untuk kemanfaatan seluruh civitas akademika Universitas Pamulang!
