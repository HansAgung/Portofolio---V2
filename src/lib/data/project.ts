export interface Project {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  projectType: string;
  languages: string[];
  duration: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Aplikasi Notes',
    slug: 'aplikasi-notes',
    image: '/projects/AplikasiNotes.jpg',
    subtitle: 'Catat ide dan aktivitasmu dengan mudah dalam aplikasi notes yang sederhana dan cepat.',
    description: 'Aplikasi ini merupakan notes sederhana yang dirancang untuk membantu pengguna mencatat berbagai ide, aktivitas, dan tugas harian secara efisien. Dengan fitur-fitur yang praktis, pengguna dapat dengan mudah mengatur dan mengelompokkan catatan sesuai kebutuhan pribadi maupun pekerjaan. Antarmuka yang intuitif memberikan pengalaman pengguna yang menyenangkan, sehingga memudahkan siapa saja dalam mengoperasikan aplikasi tanpa memerlukan waktu belajar yang lama. Selain itu, desain yang responsif memastikan aplikasi dapat digunakan dengan optimal di berbagai perangkat, baik smartphone maupun tablet.',
    difficulty: 'Beginner',
    projectType: 'Mobile App',
    languages: ['sqlite.png','java_icon.jpg'],
    duration: '2 bulan',
    link: 'https://github.com/HanzSitinjak/DoCa_App.git',
  },
  {
    title: 'Math Gasing',
    slug: 'math-gasing',
    image: '/projects/MathGasing.jpg',
    subtitle: 'Aplikasi edukasi matematika berbasis metode GASING yang interaktif untuk anak SD.',
    description: 'Aplikasi ini merupakan media edukasi matematika yang dirancang khusus untuk anak-anak Sekolah Dasar dengan pendekatan metode GASING (Gampang, Asyik, dan Menyenangkan) yang terbukti efektif. Melalui metode ini, konsep-konsep matematika disampaikan secara bertahap dan menyenangkan sehingga anak lebih mudah memahami materi. Fitur interaktif di dalam aplikasi memungkinkan anak belajar sambil bermain, meningkatkan keterlibatan dan minat belajar mereka. Dengan tampilan yang ramah anak dan konten yang disesuaikan dengan tingkat kemampuan, aplikasi ini menjadi solusi belajar matematika yang menarik dan efektif.',
    difficulty: 'Intermediate',
    projectType: 'Mobile App',
    languages: ['flutter.png', 'dart_icon.png', 'Firebase_icon.png'],
    duration: '3 bulan',
    link: 'https://github.com/HanzSitinjak/Project_MathGasing.git',
  },
  {
    title: 'Palmarum HKBP',
    slug: 'palmarum-hkbp',
    image: '/projects/PalmarumHKBP.jpg',
    subtitle: 'Website kegiatan organisasi gereja HKBP Palmarum dengan fitur berita dan jadwal ibadah.',
    description: 'Website ini merupakan platform informasi resmi untuk kegiatan organisasi gereja HKBP Palmarum yang dirancang untuk menjangkau jemaat secara lebih luas dan efisien. Melalui website ini, jemaat dapat mengakses berbagai informasi terkini seputar kegiatan gereja, termasuk berita-berita penting dan pengumuman resmi dari pengurus. Salah satu fitur utama yang disediakan adalah jadwal ibadah, yang memudahkan jemaat untuk mengetahui waktu dan tempat pelaksanaan ibadah mingguan maupun acara khusus lainnya. Dengan tampilan yang sederhana dan mudah digunakan, website ini menjadi sarana komunikasi yang efektif antara gereja dan seluruh jemaatnya.',
    difficulty: 'Intermediate',
    projectType: 'Website',
    languages: ['Next_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp'],
    duration: '1 bulan',
    link: '',
  },
  {
    title: 'Project ALU',
    slug: 'project-alu',
    image: '/projects/ProjekALU.jpg',
    subtitle: 'Sistem logika aritmatika digital yang mensimulasikan kinerja ALU dalam komputer.',
    description: 'Sistem ini merupakan sebuah logika aritmatika digital yang dirancang untuk mensimulasikan kinerja Arithmetic Logic Unit (ALU) pada komputer secara sederhana dan edukatif. Melalui sistem ini, pengguna dapat memahami bagaimana operasi-operasi aritmatika dan logika, seperti penjumlahan, pengurangan, AND, OR, dan lainnya, diproses dalam unit komputasi digital. Simulasi ini tidak hanya memperlihatkan hasil akhir dari suatu operasi, tetapi juga menggambarkan proses internal yang terjadi di dalam ALU secara visual. Dengan demikian, sistem ini sangat bermanfaat sebagai alat bantu pembelajaran dalam bidang arsitektur komputer dan logika digital.',
    difficulty: 'Advanced',
    projectType: 'System Simulation',
    languages: ['React_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'laravel_icon.png'],
    duration: '4 bulan',
    link: '',
  },
  {
    title: 'React Projects',
    slug: 'react-projects',
    image: '/projects/ReactProjek.jpg',
    subtitle: 'Kumpulan project modern dengan React, Tailwind, dan integrasi API.',
    description: 'Kumpulan project ini merupakan rangkaian aplikasi modern yang dibangun menggunakan React sebagai library utama untuk antarmuka pengguna. Setiap project dirancang dengan gaya yang bersih dan responsif berkat penggunaan Tailwind CSS, yang mempercepat proses pengembangan antarmuka secara efisien. Selain tampilan yang menarik, seluruh project juga dilengkapi dengan integrasi API untuk menghadirkan data dinamis dan pengalaman pengguna yang interaktif. Koleksi ini sangat cocok bagi developer yang ingin mempelajari praktik terbaik dalam membangun aplikasi web modern dengan teknologi front-end terkini.',
    difficulty: 'Intermediate',
    projectType: 'Website',
    languages: ['React_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'laravel_icon.png'],
    duration: '2 bulan',
    link: '',
  },
  {
    title: 'Web Math Gasing',
    slug: 'web-math-gasing',
    image: '/projects/WebMathGasing.jpg',
    subtitle: 'Dashboard admin untuk mengelola konten edukatif Math Gasing.',
    description: 'Dashboard ini merupakan platform admin yang dirancang khusus untuk mengelola berbagai konten edukatif pada aplikasi Math Gasing secara terstruktur dan efisien. Melalui dashboard ini, admin dapat menambahkan, mengedit, atau menghapus materi pembelajaran seperti video, soal, dan modul berdasarkan jenjang kelas atau topik tertentu. Antarmuka yang intuitif memudahkan pengelolaan konten tanpa memerlukan keahlian teknis tinggi, sehingga mempercepat proses pembaruan materi secara berkala. Dengan adanya sistem ini, pengelolaan konten Math Gasing menjadi lebih terorganisir dan mendukung pengalaman belajar yang optimal bagi siswa.',
    difficulty: 'Intermediate',
    projectType: 'Website Admin Panel',
    languages: ['Next_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'Node'],
    duration: '2 bulan',
    link: '',
  },
  {
    title: 'Management Item App',
    slug: 'management-item-app',
    image: '/projects/itemManagement.png',
    subtitle: 'Dashboard admin untuk mengelola konten edukatif Math Gasing.',
    description: 'Dashboard ini merupakan platform admin yang dirancang khusus untuk mengelola berbagai konten edukatif pada aplikasi Math Gasing secara terstruktur dan efisien. Melalui dashboard ini, admin dapat menambahkan, mengedit, atau menghapus materi pembelajaran seperti video, soal, dan modul berdasarkan jenjang kelas atau topik tertentu. Antarmuka yang intuitif memudahkan pengelolaan konten tanpa memerlukan keahlian teknis tinggi, sehingga mempercepat proses pembaruan materi secara berkala. Dengan adanya sistem ini, pengelolaan konten Math Gasing menjadi lebih terorganisir dan mendukung pengalaman belajar yang optimal bagi siswa.',
    difficulty: 'Intermediate',
    projectType: 'Website Admin Panel',
    languages: ['Next_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'Node.js'],
    duration: '2 bulan',
    link: '',
  },
  {
    title: 'Weather Report App',
    slug: 'weather-report-app',
    image: '/projects/weatherApp.png',
    subtitle: 'Dashboard admin untuk mengelola konten edukatif Math Gasing.',
    description: 'Dashboard ini merupakan platform admin yang dirancang khusus untuk mengelola berbagai konten edukatif pada aplikasi Math Gasing secara terstruktur dan efisien. Melalui dashboard ini, admin dapat menambahkan, mengedit, atau menghapus materi pembelajaran seperti video, soal, dan modul berdasarkan jenjang kelas atau topik tertentu. Antarmuka yang intuitif memudahkan pengelolaan konten tanpa memerlukan keahlian teknis tinggi, sehingga mempercepat proses pembaruan materi secara berkala. Dengan adanya sistem ini, pengelolaan konten Math Gasing menjadi lebih terorganisir dan mendukung pengalaman belajar yang optimal bagi siswa.',
    difficulty: 'Intermediate',
    projectType: 'Website Admin Panel',
    languages: ['Next_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'Node_icon.png'],
    duration: '2 bulan',
    link: '',
  },
  {
    title: 'Reengineering Mathplay App',
    slug: 'reengineering-mathplay-app',
    image: '/projects/ReengineringMathPlay.png',
    subtitle: 'Dashboard admin untuk mengelola konten edukatif Math Gasing.',
    description: 'Dashboard ini merupakan platform admin yang dirancang khusus untuk mengelola berbagai konten edukatif pada aplikasi Math Gasing secara terstruktur dan efisien. Melalui dashboard ini, admin dapat menambahkan, mengedit, atau menghapus materi pembelajaran seperti video, soal, dan modul berdasarkan jenjang kelas atau topik tertentu. Antarmuka yang intuitif memudahkan pengelolaan konten tanpa memerlukan keahlian teknis tinggi, sehingga mempercepat proses pembaruan materi secara berkala. Dengan adanya sistem ini, pengelolaan konten Math Gasing menjadi lebih terorganisir dan mendukung pengalaman belajar yang optimal bagi siswa.',
    difficulty: 'Intermediate',
    projectType: 'Website Admin Panel',
    languages: ['Next_icon.png', 'TypeScript_icon.png', 'Tailwind_icon.webp', 'node_icon.png'],
    duration: '2 bulan',
    link: '',
  },
];
