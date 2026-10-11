# Buku Kas Keluarga untuk Windows

Ada dua cara memakainya. Cara 1 bisa langsung dipakai hari ini. Cara 2 menghasilkan program `.exe` sungguhan.

## Cara 1: Jalankan cepat (tanpa pasang apa pun)

1. Ekstrak (unzip) seluruh folder ini, misalnya ke Dokumen. Jangan jalankan dari dalam file ZIP.
2. Klik dua kali **Jalankan-Cepat.bat**.
3. Aplikasi terbuka sebagai jendela sendiri, memakai Microsoft Edge (sudah ada di Windows 10 dan 11) atau Chrome.
4. Jika ingin ikon di Desktop, klik kanan `Jalankan-Cepat.bat`, pilih **Kirim ke**, lalu **Desktop (buat pintasan)**.

Catatan: catatan tersimpan di profil Edge atau Chrome di komputer ini. Jangan memindahkan folder `quick`, karena penyimpanan terikat pada lokasi file. Jika folder harus dipindah, cadangkan datanya dulu (lihat bagian "Soal data").

## Cara 2: Program .exe lewat GitHub

Hasilnya satu folder aplikasi yang dijalankan dengan klik dua kali pada `Buku Kas Keluarga.exe`. Tidak perlu Edge atau Chrome, dan lokasi foldernya bebas dipindah.

1. Buka github.com dan masuk. Klik **+** di kanan atas, lalu **New repository**. Beri nama `buku-kas-windows`, pilih **Public**, lalu **Create repository**.
2. Klik tautan **uploading an existing file**.
3. Seret semua isi folder hasil ekstrak (termasuk folder `.github`) ke halaman GitHub, lalu klik **Commit changes**.
4. Buka tab **Actions** dan tunggu proses **Bangun aplikasi Windows** selesai (tanda centang hijau, sekitar 3 sampai 5 menit).
5. Buka halaman utama repository, klik **Releases**, pilih versi paling atas, lalu unduh **BukuKasKeluarga-Windows.zip**.
6. Ekstrak ZIP tersebut, lalu jalankan **Buku Kas Keluarga.exe**.
7. Jika Windows menampilkan "Windows protected your PC", klik **More info**, lalu **Run anyway**. Peringatan ini muncul karena aplikasi belum bertanda tangan digital.

Jika folder `.github` tidak ikut terunggah (tab Actions kosong): di repository klik **Add file**, lalu **Create new file**, ketik nama `.github/workflows/build-exe.yml`, tempel isi file `build-exe.yml` dari folder hasil ekstrak, lalu **Commit changes**. Setelah itu buka tab Actions dan jalankan proses tersebut.

## Soal data

- Catatan tersimpan otomatis di komputer ini.
- Di aplikasi, bagian **Simpan & unduh** punya tombol **Unduh bulan ini (CSV)**, **Unduh semua (CSV)** (bisa dibuka di Excel), dan **Cadangkan (JSON)**. Cara 1 menyimpan file ke folder Unduhan. Cara 2 menampilkan kotak untuk memilih tempat menyimpan.
- **Pulihkan dari cadangan** mengembalikan data dari file JSON, misalnya saat pindah komputer atau berpindah dari Cara 1 ke Cara 2. Cadangkan secara berkala.
