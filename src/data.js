import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  // {
  //   id: 11,
  //   gambar: Tools11,
  //   nama: "Figma",
  //   ket: "Design App",
  //   dad: "1100",
  // },
  // {
  //   id: 12,
  //   gambar: Tools12,
  //   nama: "Kotlin",
  //   ket: "Language",
  //   dad: "1200",
  // },
  // {
  //   id: 13,
  //   gambar: Tools13,
  //   nama: "Firebase",
  //   ket: "Framework",
  //   dad: "1300",
  // },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  // {
  //   id: 16,
  //   gambar: Tools16,
  //   nama: "TypeScript",
  //   ket: "Language",
  //   dad: "1600",
  // },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Sistem Informasi Perpustakaan Digital",
    subtitle: "Platform Manajemen Perpustakaan & Pembayaran Digital",
    fullDescription: "Aplikasi berbasis web yang dirancang untuk mendigitalkan sirkulasi perpustakaan kampus. Dibangun menggunakan PHP Native dan MySQL dengan standar keamanan tinggi (PDO Prepared Statements & MD5). Fitur unggulan meliputi manajemen stok buku otomatis, pengelolaan E-Book, perhitungan denda keterlambatan secara real-time, serta integrasi pembayaran denda menggunakan Payment Gateway Midtrans dan verifikasi bukti bayar manual. Antarmuka dibuat responsif menggunakan Bootstrap 5 untuk kemudahan akses Admin dan Mahasiswa.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Sigiitttt",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2, // Pastikan variabel gambar sudah diimport
    title: "Sistem Informasi Booking Pendakian Gunung Penanggungan",
    subtitle: "Platform Reservasi & Manajemen Kuota Pendakian Terdistribusi",
    fullDescription: "Sistem aplikasi terdistribusi (Client-Server) yang dirancang untuk modernisasi perizinan pendakian. Sisi Client (Frontend) dibangun menggunakan React.js dan Tailwind CSS untuk pengalaman pengguna yang interaktif dan responsif, sementara sisi Server (Backend) menggunakan Laravel REST API. Fitur unggulan meliputi pengecekan kuota real-time, pendaftaran booking online, generasi e-Tiket PDF otomatis, serta integrasi informasi cuaca & SOP. Dilengkapi dashboard Admin komprehensif untuk verifikasi pembayaran, manajemen operasional (Check-in/Out), dan sistem blacklist pendaki.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sigiitttt/web-sister.git",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3, // Pastikan variabel gambar sudah diimport
    title: "TIX.ID Web - Native Version",
    subtitle: "Platform Simulasi Pemesanan Tiket Bioskop Berbasis Web",
    fullDescription: "Website simulasi pemesanan tiket bioskop yang dibuat menggunakan HTML, CSS, dan JavaScript murni (tanpa framework). Proyek ini mengadaptasi fitur utama aplikasi TIX.ID seperti pemesanan tiket film, pemilihan kursi, pemesanan makanan, pembayaran, hingga riwayat transaksi. Semua data tersimpan secara lokal menggunakan LocalStorage. Cocok digunakan untuk pembelajaran, tugas kuliah, atau demonstrasi UI/UX aplikasi ticketing. Struktur proyek modular dan responsif dengan halaman admin untuk mengelola data film dan makanan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Sigiitttt/proyek-akhir-dpw.git",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4, // Pastikan variabel gambar sudah diimport
    title: "Al-Qur'an Web App - Modern & Interactive",
    subtitle: "Aplikasi Baca & Audio Al-Qur'an Berbasis React + TypeScript",
    fullDescription: "Aplikasi web Al-Qur'an modern yang dirancang untuk pengalaman membaca dan mendengarkan Al-Qur'an secara nyaman, interaktif, dan responsif. Dibangun menggunakan React dengan TypeScript untuk performa optimal dan maintainability yang lebih baik. Data diambil real-time dari API EQuran.id, menampilkan 114 Surah lengkap dengan ayat, transliterasi, terjemahan, serta fitur audio player terintegrasi. Mengadopsi pola desain Container/Presentational untuk pemisahan yang jelas antara logika dan UI, serta memanfaatkan Tailwind CSS untuk tampilan clean dan mobile-friendly. Cocok untuk pembelajaran, ibadah digital, dan showcase kemampuan frontend modern.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sigiitttt/Al-Quran-Digital.git",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5, // Pastikan variabel gambar sudah diimport
    title: "Voice Command Detection - Buka & Tutup",
    subtitle: "Sistem Deteksi Perintah Suara Berbasis Machine Learning",
    fullDescription: "Proyek klasifikasi suara sederhana yang dirancang untuk mendeteksi dua perintah suara utama: 'buka' dan 'tutup', bersifat speaker-dependent (hanya mengenali suara pemilik dataset). Sistem dibangun menggunakan Python dan Streamlit sebagai aplikasi web interaktif. Fitur mencakup ekstraksi fitur audio berbasis spectral, temporal, dan statistik seperti MFCC, Mel Spectrogram, ZCR, serta Random Forest untuk model klasifikasi. Model yang telah dilatih disimpan dalam format .pkl dan dapat digunakan untuk prediksi real-time melalui fitur upload audio atau rekam suara langsung di browser.",

    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Sigiitttt",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6, // Pastikan variabel gambar sudah diimport
    title: "MatKids - Educational Math Game",
    subtitle: "Game Edukasi Matematika untuk Anak Berbasis Unity",
    fullDescription: "MatKids adalah game edukasi interaktif yang dikembangkan sebagai Proyek PPL dengan tujuan melatih kemampuan dasar matematika pada anak-anak. Dibangun menggunakan Unity 2022 LTS untuk menghadirkan gameplay yang menyenangkan melalui kombinasi visual menarik, animasi, serta tantangan soal berhitung sesuai level. Game dapat dijalankan langsung melalui Unity Editor dan tersedia opsi build untuk Windows. Cocok sebagai media belajar yang kreatif dan mendukung peningkatan literasi numerik bagi pelajar usia dini.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sigiitttt",
    dad: "600",
  },
];
