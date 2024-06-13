-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 13 Jun 2024 pada 05.25
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital_db2`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `doctor`
--

CREATE TABLE `doctor` (
  `user_id` int(11) NOT NULL,
  `doctor_id` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `experience` int(11) NOT NULL,
  `imgUrl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `doctor`
--

INSERT INTO `doctor` (`user_id`, `doctor_id`, `name`, `gender`, `specialization`, `phone_number`, `experience`, `imgUrl`) VALUES
(107, 'STRGG0001', 'Dr. Nia Mayfani', 'Perempuan', 'Gigi', '081200300677', 11, 'https://i.ibb.co/XjmXHHQ/nia.png'),
(108, 'STRGG0002', 'Dr. Nuriani Anshori', 'Perempuan', 'Gigi', '085232907789', 9, 'https://i.ibb.co/y8NQZtk/nuriani.png'),
(98, 'STRJT0001', 'Dr. Abdul Hakim', 'Laki-laki', 'Jantung', '082111567878909', 10, 'https://i.ibb.co/9rs1P76/abdul.png'),
(100, 'STRJT0002', 'Dr. Sutomo Kasiman', 'Laki-Laki', 'Jantung', '081222908800', 16, 'https://i.ibb.co/hDHwJKW/sutomo.png'),
(101, 'STRJT0003', 'Dr. Muh. Agus', 'Laki-Laki', 'Jantung', '085222554787', 11, 'https://i.ibb.co/DzD82wH/agus.png'),
(102, 'STRJT0004', 'Dr. Utojo Lubiantoro', 'Laki-Laki', 'Jantung', '087900787555', 12, 'https://i.ibb.co/Bsvr3Nj/utojo.png'),
(90, 'STRLM0001', 'Dr. Suwito Indra', 'Laki-Laki', 'Lambung', '0851233987654', 12, 'https://i.ibb.co/Kh4WK6x/suwito.png'),
(91, 'STRLM0002', 'Dr. Neneng Ratna', 'Perempuan', 'Lambung', '081452786676', 13, 'https://i.ibb.co/fv8H1F1/neneng.png'),
(92, 'STRLM0003', 'Dr. Bradley Jimmy', 'Laki-Laki', 'Lambung', '081300400455', 11, 'https://i.ibb.co/X7fdZ0C/bradley.png'),
(93, 'STRLM0004', 'Dr. Hendra Nurjadin', 'Laki-Laki', 'Lambung', '085775654565', 11, 'https://i.ibb.co/TgJm7Wn/hendra.png'),
(94, 'STRMT0001', 'Dr. Michael Je', 'Laki-Laki', 'Mata', '082111300455', 11, 'https://i.ibb.co/kc90Pv4/michael.png'),
(95, 'STRMT0002', 'Dr. Anastasia Vanny', 'Perempuan', 'Mata', '083443566665', 11, 'https://i.ibb.co/Vm222Mh/anastasya.png'),
(96, 'STRMT0003', 'Dr. Vinsensius G.', 'Laki-Laki', 'Mata', '081445098765', 13, 'https://i.ibb.co/5183JV0/vinsensius.png'),
(97, 'STRMT0004', 'Dr. Mario Ricardo', 'Laki-Laki', 'Mata', '085134432768', 11, 'https://i.ibb.co/n01JCYv/mario.png'),
(85, 'STRPR0001', 'Dr.  Hendri Wiyono', 'Laki-Laki', 'Paru-Paru', '081232432456', 8, 'https://i.ibb.co/Sxw8YcW/hendri.png'),
(86, 'STRPR0002', 'Dr. Paulus Wibowo', 'Laki-Laki', 'Paru-Paru', '0851233987654', 10, 'https://i.ibb.co/Wx7RLv5/paulus.png'),
(87, 'STRPR0003', 'Dr. Koentjahja', 'Laki-Laki', 'Paru-Paru', '081232445554', 12, 'https://i.ibb.co/hKTKnfV/koentjahja.png'),
(88, 'STRPR0004', 'Dr. Harman Prayitno', 'Laki-Laki', 'Paru-Paru', '081222565788', 9, 'https://i.ibb.co/RGn3wRX/harman.png'),
(89, 'STRPR0005', 'Dr. Christian S. E. P.', 'Laki-Laki', 'Paru-Paru', '085989888909', 6, 'https://i.ibb.co/MGzMkx7/christian.png'),
(103, 'STRTH0001', 'Dr. Christopher Warouw', 'Laki-Laki', 'THT', '082111343443', 12, 'https://i.ibb.co/Tkf5YBn/christopher.png'),
(104, 'STRTH0002', 'Dr. Rimelda Aquinas', 'Perempuan', 'THT', '085232909566', 11, 'https://i.ibb.co/HDrGpz1/rimelda.png'),
(105, 'STRTL0001', 'Dr. Luthfi Gatam', 'Laki-Laki', 'Tulang', '081232450065', 13, 'https://i.ibb.co/5h1Ptbs/luthfi.png'),
(106, 'STRTL0002', 'Dr. Nicko Perdana', 'Laki-Laki', 'Tulang', '083123321450', 10, 'https://i.ibb.co/26wtbFc/nicko.png'),
(78, 'STRUM0001', 'Dr. Fadilah Mutaqin', 'Laki-Laki', 'Umum', '082147083442', 8, 'https://i.ibb.co/8YgcY08/Fadilah-removebg.png'),
(80, 'STRUM0002', 'Dr. M. Fahrul Udin', 'Laki-Laki', 'Umum', '082109764532', 9, 'https://i.ibb.co/80Vvhry/Fahrul-removebg.png'),
(81, 'STRUM0003', 'Dr. R. Soerjatmono', 'Laki-Laki', 'Umum', '085233098770', 8, 'https://i.ibb.co/b5FGw4K/Soerjatmono-removebg.png'),
(82, 'STRUM0004', 'Dr. Ayunda Almiradani', 'Perempuan', 'Umum', '081990876543', 10, 'https://i.ibb.co/r74QGJZ/Ayunda-removebg.png'),
(83, 'STRUM0005', 'Dr. Amalia Indah', 'Perempuan', 'Umum', '085656788902', 11, 'https://i.ibb.co/kcWt6d6/Amalia.png'),
(84, 'STRUM0006', 'Dr.  Kaseri Taufiqurrahman', 'Laki-Laki', 'Umum', '081232432456', 10, 'https://i.ibb.co/KLS1jh7/Kaseri.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_id`),
  ADD UNIQUE KEY `doctor_id` (`doctor_id`),
  ADD KEY `FK_Doctor_User` (`user_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `FK_Doctor_User` FOREIGN KEY (`user_id`) REFERENCES `auth` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
