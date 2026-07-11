# Website Login dengan Supabase

Website login sederhana yang terhubung dengan Supabase untuk autentikasi, siap di-deploy ke GitHub Pages.

## Struktur File

- `index.html` - Halaman login
- `style.css` - Styling halaman
- `script.js` - Logika login dengan Supabase
- `dashboard.html` - Halaman dashboard setelah login
- `dashboard.js` - Logika dashboard

## Setup Supabase

### 1. Buat Project di Supabase

1. Kunjungi [https://supabase.com](https://supabase.com)
2. Buat akun atau login
3. Buat project baru
4. Catat **Project URL** dan **anon/public key**

### 2. Setup Autentikasi di Supabase

1. Di dashboard Supabase, buka menu **Authentication**
2. Buka tab **Providers**
3. Pastikan **Email** provider aktif
4. Buka tab **Users** untuk melihat daftar users

### 3. Buat User di Supabase

**Cara 1: Melalui Dashboard**
1. Buka menu **Authentication** > **Users**
2. Klik **Add user** > **Create new user**
3. Masukkan email dan password
4. Email akan otomatis menjadi format: `username@example.com`

**Cara 2: Melalui SQL Editor**
```sql
-- Contoh: Membuat user dengan email admin@example.com dan password admin123
-- (Password akan di-hash oleh Supabase)
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at)
VALUES ('admin@example.com', crypt('admin123', gen_salt('bf')), now());
```

### 4. Update Konfigurasi di script.js

Edit file `script.js` dan `dashboard.js`, ganti dengan kredensial Supabase Anda:

```javascript
const SUPABASE_URL = 'URL_PROJECT_ANDA';
const SUPABASE_ANON_KEY = 'ANON_KEY_PROJECT_ANDA';
```

## Cara Menjalankan Secara Lokal

### Menggunakan Live Server (VS Code Extension)

1. Install extension **Live Server** di VS Code
2. Klik kanan pada `index.html`
3. Pilih **Open with Live Server**

### Menggunakan Python

```bash
python -m http.server 8000
```

Buka browser dan akses: `http://localhost:8000`

### Menggunakan Node.js

```bash
npx serve .
```

## Deploy ke GitHub Pages

### 1. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Di bagian **Source**, pilih branch **main** (atau master)
4. Klik **Save**
5. Tunggu beberapa menit, website akan tersedia di: `https://username.github.io/repo-name/`

## Cara Login

Setelah setup Supabase dan deploy:

- **Username:** admin (akan menjadi `admin@example.com`)
- **Password:** admin123

Atau gunakan kredensial yang Anda buat di Supabase.

## Fitur

- Autentikasi dengan Supabase
- Form login dengan validasi
- Tampilan responsif dan modern
- Dashboard menampilkan informasi user
- Logout functionality
- Session management otomatis
- Siap di-deploy ke GitHub Pages

## Teknologi

- HTML5
- CSS3 (dengan gradient dan animasi)
- Vanilla JavaScript
- Supabase (Backend & Database)

## Catatan Keamanan

- Jangan expose kredensial database di client-side untuk production
- Gunakan Row Level Security (RLS) di Supabase
- Aktifkan email confirmation untuk user baru
- Implementasi rate limiting jika diperlukan
- Gunakan HTTPS (sudah included di GitHub Pages)

## Troubleshooting

### Login gagal meskipun kredensial benar

1. Pastikan user sudah dibuat di Supabase
2. Periksa format email (harus `username@example.com`)
3. Cek console browser untuk error messages
4. Pastikan Supabase URL dan anon key benar

### Redirect tidak bekerja

- Pastikan file `dashboard.html` dan `dashboard.js` ada di root directory
- Periksa console untuk error JavaScript

## License

MIT