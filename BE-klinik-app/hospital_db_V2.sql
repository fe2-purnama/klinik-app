-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 07:12 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`user_id`, `name`) VALUES
(13, 'Bakso enak');

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('patient','doctor','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`user_id`, `email`, `password`, `role`) VALUES
(6, 'qwerty12@qwerty.com', '$2b$10$bdooACM3WyC2aZ3xuh66e.UcNQeWMRcwV9phxQ4cALFlHXBHNagK2', 'patient'),
(8, 'qwerty1@qwerty.com', '$2b$10$SlWiIYf4f/8aXtnFAAMTbe/LN4I5ZXr9juMNalJ/ycQ2AcMaA/bcO', 'patient'),
(12, 'johndoe@example.com', '$2b$10$44QKk0zB8tRQm5920qEkS.MSrXCHzwoFE2r4oXg4E8BxcbFqtvMyi', 'doctor'),
(13, 'admin', '$2b$10$eQuFLY6ha1ofJ/vwkq/85uR4NuuNpXJvPFxQMoITTyoCQieTq/y.G', 'admin'),
(15, 'qwerty123@qwerty.com', '$2b$10$dktJPVxXzIVGqzrQ2o5EEeVuZ6PYUtBTAamEZ9CPk/yfZl4Y1CJtu', 'patient'),
(16, 'qwerty@qwerty.com', '$2b$10$zgEFZeu78qM9.hB7kTTX2eSmPEFT3U1n.OHh7X0jZh5KofsDWaKne', 'doctor'),
(19, 'qwerty1234@qwerty.com', '$2b$10$XFHqCkx5J1oVYm.KMYBrHOeI5fExtcN3k8xfMZsPG61KCQMUh/iH6', 'patient'),
(24, 'qwerty1234567@qwerty.com', '$2b$10$oMIMuvAJxftPXe6bUAZp2O.k7Tj.N7z3lpIqYpPobUNo8qhwBYbde', 'doctor');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `user_id` int(11) NOT NULL,
  `doctor_id` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `experience` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`user_id`, `doctor_id`, `name`, `gender`, `specialization`, `phone_number`, `experience`) VALUES
(16, 'STR2342321', 'john', 'Laki-laki', 'Bedah Rumah', '+62', 2),
(24, 'STR23423212', 'john', 'Laki-laki', 'Bedah Rumah', '+62', 2),
(12, 'STR234235', 'Dr. John Doe', 'male', 'Cardiology', '123-456-7890', 10);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`user_id`, `name`, `phone_number`) VALUES
(6, 'john cena', '123'),
(8, 'john cena', '123'),
(15, 'john cena', '123'),
(19, 'john cena', '123');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `reservation_id` varchar(20) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` varchar(20) NOT NULL,
  `doctor_name` varchar(50) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `patient_name` varchar(50) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `ttl` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `reservation_date` datetime NOT NULL,
  `complaint` text DEFAULT NULL,
  `status` enum('Menunggu','Batal','Proses','Selesai') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`reservation_id`, `patient_id`, `doctor_id`, `doctor_name`, `specialization`, `patient_name`, `nik`, `ttl`, `gender`, `phone_number`, `address`, `reservation_date`, `complaint`, `status`) VALUES
('RD240000', 15, 'STR234235', 'Dr. John Doe', 'Cardiology', 'Jane Smith', '987654321', '1990-01-01', 'Female', '08123456789', 'Jl. Merdeka No. 1, Jakarta', '2024-06-15 00:00:00', 'Chest pain and shortness of breath', 'Menunggu'),
('RD240001', 15, 'STR234235', 'Dr. John Doe', 'Cardiology', 'Jane Smith', '987654321', '1990-01-01', 'Female', '08123456789', 'Jl. Merdeka No. 1, Jakarta', '2024-06-15 00:00:00', 'Chest pain and shortness of breath', 'Menunggu'),
('RD240002', 15, 'STR234235', 'Dr. John Doe', 'Cardiology', 'Jane Smith', '987654321', '1990-01-01', 'Female', '08123456789', 'Jl. Merdeka No. 1, Jakarta', '2024-06-15 00:00:00', 'Chest pain and shortness of breath', 'Menunggu');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL,
  `reservation_id` varchar(20) NOT NULL,
  `doctor_id` varchar(20) NOT NULL,
  `review` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_id`),
  ADD UNIQUE KEY `doctor_id` (`doctor_id`),
  ADD KEY `FK_Doctor_User` (`user_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `FK_Reservation_Patient` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `reservation_id` (`reservation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_Admin_User` FOREIGN KEY (`user_id`) REFERENCES `auth` (`user_id`);

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `FK_Doctor_User` FOREIGN KEY (`user_id`) REFERENCES `auth` (`user_id`);

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `FK_Patient_User` FOREIGN KEY (`user_id`) REFERENCES `auth` (`user_id`);

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_Reservation_Patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`user_id`),
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`reservation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
