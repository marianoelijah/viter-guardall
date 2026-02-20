-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2026 at 10:21 AM
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
-- Database: `guard-all_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `logo`, `created_at`) VALUES
(2, 'Honeywell', '/src/assets/image/products logo/HONEYWELL.png', '2026-02-19 05:04:07'),
(3, 'HIRSCH', '/src/assets/image/products logo/HIRSCH-Small.png', '2026-02-19 05:04:07'),
(4, 'MAG', '/src/assets/image/products logo/MAG.png', '2026-02-19 05:04:07'),
(5, 'uberGARD', '/src/assets/image/products logo/UBER.png', '2026-02-19 05:04:07'),
(6, 'ALARM.COM', '/src/assets/image/products logo/Alarm.png', '2026-02-19 05:04:07'),
(7, 'FERMAX', '/src/assets/image/products logo/Fermax.png', '2026-02-19 05:04:07'),
(8, 'Commend', '/src/assets/image/products logo/Commend.png', '2026-02-19 05:04:07'),
(9, 'WEBGATE', '/src/assets/image/products logo/Webgate.png', '2026-02-19 05:04:07'),
(10, 'PELCO', '/src/assets/image/products logo/Pelco.png', '2026-02-19 05:04:07'),
(11, 'HIKVISION', '/src/assets/image/products logo/Hikvision.png', '2026-02-19 05:04:07'),
(12, 'ACTi', '/src/assets/image/products logo/Acti.png', '2026-02-19 05:04:07'),
(13, 'DAHUA', '/src/assets/image/AJHua.png', '2026-02-19 05:04:07'),
(14, 'GILARDONI', '/src/assets/image/products logo/Gilardoni.png', '2026-02-19 05:04:07'),
(15, 'CEIA', '/src/assets/image/products logo/CEIA.png', '2026-02-19 05:04:07'),
(16, 'AUTOCLEAR', '/src/assets/image/products logo/Auto-clear.png', '2026-02-19 05:04:07'),
(17, 'detnov', '/src/assets/image/products logo/Detnov.png', '2026-02-19 05:04:07'),
(18, 'foster+freeman', '/src/assets/image/products logo/FosterFreeman.png', '2026-02-19 05:04:07'),
(19, 'EBS', '/src/assets/image/products logo/EBS.png', '2026-02-19 05:04:07'),
(20, 'Onity', '/src/assets/image/products logo/Onity.png', '2026-02-19 05:04:07'),
(21, 'orbita', '/src/assets/image/products logo/orbita.png', '2026-02-19 05:04:07'),
(22, 'PARADOX', '/src/assets/image/products logo/paradox.png', '2026-02-19 05:04:07'),
(23, 'CASS', '/src/assets/image/products logo/CASS.png', '2026-02-19 05:04:07'),
(24, 'QUICK ALERT', '/src/assets/image/products logo/Quick-Alert.png', '2026-02-19 05:04:07'),
(25, 'MAGNETIC', '/src/assets/image/products logo/Magnetic.png', '2026-02-19 05:04:07'),
(26, 'LEDA', '/src/assets/image/products logo/Leda.png', '2026-02-19 05:04:07'),
(27, 'FAAC', '/src/assets/image/products logo/FAAC.png', '2026-02-19 05:04:07'),
(28, 'DELTA', '/src/assets/image/products logo/Delta.png', '2026-02-19 05:04:07'),
(29, 'VESDA by xtralis', '/src/assets/image/products logo/vesda-1.png', '2026-02-19 05:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `main_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `main_image`, `created_at`) VALUES
(3, 'Access Control System', 'In today’s world, Access Control remains as a fundamental security feature in various properties. With Access Control, you can increase your building or facility’s door security, manage the flow of visitors within your premises, and limit their access based on identification.', '/src/assets/image/access.jpg', '2026-02-19 05:04:06'),
(4, 'Audio-Video Intercom & PA-BGM', 'We highly recommended complementing your security systems with Audio-Video Intercom for ease of communication within your properties. Moreover, we also offer voice alarm systems for public addresses.', '/src/assets/image/intercom.jpg', '2026-02-19 05:04:06'),
(5, 'CCTVs', 'CCTVs serve as your ‘second eye’ in ensuring your properties are secured. It provides focused coverage, surveillance in areas or people, and record events. At Guard-All, we provide cost-effective CCTV Systems tailored to requirements.', '/src/assets/image/cctv.jpg', '2026-02-19 05:04:06'),
(6, 'Detection Systems', 'Guard-All has been a trusted provider and installer of metal detection systems and X-Ray machines in various airports, banks, and office buildings. With our most advanced Detection Systems, you can precisely detect high-risk items and hidden weapons.', '/src/assets/image/autoclear-xray.png', '2026-02-19 05:04:06'),
(7, 'Fire Alarm', 'Fire Alarm Systems are a major requirement for buildings today. To equip you with the latest, Guard-All provides smoke & fire detector alarms, beam detectors for open areas, and special devices for high-risk areas.', '/src/assets/image/Rectangle-11-2.png', '2026-02-19 05:04:06'),
(8, 'Forensic Examination', 'To ensure the authenticity of your critical documents and help you detect evidence tampering, our partners in FOSTER + FREEMAN have scientific-grade VSC to identify document manipulation with unparalleled accuracy.', '/src/assets/image/forensic.png', '2026-02-19 05:04:06'),
(9, 'Guard Tour Systems', 'Manage your security personnel and employees with Guard Tour Patrol Systems. It will help you track their live location, communicate two-way, and record their journey to ensure rounds are made safely.', '/src/assets/image/guard.jpg', '2026-02-19 05:04:06'),
(10, 'Hotel Locking System', 'Guard-All offers comprehensive locking systems that range from electronic to mechanical locks. Our hotel locking systems can also integrate with IDENTIV access control systems for enhanced security.', '/src/assets/image/hotel.jpg', '2026-02-19 05:04:06'),
(11, 'Intrusion / Burglary Alarm Systems', 'These round-the-clock sensors are ideal to secure businesses. Guard-All can help design a system based on your need and connect it to our 24-7-365 Central Monitoring System for prompt response.', '/src/assets/image/intrusion.jpeg', '2026-02-19 05:04:06'),
(12, 'Parking Management / Parking Guidance System', 'If you’re looking to expand your Vehicle Systems, we recommend our Parking Management Systems. Manage the vehicular flow in your properties with our systems which includes high-speed gate barriers, ticket-based or token-based entry/exit stations, and more.', '/src/assets/image/parking.jpeg', '2026-02-19 05:04:06'),
(13, 'Quick Alert', 'Aside from investing in security equipment, you need to ensure that your systems are connected to a monitoring station like Quick Alert. Quick Alert is a full service Central Monitoring Station devoted to surveil premises and monitor intrusion, fire, and panic alarms.', '/src/assets/image/quickalert.jpg', '2026-02-19 05:04:06'),
(14, 'Vehicle Barrier System and Pedestrian Barriers', 'With Vehicle Barrier System and Pedestrian Barriers, you can control the traffic, regulate vehicular access, and limit access to increase security of selected areas. At Guard-All, our vehicle systems include boom barriers for parking and tollways.', '/src/assets/image/vehicle.png', '2026-02-19 05:04:06'),
(15, 'Vesda System (Aspirating Smoke Detection)', 'To increase smoke detection in your buildings and office spaces, we highly recommend the VESDA System. It is an Aspirating Smoke Detector that can monitor smoke levels at various locations to signal early fire breakout by constantly testing the airflow.', '/src/assets/image/vesda.jpg', '2026-02-19 05:04:06');

-- --------------------------------------------------------

--
-- Table structure for table `product_brands`
--

CREATE TABLE `product_brands` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_brands`
--

INSERT INTO `product_brands` (`id`, `product_id`, `brand_id`) VALUES
(1, 3, 2),
(2, 3, 3),
(3, 3, 4),
(4, 3, 5),
(5, 3, 6),
(6, 4, 2),
(7, 4, 7),
(8, 4, 8),
(9, 5, 9),
(10, 5, 10),
(11, 5, 2),
(12, 5, 11),
(13, 5, 12),
(14, 5, 13),
(15, 6, 14),
(16, 6, 15),
(17, 6, 16),
(18, 7, 2),
(19, 7, 17),
(20, 8, 18),
(21, 9, 19),
(22, 10, 20),
(23, 10, 21),
(24, 11, 22),
(25, 12, 23),
(26, 13, 24),
(27, 14, 25),
(28, 14, 26),
(29, 14, 27),
(30, 14, 28),
(31, 15, 29),
(32, 14, 25),
(33, 14, 26),
(34, 14, 27),
(35, 14, 28),
(36, 15, 29);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_brands`
--
ALTER TABLE `product_brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `product_brands`
--
ALTER TABLE `product_brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_brands`
--
ALTER TABLE `product_brands`
  ADD CONSTRAINT `product_brands_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_brands_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
