document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    // Tinggi scroll untuk memicu perubahan warna navbar
    const scrollTrigger = 50; 
    
    // Elemen untuk Menu Mobile
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // --- 1. Logika Navbar Scroll (Fixed & Solid Color) ---
    window.addEventListener('scroll', () => {
        // Cek posisi scroll Y
        if (window.scrollY > scrollTrigger) {
            // Jika sudah melewati 50px, tambahkan kelas 'scrolled'
            navbar.classList.add('scrolled');
        } else if (!navMenu.classList.contains('active')) {
            // Jika masih di atas DAN menu tidak aktif, hapus kelas 'scrolled'
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Logika Toggle Menu Mobile ---
    menuToggle.addEventListener('click', () => {
        // Toggle class 'active' pada tombol dan menu
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Pastikan navbar selalu solid saat menu dibuka
        if (navMenu.classList.contains('active')) {
             navbar.classList.add('scrolled');
        } else if (window.scrollY < scrollTrigger) {
            // Jika menu ditutup DAN scroll masih di atas, kembali transparan
            navbar.classList.remove('scrolled');
        }
    });
    
    // --- 3. Logika Menutup Menu Setelah Klik Link ---
    // Ini penting agar menu tertutup otomatis setelah user mengklik #link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Hanya jalankan jika menu sedang aktif
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Jika menu tertutup dan posisi di Hero Section, hapus scrolled
                 if (window.scrollY < scrollTrigger) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    });
});