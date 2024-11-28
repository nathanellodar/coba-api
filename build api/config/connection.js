const mysql = require('mysql2');

// Membuat koneksi ke database menggunakan mysql2
const dataBase = mysql.createConnection({
    host: "35.229.210.13",     // Alamat server database
    user: "capstone",          // Username database
    password: "capstone12.",   // Password database
    database: "capstone",      // Nama database
});

// Tes koneksi untuk memastikan berhasil
dataBase.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err.message);
    } else {
        console.log('Koneksi database berhasil!');
    }
});

// Ekspor koneksi untuk digunakan di file lain
module.exports = dataBase;
