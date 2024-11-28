-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306:3306
-- Generation Time: Nov 28, 2024 at 12:39 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `detailtutorial`
--
CREATE DATABASE capstone;
use capstone;

CREATE TABLE `detailtutorial` (
  `idTutorial` int(11) DEFAULT NULL,
  `alat` text DEFAULT NULL,
  `bahan` text DEFAULT NULL,
  `langkahKerja` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `tipeSampah` varchar(255) DEFAULT NULL,
  `jenisSampah` varchar(255) DEFAULT NULL,
  `totalView` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailtutorial`
--

INSERT INTO `detailtutorial` (`idTutorial`, `alat`, `bahan`, `langkahKerja`, `gambar`, `tipeSampah`, `jenisSampah`, `totalView`) VALUES
(3, 'Botol 2 liter-Pewarna atau cat-Pisau', NULL, 'Potong sepertiga bagian bawah botol.-Pada salah satu sisi, potong botol menjadi dua bentuk segitiga sehingga terlihat seperti telinga.-Cat botol dengan warna yang diinginkan.-Gambar wajah hewan pada botol, misalnya wajah kucing atau anjing.-Isi botol dengan tanah dan tanaman yang ingin ditanam.', 'https://storage.googleapis.com/foto-tutorial/Pot%20Tanaman%20dari%20Botol%20Plastik.jpg', 'Botol', 'Plastik', 0),
(4, 'Botol bekas seragam.-Cutter atau gunting.-Lem khusus plastik.-Sendok plastik.-Cat warna.-Kuas.', NULL, 'Potong terlebih dahulu botol menjadi dua bagian, bagian tutup botol sebaiknya dipotong juga.-Potong bagian ujung sendok plastik yang cekung.-Gunakan potongan ujung sendok plastik untuk mencetak potongan dari botol plastik yang sudah dipotong menjadi dua bagian.-Cetak sebanyak mungkin sampai sekiranya cukup untuk dibuat hiasan lampu.-Mulailah merangkai potongan cetakan tersebut dengan rapi tanpa diberi lem.-Jika rangkaian sudah benar dan sesuai keinginan, mulailah memberinya lem sedikit demi sedikit dan rangkai satu sama lain sampai membentuk seperti lampu hias.-Agar tampilan lebih menarik dan berwarna gunakan kuas untuk mewarnai kerajinan dari sampah plastik tersebut menggunakan cat warna yang telah ditetapkan.', 'https://storage.googleapis.com/foto-tutorial/Kerajinan%20Lampu%20Hias.jpg', 'Botol', 'Plastik', 0),
(5, 'Tutup botol-kanvas atau karton-Lem -Cat', NULL, 'Cari gambar yang ingin dibuat sebagai dekorasi.-Cat tutup botol sesuai gambar yang diinginkan.-Buat gambar di atas kanvas atau karton menggunakan pensil.-Letakkan tutup botol yang telah dicat di atas karton menggunakan lem.-Jika sudah selesai, gantungkan seni mozaik pada dinding.', 'https://storage.googleapis.com/foto-tutorial/Seni%20Mozaik.jpg', 'Botol', 'Plastik', 0),
(7, 'Kantong plastik-Gunting-Jarum dan benang', NULL, 'Kumpulkan kantong plastik bekas sebanyak mungkin dan pilah sesuai warnanya.-Pikirkan pola tikar yang akan dibuat.-Potong kantong plastik bekas menjadi strip panjang dengan lebar 5 cm.-Buat simpul dan kepanglah strip dengan warna yang sama.-Letakkan strip kantong plastik bekas yang telah dikepang dalam pola spiral.-Gunakan jarum dan benang untuk menjahit anyaman kantong plastik dalam bentuk spiral.', 'https://storage.googleapis.com/foto-tutorial/Tikar%20Dari%20Kantong%20Plastik.jpeg', 'Kantong/kemasan', 'Plastik', 0),
(8, 'Botol plastik-Cutter atau gunting-Lem tembak-Besi kecil panjang-Tatakan dari kayu-Lilin-Korek api', NULL, 'Potong terlebih dahulu bagian bawah botol dengan ukuran yang sama sekitar 3-4 botol saja.-Panaskan besi kecil panjang yang dijadikan sebagai penyangga menggunakan lilin.-Jika sudah cukup panas, lubangi bagian tengah potongan bawah botol tersebut seluruhnya.-Susunlah ke besi kecil panjang tersebut dengan jarak sesuai keinginan.-Agar lebih kokoh, berilah lem tembak.-Setelah tersusun sempurna, tempatkan di tatakan dari kayu agar dapat berdiri sempurna.', 'https://storage.googleapis.com/foto-tutorial/Kerajinan%20Tempat%20Aksesoris.jpg', 'Botol', 'Plastik', 0),
(9, '2 sampai 4 kaleng bekas yang sudah bersih (Anda dapat menggunakan ukuran apa saja)-Sebuah palu-Bermacam-macam ', NULL, 'Bersihkan kaleng bekas dari label dan cuci hingga bersih.-Agar saat dilubangi dengan paku tidak mudah penyok dan menekuk, sebaiknya isi kaleng bekas dengan air es yang sudah membeku. Step ini bisa dilakukan bisa tidak.-Tentukan desain lubang-lubang pada kaleng. Kamu dapat menggambar pola sebelumnya di atas selembar kertas grafik dan menempelkannya ke kaleng sebagai panduan.-Lubangi kaleng sesuai dengan pola yang sudah ditentukan. menggunakan palu dan paku.-Jika kamu melakukan step nomer 2, dengan mengisi kaleng dengan air es batu, kamu bisa menggunakan handuk sebagai untuk memegangi kaleng, agar tangan tidak kedinginan. jika sudah, bilas kaleng dengan air panas agar es batu pada kaleng mencair.-Tambahkan beberapa warna, kamu bisa memanfaatkan pilox, maupin spidol permanen warna warni.-Letakkan lampu redup atau lilin, dan tutup dengan kaleng. nikmati pola kerlip menyenangkan yang dibuat oleh lentera buatan ala kamu. dan yang terpenting Pastikan untuk meletakkan lentera di permukaan yang aman karena lilin bisa menjadi panas.', 'https://storage.googleapis.com/foto-tutorial/Lampu%20Tidur%20dari%20Kaleng%20Bekas.jpg', 'Kaleng', 'Besi/aluminium', 0),
(10, 'Alumunium Foil (kertas alumunium, jika ada yang memiliki warna berbeda).-Kardus bekas.-Kapas.-Kawat besi ukuran 20 cm.-Benang.-Lakban / selotip.-Gunting.-Pulpem.-Sendok.-Gelas (bahan apa saja, yang penting bentuk nya gelas).', NULL, 'Buat pola bunga pada kardus..-Lalu gunting pola nya.-Buat pola yang sama pada aluminum.-Gunting pola bunga.-Membuat drat pada bunga.-Letakan kertas alumunium di atas gelas. Lalu gulung dengan benang, gulung benang pada gelas dan beri jarak 0,5 cm kurang lebih.-Lalu geser kertas dengan sendok sambil ditekan.-Buka atau lebarkan kembali kertas nya.-Tancapkan putik bunga.-Rekatkan kertas aluminium ke kawat menggunakan lakban.-Untuk bunga nya pasang empat lembar kertas pola nya.-Buat daun nya juga di bawah bunga, lakban kembali kertas alumunium di bawah bunga.-Nah yang terakhir agar enak dipegang, balutlah kawat nya dengan lakban.', 'https://storage.googleapis.com/foto-tutorial/Membuat%20Bunga%20dari%20Alumunium%20foil.jpg', 'Kertas Foil', 'Besi/aluminium', 0),
(11, 'Botol kaca.-Bor kaca.-Kit lampu.-Lampu LED', NULL, 'Bersihkan botol kaca dan pastikan kering sebelum memulai pemasangan.-Gunakan bor kaca untuk membuat lubang di dasar botol agar dapat dilalui kabel.-Pasang kit lampu ke dalam botol dengan melewati lubang yang sudah dibor.-Tempatkan lampu LED dan pastikan soketnya terpasang dengan baik.-Sambungkan ke sumber listrik dan nyalakan.-Lampu meja dari botol kaca siap digunakan.', 'https://storage.googleapis.com/foto-tutorial/Lampu%20Meja.jpg', 'Botol', 'Kaca', 0),
(12, 'Kertas bekas.-Kardus bekas.-Cermin.-Lem tembak.-Lem fox.-Cat minyak ukuran kecil.-Kuas cat ukuran kecil.-Penggaris.-Pensil.-Glitter.-Manik-manik.-Gunting.-Cutter.', NULL, 'Setelah semua alat dan bahan sudah lengkap, maka yang pertama tama kita harus buat adalah membuat pola pada kardus yang mengikuti ukuran cermin. Misalnya cerminnya bulat, atau lonjong atau persegi. Kemudian gunting pola itu sesuai ukurannya.-Berikut membuat pola hiasan cermin menggunakan kertas bekas dus susu ukuran sedang. Buatlah pola diatas kertas susu tersebut untuk hiasan cermin sesuai dengan pola yang kita inginkan, misalnya pola daun keladi, bulat,atau lonjong.-Pewarnaan Setelah pola hiasan sudah jadi saatnya mengecat hiasan tersebut dengan menggunakan cat minyak. Diamkan sementara lalu taburi dengan glitter untuk mempercantik permukaan hiasan.-Setelah kering tempelkan pola hiasan tersebut ke permukaan kardus yang telah diukur dan telah diberi batas ukuran cermin dengan menggunakan lem fox-Setelah permukaan kardus telah ditempel, tempelkan cermin yang sudah diberi lem fox ke permukaan kardus yang sudah dihias. Diamkan beberapa jam agar lemnya benar benar kering.-Setelah kering menempelkan gantungan pada bagian belakang cermin hias dengan menggunakan lem tembak.-Cermin hias dari bahan kertas dan kardus ini bisa dijadikan sebagai hiasan dinding di kamar tidur atau di ruang tertentu sekaligus bisa digunakan sebagai berkaca.', 'https://storage.googleapis.com/foto-tutorial/Cermin%20Hias.jpeg', 'Kardus', 'Kardus', 0),
(13, 'Lampu hias warna biru, Kabel alat listrik.-Kertas Tembus Pandang atau kertas plastik bisa juga kertas tipis.-Kertas berwarna hitam.-Printer.-Lem kertas.-Gunting.-Cutter.-Solasi.-Kayu', NULL, 'Cetak gambar atau foto yang sesuai dengan keinginan Anda melalui komputer atau laptop.-Kemudian print dengan kertas.-Buatlah pola untuk membuat sebuah balok persegi panjang.-Siapkan potongan Kardus, kemudian buat persegi. Tujuannya untuk membuat bagian Atas dan bawah kotak.-Tempelkan kertas hitam pada kertas kardus. Kemudian potong dengan cutter.-Buatlah setiap sisi dengan menempelkan kayu untuk tiangnya.-Rekatkan dengan selotip hitamnya.-Tempelkan setiap sisi dengan gambar yang telah Anda print.-Rekatkan kembali dengan lem kertas.', 'https://storage.googleapis.com/foto-tutorial/Lampion%20kardus.jpeg', 'Kardus', 'Kardus', 0),
(14, 'Dua kotak 20x20 inci.-Satu kotak 30x30 inci.-Lakban.-Gulungan kertas kraft.-Pisau kerajinan.-Rantai plastik.-Pembersih pipa.-Lem.-Kotak velcro 2x3 inci.', NULL, 'Ubah kotak menjadi kolom dengan ujung terbuka: Lipat penutup di bagian atas dan bawah setiap kotak. Pita di tempat.-Buat jembatan tarik: Gambarlah pola untuk pintu di atas kertas kraft dan guntinglah. Lacak ke bagian bawah kolom tinggi. Memotong.-Potong lubang kecil di kedua sisi bukaan pintu masing-masing harus cukup besar untuk rantai. Lewati rantai dan simpul ujungnya di dalam kolom. Untuk memasang rantai ke pintu, tusukkan ujung pembersih pipa melalui bagian depan pintu di setiap sisi. Putar ke rantai dan kencangkan dengan lem tembak.-Potong pintu interior dan samping agar anak-anak dapat melewatinya.-Buat jendela yang dapat dibuka dan ditutup: Gambarlah templat di atas kertas dan tandai garis tengahnya. Lacak ke kotak, dan potong, biarkan sisi-sisinya terhubung sehingga bisa dibuka dan ditutup.-Potong takik di bagian atas kastil.-Pasang sisi ke kotak tengah menggunakan velcro.', 'https://storage.googleapis.com/foto-tutorial/Istana%20Mainan.jpg', 'Kardus', 'Kardus', 0),
(15, '1 kotak karton ukuran sedang.-Pita pengepakan.-Gunting atau cutter', NULL, 'Potong satu penutup penuh dan setengah dari kedua penutup dan rekatkan sisi yang tersisa. Simpan penutup bagian dalam untuk bahan tambahan.-Sekarang balik kotak itu dan potong keempat penutupnya. Flap ini akan digunakan untuk membuat sayap, baling-baling, dan ekor.-Potong lubang lengan dari kotak. Gambarlah setengah lingkaran di dekat sisi yang ditempel dan potong. Ulangi metode yang sama di sisi lain.-Buat celah di kedua sisi kotak untuk sayap.-Gambar dan potong bentuk sayap dari tutupnya dan masukkan ke dalam celah. Balik dan rekatkan untuk menopang.-Untuk membuat buntutnya, ambil selembar karton berukuran besar dan buat belahan di tengahnya. Sekarang masukkan karton berukuran kecil ke dalam celah.-Untuk membuat baling-baling, ambil karton berbentuk persegi panjang, rapikan ujung bawahnya dan rekatkan.-Buat dua lingkaran dengan ukuran berbeda. Tempatkan baling-baling pada lingkaran yang lebih besar dan rekatkan dengan lem. Sekarang tempel lingkaran yang lebih kecil di atas lingkaran yang lebih besar.-Pasang baling-baling ke kotak. Pesawat Anda sudah siap.', 'https://storage.googleapis.com/foto-tutorial/Pesawat%20Mainan.jpg', 'Kardus', 'Kardus', 0),
(16, 'Bungkus bekas minuman kemasan sebanyak banyaknya.-Benang.-Jarum jahit besar.-Resleting', NULL, 'Potong bungkus minuman kemasan  dengan lebar sekitar 5 cm atau menyesuaikan preferensi ukuran yang diinginkan.-Gunting juga bagian samping bungkus agar bungkus dapat dibuka dan diperluas.-Lipat bagian kanan dan kiri bungkus ke tengah sehingga saling bertemu.-Setelah itu, lipat bungkus yang sudah dilipat tadi menjadi dua bagian.-Lipat bagian atas dan bawah bungkus hingga bertemu di bagian tengah.-Lipat lagi bungkus yang sudah dilipat sebelumnya. Lanjutkan dengan melipat bungkus lainnya satu per satu, dan sambungkan mereka. Lakukan hingga terkumpul sekitar 14 bungkus, atau sesuai dengan preferensi.-Buka bagian ujung kedua bungkus dan satukan mereka. Buatlah sebanyak 7 unit seperti ini.-Susun ketujuh unit bungkus minuman kemasan yang telah dibentuk dan jahit mereka bersama. Selanjutnya, pasang resleting di bagian atas.', 'https://storage.googleapis.com/foto-tutorial/Dompet%20dan%20Tas.jpg', 'Kemasan', 'Plastik', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tutorial`
--

CREATE TABLE `tutorial` (
  `idTutorial` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutorial`
--

INSERT INTO `tutorial` (`idTutorial`, `judul`, `deskripsi`) VALUES
(3, 'Pot Tanaman dari Botol Plastik', 'Botol plastik bekas dapat dimanfaatkan kembali sebagai pot bunga lucu bergambar hewan. Adapun cara membuatnya, yaitu'),
(4, 'Kerajinan Lampu Hias', 'Umumnya lampu hias yang ada di rumah atau dijual terbuat dari bahan yang bagus dan berkualitas. Namun, ternyata lampu hias di rumah dapat terbuat dari botol plastik bekas. Adapun cara membuatnya, yaitu:'),
(5, 'Seni Mozaik', 'Ketika seseorang membuat kerajinan dari botol plastik bekas, bagian tutupnya jarang digunakan. Padahal tutup botol bisa dijadikan seni mozaik yang mempercantik dekorasi rumah. Cara membuatnya, yaitu:'),
(6, 'Tikar Dari Kantong Plastik', 'Tikar merupakan anyaman yang biasanya dipakai sebagai alas duduk atau tidur. Ternyata kantong plastik bekas dapat dibuat menjadi tikar dengan langkah-langkah, yaitu:'),
(7, 'Kerajinan Tempat Aksesoris', 'Ketika memanfaatkan sampah plastik seperti botol plastik bekas minuman. Umumnya, bagian bawah botol sering dibuang begitu saja. Padahal bagian ini bisa dibuat menjadi produk kerajinan dari sampah plastik berupa tempat aksesoris kecil dengan langkah-langkah, yaitu:'),
(8, 'Lampu Tidur dari Kaleng Bekas', 'Lampu tidur dari kaleng bekas adalah produk kerajinan ramah lingkungan yang memanfaatkan sampah kaleng sebagai bahan utama. Kaleng-kaleng bekas, seperti kaleng minuman atau makanan, diolah menjadi penutup lampu yang artistik dengan desain unik. Proses pembuatannya melibatkan pembersihan kaleng, pembentukan pola dengan cara melubangi permukaan kaleng, dan penambahan elemen pencahayaan seperti lampu LED.'),
(9, 'Membuat Bunga dari Alumunium foil', 'Membuat bunga dari aluminium foil merupakan kegiatan daur ulang yang kreatif dengan memanfaatkan sampah aluminium foil bekas. Prosesnya dimulai dengan memotong aluminium foil menjadi potongan-potongan kecil, kemudian membentuknya menjadi kelopak bunga dengan cara melipat dan menggulung foil. Setiap kelopak disusun membentuk bunga, dan tangkai bisa dibuat dari kawat atau batang lainnya. Bunga dari aluminium foil ini tidak hanya ramah lingkungan, tetapi juga menghasilkan karya seni yang menarik dan unik, serta bisa dijadikan hiasan rumah atau hadiah.'),
(10, 'Lampu Gantung', 'Membuat lampu gantung adalah ide kerajinan dari botol kaca bekas yang menarik berikutnya. Botol kaca dapat menambah daya tarik visual pada lampu gantung yang Anda buat. Caranya membuatnya cukup sederhana, pertama, siapkan dulu bahan-bahan yang diperlukan, yaitu:'),
(11, 'Lampu Meja', 'Anda juga bisa membuat kerajinan dari botol kaca menjadi lampu meja. Caranya mudah, Anda cukup menyiapkan bahan-bahan, seperti: Berikut adalah langkah-langkah membuatnya:'),
(12, 'Cermin Hias', 'Mempercantik cermin hiasmu dengan memanfaatkan kardus bekas menjadi lebih cantik dan tentunya bermanfaat. Berikut adalah alat, bahan, dan cara membuatnya.'),
(13, 'Lampion', 'Kerajinan dari kertas gambar lukisan yang dipadukan dengan dengankardus bekas. Memiliki lampu hias tidaklah selalu merogoh kocek yang mahal, asalkan Andamampu mengkreasikan bahan limbah di rumah Anda. Nah berikut ini kita akan belajar membuat\r\nlampu hias kamar dari sebuah kertas kardus bekas dan foto atau lukisan gambar. Mau tahu caramembuatnya, simakkerajinan tangan di bawah ini'),
(14, 'Istana Mainan', 'Membuat istana mainan dari kardus adalah proyek kreatif yang dapat dilakukan dengan bahan daur ulang sederhana. Prosesnya dimulai dengan mengumpulkan kardus bekas, kemudian memotong dan menyusun potongan kardus untuk membentuk struktur istana, seperti dinding, pintu, dan menara. Kardus dapat dihias dengan cat, stiker, atau dekorasi lain agar terlihat lebih menarik. Istana mainan dari kardus ini bisa menjadi tempat bermain yang seru bagi anak-anak, dan juga mengajarkan pentingnya daur ulang serta kreativitas dalam membuat mainan dari bahan yang mudah ditemukan di sekitar kita.'),
(15, 'Pesawat Mainan', 'Kardus bekas juga bermanfaat untuk diolah menjadi mainan. Salah satunya adalah pesawat, berikut adalah alat, bahan, dan cara membuatnya.'),
(16, 'Dompet dan Tas', 'Proses membuat dompet dari bungkus minuman saset memerlukan waktu yang singkat dan mudah dilakukan. Penasaran dengan cara bikin dompet dari bungkus minuman saset? Berikut ini tahapannya.');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `password_user` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `name_user`, `email_user`, `password_user`, `createdAt`, `updatedAt`) VALUES
(1, 'thanel', 'thanel@gmail.com', '12345678', '2024-11-28 05:46:44', '2024-11-28 05:46:44'),
(3, 'thanel', 'thanel23@gmail.com', '12345678', '2024-11-28 09:23:30', '2024-11-28 09:23:30'),
(4, 'ezra', 'ezra@gmail.com', 'ezra1234', '2024-11-28 11:35:22', '2024-11-28 11:35:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detailtutorial`
--
ALTER TABLE `detailtutorial`
  ADD KEY `idTutorial_FK` (`idTutorial`);

--
-- Indexes for table `tutorial`
--
ALTER TABLE `tutorial`
  ADD PRIMARY KEY (`idTutorial`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_user` (`email_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tutorial`
--
ALTER TABLE `tutorial`
  MODIFY `idTutorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detailtutorial`
--
ALTER TABLE `detailtutorial`
  ADD CONSTRAINT `idTutorial_FK` FOREIGN KEY (`idTutorial`) REFERENCES `tutorial` (`idTutorial`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
