# IndoStream — GitHub Pages + Supabase

Frontend streaming responsif dengan gaya gelap yang mengikuti komposisi screenshot referensi: navbar sticky, menu kategori/genre, menu sort, kartu video 16:9 dua kolom, pagination, dan footer. Backend menggunakan Supabase Auth, PostgreSQL, Storage, dan Row Level Security.

## 1. Siapkan Supabase
1. Buat project di https://supabase.com/.
2. Buka **SQL Editor**, jalankan seluruh isi `supabase/schema.sql`.
3. Buka **Project Settings → API**, salin Project URL dan `anon` public key.
4. Edit `app.js`: isi `SUPABASE_URL` dan `SUPABASE_ANON_KEY`.
5. Jangan pernah memasukkan `service_role` key ke frontend atau GitHub.
6. Di Authentication → URL Configuration, tambahkan URL GitHub Pages sebagai Site URL dan Redirect URL, misalnya `https://USERNAME.github.io/REPO/`.
7. Untuk akun admin: daftar melalui situs, lalu jalankan perintah UPDATE admin di bagian akhir SQL dengan email akun sendiri.

## 2. Deploy ke GitHub Pages
1. Buat repository GitHub, misalnya `indostream`.
2. Upload `index.html`, `styles.css`, `app.js`, folder `supabase/`, dan README.
3. Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Tunggu deployment selesai. Buka URL Pages.

Website ini memakai query-string routing (`?page=watch&id=...`) sehingga cocok untuk GitHub Pages tanpa konfigurasi rewrite.

## 3. Alur penggunaan
- Pengunjung dapat menonton video berstatus `published`.
- Registrasi/login memakai Supabase Auth. Email confirmation dapat diaktifkan di Supabase Auth.
- Pengguna terautentikasi dapat memberi like, komentar, dan mengunggah video.
- Upload dibatasi 500 MB untuk MP4/WebM; thumbnail 5 MB. File disimpan di Storage dan metadata masuk tabel `videos` dengan status `pending`.
- Admin yang role-nya `admin` dapat membuka `?page=admin` untuk menerbitkan atau menghapus video.
- Laporan konten disimpan di tabel `reports`.

## 4. Batasan penting sebelum produksi
- GitHub Pages hanya hosting frontend statis. Supabase adalah backend; untuk moderasi tingkat lanjut, transcoding, streaming adaptif HLS, signed URLs, email kontak, anti-spam, dan pemeriksaan hak cipta otomatis, tambahkan Edge Functions / layanan video khusus.
- `record_video_view` mencatat pemuatan halaman detail, bukan validasi durasi tonton. Untuk hitungan view tahan manipulasi, gunakan Edge Function dengan rate-limit, deduplikasi sesi, dan validasi playback.
- Contoh ini menggunakan public Storage URL agar sederhana. Untuk konten privat/berbayar, gunakan bucket privat dan signed URL melalui backend.
- Browser native HTML5 menyediakan kontrol play/pause, volume, progress, speed (tergantung browser), fullscreen dan PiP (jika didukung). Pemilihan kualitas memerlukan beberapa rendition/HLS dan belum otomatis dibuat oleh GitHub Pages.
- Profil, like, komentar, riwayat tonton, laporan, dan moderasi memakai RLS. Kebijakan database tetap harus diuji sebelum produksi.
- Tambahkan verifikasi umur/consent, prosedur takedown, moderasi manusia, bukti hak distribusi, dan ketentuan hukum wilayah operasi sebelum menerima konten sensitif. Jangan mengunggah atau mendistribusikan materi tanpa izin.

## 5. Kustomisasi
- Ganti nama/logo di `index.html`.
- Atur warna, breakpoint, dan grid di `styles.css`.
- Query, halaman, auth, upload, player, dan interaksi berada di `app.js`.
- Skema database dan kebijakan RLS berada di `supabase/schema.sql`.
