const mysql = require('mysql2');

// Membuat koneksi ke database menggunakan mysql2
const dataBase = mysql.createConnection({
    host: "",     // Alamat server database
    user: "",          // Username database
    password: ".",   // Password database
    database: "",      // Nama database
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
