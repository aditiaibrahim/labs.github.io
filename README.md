# Website Login dengan Supabase

Website login sederhana yang terhubung dengan Supabase untuk autentikasi, siap di-deploy ke GitHub Pages.

## Struktur File

- `index.html` - Halaman login
- `style.css` - Styling halaman
- `script.js` - Logika login dengan Supabase
- `dashboard.html` - Halaman dashboard setelah login
- `dashboard.js` - Logika dashboard
- `setup.sql` - SQL script untuk setup tabel users

## Setup Supabase

### 1. Buat Project di Supabase

1. Kunjungi [https://supabase.com](https://supabase.com)
2. Buat akun atau login
3. Buat project baru
4. Catat **Project URL** dan **anon/public key**

### 2. Setup Database dengan SQL

**Cara 1: Menggunakan SQL Editor di Supabase**
1. Di dashboard Supabase, buka menu **SQL Editor**
2. Klik **New query**
3. Copy paste isi file `setup.sql` ke SQL Editor
4. Klik **Run** untuk menjalankan script

**Cara 2: Manual via Table Editor**
1. Di dashboard Supabase, buka menu **Table Editor**
2. Klik **New table**
3. Buat tabel dengan nama `users`
4. Tambahkan kolom-kolom berikut:

| Column Name | Type | Default Value | Description |
|-------------|------|---------------|-------------|
| id | uuid | gen_random_uuid() | Primary key, auto-generated |
| username | text | - | Username untuk login |
| password | text | - | Password (plain text untuk demo) |
| email | text | - | Email user |
| created_at | timestamp | now() | Waktu pembuatan |

5. Klik **Save** untuk membuat tabel

### 3. Insert Data User

Setelah tabel dibuat, tambahkan data user:

**Cara 1: Melalui Table Editor**
1. Klik tabel `users`
2. Klik **Insert row**
3. Isi data:
   - username: `admin`
   - password: `admin123`
   - email: `admin@example.com`
4. Klik **Save**

**Cara 2: Melalui SQL Editor**
```sql
INSERT INTO users (username, password, email)
VALUES ('admin', 'admin123', 'admin@example.com');
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

- **Username:** admin
- **Password:** admin123

Atau gunakan kredensial yang Anda buat di tabel `users`.

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

- **PENTING:** Password disimpan dalam plain text di tabel (hanya untuk demo)
- Untuk production, implementasikan hashing password (bcrypt, argon2)
- Gunakan Row Level Security (RLS) di Supabase untuk melindungi data
- Jangan expose kredensial sensitif di client-side
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