[README.MD](https://github.com/user-attachments/files/22631625/README.MD)
# Profil Feed Tailwind

Proyek ini adalah implementasi halaman profil sederhana menyerupai Instagram feed menggunakan **Tailwind CSS**.

## Struktur Halaman
1. **Header / Navbar**  
   Menampilkan logo dan menu navigasi.  
2. **Header Profil**  
   Foto profil, nama, bio, serta tombol aksi (Follow, Message, Settings).  
3. **Statistik**  
   Jumlah Post, Followers, Following.  
4. **Feed Foto**  
   Minimal 12 gambar dalam grid responsif.  
5. **Footer**  
   Informasi hak cipta.

## Responsif Grid
- Mobile (default): `grid-cols-1`
- Tablet (sm–md): `grid-cols-2` → `grid-cols-3`
- Desktop (lg): `grid-cols-4`

## Fitur Tailwind yang Digunakan
- **Responsive utility**: `sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- **Responsive order**: `order-1 md:order-2`
- **Grid nesting**: grid dalam card feed (`aspect-square` untuk foto kotak)
- **Utilities**: spacing (`p-4`, `m-4`), alignment (`flex`, `justify-center`), rounded, shadow.

## Cara Menjalankan
1. Pastikan file `index.html` tersedia.  
2. Jalankan langsung di browser (tidak memerlukan server khusus).  
3. Tailwind di-load melalui **CDN**:
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
