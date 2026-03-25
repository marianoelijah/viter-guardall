-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2026 at 05:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guardall_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo_path` varchar(255) DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `logo_path`, `slug`) VALUES
(1, 'Honeywell', '/assets/image/Client Logo/HONEYWELL.png', 'honeywell'),
(2, 'HIRSCH', '/assets/image/Client Logo/HIRSCH-Small.png', 'hirsch'),
(3, 'MAG', '/assets/image/Client Logo/MAG.png', 'mag'),
(4, 'uberGARD', '/assets/image/Client Logo/UBER.png', 'ubergard'),
(5, 'ALARM.COM', '/assets/image/ALARM IMG/Alarm.png', 'alarm-com'),
(6, 'FERMAX', '/assets/image/FERMAX IMG/Fermax.png', 'fermax'),
(7, 'Commend', '/assets/image/COMMEND IMG/Commend.png', 'commend'),
(8, 'WEBGATE', '/src/assets/image/products logo/Webgate.png', 'webgate'),
(9, 'PELCO', '/src/assets/image/products logo/Pelco.png', 'pelco'),
(10, 'HIKVISION', '/src/assets/image/products logo/Hikvision.png', 'hikvision'),
(11, 'ACTi', '/assets/image/ACTI IMG/Acti.png', 'acti'),
(12, 'DAHUA', '/assets/image/DAHUA IMG/AJHua.png', 'dahua'),
(13, 'GILARDONI', '/assets/image/GILARDONI IMG/Gilardoni.png', 'gilardoni'),
(14, 'CEIA', '/assets/image/CEIA IMG/CEIA.png', 'ceia'),
(15, 'AUTOCLEAR', '/assets/image/AUTOCLEAR IMG/Auto-clear.png', 'autoclear'),
(16, 'detnov', '/assets/image/DETNOV IMG/Detnov.png', 'detnov'),
(17, 'foster+freeman', '/assets/image/FOSTER IMG/FosterFreeman.png', 'foster-freeman'),
(18, 'EBS', '/assets/image/EBS IMG/EBS.png', 'ebs'),
(19, 'Onity', '/src/assets/image/products logo/Onity.png', 'onity'),
(20, 'orbita', '/src/assets/image/products logo/orbita.png', 'orbita'),
(21, 'PARADOX', '/src/assets/image/products logo/paradox.png', 'paradox'),
(22, 'CASS', '/assets/image/CASS IMG/CASS.png', 'cass'),
(23, 'QUICK ALERT', '/src/assets/image/products logo/Quick-Alert.png', 'quick-alert'),
(24, 'MAGNETIC', '/src/assets/image/products logo/Magnetic.png', 'magnetic'),
(25, 'LEDA', '/src/assets/image/products logo/Leda.png', 'leda'),
(26, 'FAAC', '/assets/image/FAAC IMG/FAAC.png', 'faac'),
(27, 'DELTA', '/assets/image/DELTA IMG/Delta.png', 'delta'),
(28, 'VESDA by xtralis', '/src/assets/image/products logo/vesda-1.png', 'vesda');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `image_path`) VALUES
(1, 'Access Control System', 'In today’s world...', '/assets/image/Our Products/access.jpg'),
(2, 'Audio-Video Intercom & PA-BGM', 'We highly recommended complementing your security systems with Audio-Video Intercom...', '/assets/image/Our Products/intercom.jpg'),
(3, 'CCTVs', 'CCTVs serve as your ‘second eye’ in ensuring your properties are secured...', '/assets/image/Our Products/cctv.jpg'),
(4, 'Detection Systems', 'Guard-All has been a trusted provider and installer of metal detection systems...', '/assets/image/Our Products/autoclear-xray.png'),
(5, 'Fire Alarm', 'Fire Alarm Systems are a major requirement for buildings today...', '/assets/image/Our Products/Rectangle-11-2.png'),
(6, 'Forensic Examination', 'To ensure the authenticity of your critical documents...', '/assets/image/Our Products/forensic.png'),
(7, 'Guard Tour Systems', 'Manage your security personnel and employees...', '/assets/image/Our Products/guard.jpg'),
(8, 'Hotel Locking System', 'Guard-All offers comprehensive locking systems...', '/assets/image/Our Products/hotel.jpg'),
(9, 'Intrusion / Burglary Alarm Systems', 'These round-the-clock sensors are ideal to secure businesses...', '/assets/image/Our Products/intrusion.jpeg'),
(10, 'Parking Management / Parking Guidance System', 'Manage the vehicular flow in your properties...', '/assets/image/Our Products/parking.jpeg'),
(11, 'Quick Alert', 'Quick Alert is a full service Central Monitoring Station...', '/assets/image/Our Products/quickalert.jpg'),
(12, 'Vehicle Barrier System and Pedestrian Barriers', 'Control traffic and regulate vehicular access...', '/assets/image/Our Products/vehicle.png'),
(13, 'Vesda System (Aspirating Smoke Detection)', 'To increase smoke detection in your buildings...', '/assets/image/Our Products/vesda.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `category_brands`
--

CREATE TABLE `category_brands` (
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category_brands`
--

INSERT INTO `category_brands` (`category_id`, `brand_id`) VALUES
(1, 1),
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 6),
(2, 7),
(3, 8),
(3, 9),
(3, 1),
(3, 10),
(3, 11),
(3, 12),
(4, 13),
(4, 14),
(4, 15),
(5, 1),
(5, 16),
(6, 17),
(7, 18),
(8, 19),
(8, 20),
(9, 21),
(10, 22),
(11, 23),
(12, 24),
(12, 25),
(12, 26),
(12, 27),
(13, 28);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_description` text DEFAULT NULL,
  `product_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `product_name`, `product_description`, `product_image`) VALUES
(1, 1, 'Honeywell Controller', 'High-end access controller...', '/assets/products/h-controller.jpg'),
(2, 11, 'A713 5MP Outdoor Network Fisheye', 'High-resolution fisheye camera for wide area coverage.', '/assets/image/ACTI IMG/A713 5MP Outdoor Network Fisheye.png'),
(3, 11, 'A817 8MP Outdoor', 'Professional 8MP outdoor dome camera.', '/assets/image/ACTI IMG/A817 8MP Outdoor.png'),
(4, 11, 'B928- 5MP Outdoor', 'Rugged 5MP outdoor bullet camera.', '/assets/image/ACTI IMG/B928- 5MP Outdoor.png'),
(5, 11, 'Outdoor Network Dome Camera', 'Weatherproof network dome camera.', '/assets/image/ACTI IMG/Outdoor Network Dome Camera.png'),
(6, 5, 'ADC-AC-CARD', 'Access Control proximity card.', '/assets/image/ALARM IMG/ADC-AC-CARD.png'),
(7, 5, 'ADC-AC-ET ACCESS', 'Electronic access control terminal.', '/assets/image/ALARM IMG/ADC-AC-ET ACCESS.jpg'),
(8, 5, 'ADC-AC-X100 TWO', 'Two-door controller expansion.', '/assets/image/ALARM IMG/ADC-AC-X100 TWO.jpg'),
(9, 5, 'ADC-AC-X200', 'Single door controller.', '/assets/image/ALARM IMG/ADC-AC-X200.png'),
(10, 5, 'ADC-AC-X300', 'Advanced access control module.', '/assets/image/ALARM IMG/ADC-AC-X300.png'),
(11, 5, 'ADC-AC-X1100', 'Networked door controller.', '/assets/image/ALARM IMG/ADC-AC-X1100.png'),
(12, 5, 'ADC-AC-X1100-4PSE', 'Power-over-Ethernet door controller.', '/assets/image/ALARM IMG/ADC-AC-X1100-4PSE.png'),
(13, 15, '5333DVS-HD', 'High-definition dual-view X-ray scanner.', '/assets/image/AUTOCLEAR IMG/5333DVS-HD.png'),
(14, 15, '6040dvs dv XRAY', 'Dual-view X-ray inspection system.', '/assets/image/AUTOCLEAR IMG/6040dvs dv XRAY.png'),
(15, 15, '6040DVS-HD', 'HD dual-view checkpoint scanner.', '/assets/image/AUTOCLEAR IMG/6040DVS-HD.png'),
(16, 15, 'CLX Compact', 'Compact parcel inspection system.', '/assets/image/AUTOCLEAR IMG/CLX Compact.png'),
(17, 15, 'DV XRAY Inspection System', 'Standard dual-view X-ray unit.', '/assets/image/AUTOCLEAR IMG/DV XRAY Inspection Sy...png'),
(18, 15, 'E3500 Trace', 'Explosives and narcotics trace detector.', '/assets/image/AUTOCLEAR IMG/E3500 Trace.jpg'),
(19, 15, 'E5000-Series', 'Desktop trace detection system.', '/assets/image/AUTOCLEAR IMG/E5000-Series.png'),
(20, 15, 'Handwand', 'Handheld metal detector wand.', '/assets/image/AUTOCLEAR IMG/Handwand.png'),
(21, 15, 'N2300', 'Advanced desktop trace detector.', '/assets/image/AUTOCLEAR IMG/N2300.png'),
(22, 15, 'XRAY Inspection System', 'Checkpoint X-ray security system.', '/assets/image/AUTOCLEAR IMG/XRAY Inspection System.png'),
(23, 22, 'CO-020X', 'CASS security control module.', '/assets/image/CASS IMG/CO-020X.jpg'),
(24, 22, 'CP-505', 'CASS access control panel.', '/assets/image/CASS IMG/CP-505.png'),
(25, 22, 'CP-555', 'CASS high-performance control panel.', '/assets/image/CASS IMG/CP-555.png'),
(26, 14, 'EMA LIQUID', 'Liquid explosive detection system.', '/assets/image/CEIA IMG/EMA LIQUID.png'),
(27, 14, 'EMIS MAIL', 'Mail and parcel security scanner.', '/assets/image/CEIA IMG/EMIS MAIL.png'),
(28, 14, 'HIPE PLUS', 'High-performance walk-through metal detector.', '/assets/image/CEIA IMG/HIPE PLUS.png'),
(29, 14, 'MSD HIGHLY PORTABLE', 'Portable magnetostatic detector.', '/assets/image/CEIA IMG/MSD HIGHLY PORTABLE.png'),
(30, 14, 'MSDI HIGH PERFORMANCE', 'High-performance security detector.', '/assets/image/CEIA IMG/MSDI HIGH PERFORMANC...jpg'),
(31, 14, 'OPENGATE WEAPONS', 'Open-structure weapons detection.', '/assets/image/CEIA IMG/OPENGATE WEAPONS.png'),
(32, 14, 'PD140N COMPACT HANDHELD', 'Digital handheld metal detector.', '/assets/image/CEIA IMG/PD140N COMPACT HA...png'),
(33, 14, 'PD240 WIDE SEARCH', 'Wide-search handheld detector.', '/assets/image/CEIA IMG/PD240 WIDE SEARCH.jpg'),
(34, 14, 'PD240CB LONG RANGE', 'Long-range handheld metal detector.', '/assets/image/CEIA IMG/PD240CB LONG RANGE.png'),
(35, 14, 'PMD2 PLUS', 'Multi-zone walk-through detector.', '/assets/image/CEIA IMG/PMD2 PLUS.png'),
(36, 14, 'SMD600 PLUS', 'Ultra-sensitive walk-through detector.', '/assets/image/CEIA IMG/SMD600 PLUS.png'),
(37, 14, 'SMD601 PLUS', 'High-sensitivity security gateway.', '/assets/image/CEIA IMG/SMD601 PLUS.png'),
(38, 7, 'AF-20-HD-768x380', 'HD intercom station module.', '/assets/image/COMMEND IMG/AF-20-HD-768x380.png'),
(39, 7, 'AF-50-HD-768x380', 'Advanced HD intercom station.', '/assets/image/COMMEND IMG/AF-50-HD-768x380.png'),
(40, 7, 'AF-125-HD-768x380', 'Integrated HD intercom system.', '/assets/image/COMMEND IMG/AF-125-HD-768x380.png'),
(41, 7, 'AF-250-HD-768x380', 'High-capacity HD intercom.', '/assets/image/COMMEND IMG/AF-250-HD-768x380.png'),
(42, 7, 'AF-500 WATT', 'High-power intercom amplifier.', '/assets/image/COMMEND IMG/AF-500 WATT.png'),
(43, 7, 'AFLC 10H SCW CABINET', 'Intercom system cabinet.', '/assets/image/COMMEND IMG/AFLC 10H SCW CABINET.png'),
(44, 7, 'AFLS10H IP HORN', 'IP-based horn speaker system.', '/assets/image/COMMEND IMG/AFLS10H IP HORN.png'),
(45, 7, 'AFLS10HCW IP CEILING', 'IP-based ceiling speaker.', '/assets/image/COMMEND IMG/AFLS10HCW IP CEILING.png'),
(46, 7, 'AFLS10HPW PROJECTOR', 'IP-based projector speaker.', '/assets/image/COMMEND IMG/AFLS10HPW PROJECTOR.png'),
(47, 12, '8-Channel Network Video Recorder', 'High-performance NVR for security storage.', '/assets/image/DAHUA IMG/8-Channel Network Vid...png'),
(48, 12, '8MP Multisensor Panoramic', '360-degree panoramic security camera.', '/assets/image/DAHUA IMG/8MP Multisensor Panor...png'),
(49, 12, '32-Channel Network Video Recorder', 'Enterprise-grade NVR for large installations.', '/assets/image/DAHUA IMG/32-Channel Network Vi...png'),
(50, 12, 'AcuPick N45FJ62 4MP', '4MP intelligent AI camera.', '/assets/image/DAHUA IMG/AcuPick N45FJ62 4MP.png'),
(51, 12, 'AcuPick N85FB6Z4 8MP', '8MP AI-enhanced bullet camera.', '/assets/image/DAHUA IMG/AcuPick N85FB6Z4 8MP...png'),
(52, 12, 'AcuPick N85FJ6Z 8MP', '8MP intelligent turret camera.', '/assets/image/DAHUA IMG/AcuPick N85FJ6Z 8MP.png'),
(53, 12, 'AcuPick N85FL6Z4 8MP', 'Advanced 8MP network camera.', '/assets/image/DAHUA IMG/AcuPick N85FL6Z4 8MP...webp'),
(54, 12, 'Compliant Managed Indoor Switch', 'Managed PoE switch for indoor networking.', '/assets/image/DAHUA IMG/Compliant Managed In...png'),
(55, 12, 'Dome WizMind Network Camera', 'AI-powered dome security camera.', '/assets/image/DAHUA IMG/Dome WizMind Network...png'),
(56, 12, 'Fisheye WizMind Network Camera', 'Ultra-wide angle AI network camera.', '/assets/image/DAHUA IMG/Fisheye WizMind Netw...png'),
(57, 12, 'N43BX8Z 4MP Outdoor', 'Rugged 4MP outdoor security camera.', '/assets/image/DAHUA IMG/N43BX8Z 4MP Outdoor...png'),
(58, 27, 'DSC 305', 'Delta security control module 305.', '/assets/image/DELTA IMG/DSC 305.jpg'),
(59, 27, 'DSC 501', 'Delta access control panel 501.', '/assets/image/DELTA IMG/DSC 501.jpg'),
(60, 27, 'DSC 550', 'Delta system controller 550.', '/assets/image/DELTA IMG/DSC 550.jpg'),
(61, 27, 'DSC 720', 'Delta network security module 720.', '/assets/image/DELTA IMG/DSC 720.png'),
(62, 27, 'DSC 800', 'High-performance system controller.', '/assets/image/DELTA IMG/DSC 800.jpg'),
(63, 27, 'DSC 2000', 'Enterprise security management unit.', '/assets/image/DELTA IMG/DSC 2000.jpeg'),
(64, 27, 'DSC HD300', 'Delta HD security interface.', '/assets/image/DELTA IMG/DSC HD300.jpg'),
(65, 16, 'CAD 150 2 MB', 'Detnov fire alarm control panel.', '/assets/image/DETNOV IMG/CAD 150 2 MB.jpg'),
(66, 16, 'Clambell Fire Alarm', 'Detnov audible fire alarm bell.', '/assets/image/DETNOV IMG/Clambell Fire Alarm.jpg'),
(67, 16, 'Conventional Beacon', 'Visual fire alarm beacon.', '/assets/image/DETNOV IMG/Conventional Beacon S...png'),
(68, 16, 'Conventional Manual Call Point', 'Manual fire alarm activation station.', '/assets/image/DETNOV IMG/Conventional Manual.jpg'),
(69, 16, 'DOD-220', 'Detnov optical smoke detector.', '/assets/image/DETNOV IMG/DOD-220.png'),
(70, 16, 'DOTD-230A-768x755', 'Combined smoke and heat detector.', '/assets/image/DETNOV IMG/DOTD-230A-768x755.png'),
(71, 16, 'MAD 451', 'Detnov addressable module.', '/assets/image/DETNOV IMG/MAD 451.png'),
(72, 16, 'MAD-401', 'Single input addressable module.', '/assets/image/DETNOV IMG/MAD-401.png'),
(73, 16, 'PGD 201', 'Detnov gas detection unit.', '/assets/image/DETNOV IMG/PGD 201.jpg'),
(74, 18, 'ACTIVE TRACK', 'Real-time guard tour and tracking system.', '/assets/image/EBS IMG/ACTIVE TRACK.png'),
(75, 18, 'ACTIVE VIEW', 'Security monitoring software interface.', '/assets/image/EBS IMG/ACTIVE VIEW.png'),
(76, 18, 'AT MOBILE', 'EBS mobile security application.', '/assets/image/EBS IMG/AT MOBILE.png'),
(77, 26, 'J200', 'FAAC traffic bollard J200.', '/assets/image/FAAC IMG/J200.jpg'),
(78, 26, 'J275', 'FAAC automatic bollard J275.', '/assets/image/FAAC IMG/J275.jpg'),
(79, 26, 'JS48', 'FAAC high-security bollard JS48.', '/assets/image/FAAC IMG/JS48.jpg'),
(80, 26, 'JS80', 'FAAC anti-terrorism bollard JS80.', '/assets/image/FAAC IMG/JS80.jpg'),
(81, 6, '1W-MILO-VIDEO-PANEL', 'Milo video door entry panel.', '/assets/image/FERMAX IMG/1W-MILO-VIDEO-PANEL.png'),
(82, 6, 'CITY PANEL DUOX', 'Duox system outdoor panel.', '/assets/image/FERMAX IMG/CITY PANEL DUOX.png'),
(83, 6, 'DUOX PLUS VEO', 'VEO monitor for Duox Plus systems.', '/assets/image/FERMAX IMG/DUOX PLUS VEO.png'),
(84, 6, 'ILOFT TELEPHONE', 'Compact audio indoor station.', '/assets/image/FERMAX IMG/ILOFT TELEPHONE.png'),
(85, 6, 'MARINE PANEL', 'Vandal-resistant outdoor panel.', '/assets/image/FERMAX IMG/MARINE PANEL.png'),
(86, 6, 'MILO-TOUCH-DIGITAL', 'Digital touch screen entry panel.', '/assets/image/FERMAX IMG/MILO-TOUCH-DIGITAL.png'),
(87, 6, 'NEO-7 monitor', '7-inch NEO high-tech monitor.', '/assets/image/FERMAX IMG/NEO-7 monitor.png'),
(88, 6, 'WIT_10in_HOME_AUT', '10-inch home automation monitor.', '/assets/image/FERMAX IMG/WIT_10in_HOME_AUT.png'),
(89, 17, 'Crime-Lite-Auto', 'Forensic light source for evidence.', '/assets/image/FOSTER IMG/Crime-Lite-Auto.jpg'),
(90, 17, 'Crime-Lite-X', 'High-intensity forensic light.', '/assets/image/FOSTER IMG/Crime-Lite-X.jpg'),
(91, 17, 'DCS-5', 'Digital fingerprint capture system.', '/assets/image/FOSTER IMG/DCS-5.jpg'),
(92, 17, 'VSC80i', 'Document examination system.', '/assets/image/FOSTER IMG/VSC80i.jpg'),
(93, 17, 'VSC-9000', 'Advanced document security analyzer.', '/assets/image/FOSTER IMG/VSC-9000.jpg'),
(94, 13, 'Argo 536', 'Gilardoni X-ray inspection unit.', '/assets/image/GILARDONI IMG/Argo 536.png'),
(95, 13, 'Argo 640 DV', 'Dual-view security scanner.', '/assets/image/GILARDONI IMG/Argo 640 DV.png'),
(96, 13, 'BREVA TRS', 'Breva tray return system.', '/assets/image/GILARDONI IMG/BREVA TRS.png'),
(97, 13, 'FEP 640 AMX', 'Multi-energy X-ray unit.', '/assets/image/GILARDONI IMG/FEP 640 AMX.png'),
(98, 13, 'FEP 640 XRAY', 'Standard checkpoint X-ray scanner.', '/assets/image/GILARDONI IMG/FEP 640 XRAY.png'),
(99, 13, 'FEP 1000 HC DV', 'Heavy-duty dual-view scanner.', '/assets/image/GILARDONI IMG/FEP 1000 HC DV.png'),
(100, 13, 'FEP CARGO', 'Large-scale cargo X-ray system.', '/assets/image/GILARDONI IMG/FEP CARGO.png'),
(101, 10, '4MP AcuSense Fixed Dome', '4MP dome with AI false alarm reduction.', '/assets/image/HIKVISION IMG/4MP AcuSense Fixed D...jpg'),
(102, 10, '8MP AcuSense Fixed Bullet', 'High-res 4K AI bullet camera.', '/assets/image/HIKVISION IMG/8MP AcuSense Fixed Bu...jpg'),
(103, 10, 'Acusense Series NVR', 'Deep learning video recorder.', '/assets/image/HIKVISION IMG/Acusense Series NVR.png'),
(104, 10, 'Network IR Speed Dome', 'PTZ camera with infrared night vision.', '/assets/image/HIKVISION IMG/Network IR Speed Dom...png'),
(105, 10, 'Series NVR', 'Reliable network video storage.', '/assets/image/HIKVISION IMG/Series NVR.png'),
(106, 10, 'TandemVu 4MP 32X', 'Dual-lens high-speed PTZ camera.', '/assets/image/HIKVISION IMG/TandemVu 4MP 32X Ne...png'),
(107, 2, 'Hirsch MX-1 Controller', 'Scalable access control processor.', '/assets/image/HIRSCH IMG/Hirsch MX-1 Controller.png'),
(108, 2, 'HIRSCH MxCONTROLLER', 'Professional access management unit.', '/assets/image/HIRSCH IMG/HIRSCH MxCONTROLLER.png'),
(109, 2, 'Hirsch Scramble Factor', 'Secure keypad authentication factor.', '/assets/image/HIRSCH IMG/Hirsch Scramble Factor.png'),
(110, 2, 'Hirsch ScramblePad Reader', 'Classic high-security keypad reader.', '/assets/image/HIRSCH IMG/Hirsch ScramblePad Rea...png'),
(111, 2, 'Utrust HF Key', 'High-frequency proximity key.', '/assets/image/HIRSCH IMG/Utrust HF Key.png'),
(112, 2, 'Utrust Proximity Credential', 'Contactless security access card.', '/assets/image/HIRSCH IMG/Utrust Proximity Creden...png'),
(113, 2, 'Utrust TS Readers', 'Next-gen touch screen readers.', '/assets/image/HIRSCH IMG/Utrust TS Readers.png'),
(114, 1, '30 Series IP Cameras', 'Entry-level professional IP cameras.', '/assets/image/HONEYWELL IMG/30 Series IP Cameras.png'),
(115, 1, '60 Series IP Cameras', 'High-performance outdoor/indoor cameras.', '/assets/image/HONEYWELL IMG/60 Series IP Cameras.png'),
(116, 1, '70 Series IP Cameras', 'Advanced AI-powered security cameras.', '/assets/image/HONEYWELL IMG/70 Series IP Cameras.png'),
(117, 1, 'Honeywell pro-watch', 'Enterprise security management software.', '/assets/image/HONEYWELL IMG/Honeywell pro-watch.png'),
(118, 1, 'Impact series cctv', 'Cost-effective high-definition monitoring.', '/assets/image/HONEYWELL IMG/Impact series cctv.png'),
(119, 1, 'Maxpro nvr', 'High-capacity network video recorder.', '/assets/image/HONEYWELL IMG/Maxpro nvr.png'),
(120, 1, 'WIN-PAK', 'Integrated access control software.', '/assets/image/HONEYWELL IMG/WIN-PAK.png'),
(121, 25, 'Bollards', 'High-impact perimeter security bollards.', '/assets/image/LEDA IMG/Bollards.png'),
(122, 25, 'Gates', 'Industrial grade automated gates.', '/assets/image/LEDA IMG/Gates.png'),
(123, 25, 'Securapost', 'Removable and fixed security posts.', '/assets/image/LEDA IMG/Securapost.png'),
(124, 3, 'BR600 SERIES', 'Heavy-duty barrier gate system.', '/assets/image/MAG IMG/BR600 SERIES.png'),
(125, 3, 'FLAP BARRIER', 'Fast-access pedestrian flap gate.', '/assets/image/MAG IMG/FLAP BARRIER.png'),
(126, 3, 'SWING BARRIER', 'Compact pedestrian swing gate.', '/assets/image/MAG IMG/SWING BARRIER.png'),
(127, 3, 'TT100 TRIPOD TURNSTILE', 'Waist-high tripod security turnstile.', '/assets/image/MAG IMG/TT100 TRIPOD TURNSTILE.png'),
(128, 24, 'Access-Barrier', 'Standard vehicle access barrier.', '/assets/image/MAGNETIC IMG/Access-Barrier.png'),
(129, 24, 'MPT-Full-Height-Turnstile', 'Maximum security perimeter turnstile.', '/assets/image/MAGNETIC IMG/MPT-Full-Height-Turnstile.png'),
(130, 24, 'Parking-Barrier', 'Optimized barrier for parking facilities.', '/assets/image/MAGNETIC IMG/Parking-Barrier.png'),
(131, 24, 'Toll-Barrier', 'High-speed barrier for toll collection.', '/assets/image/MAGNETIC IMG/Toll-Barrier.png'),
(132, 19, 'DirectKey', 'Mobile credential and Bluetooth access.', '/assets/image/ONITY IMG/DirectKey.png'),
(133, 19, 'HT22', 'Classic magnetic stripe guestroom lock.', '/assets/image/ONITY IMG/HT22.png'),
(134, 19, 'Onity Trillium', 'Next-generation RFID lock series.', '/assets/image/ONITY IMG/Onity Trillium.png'),
(135, 19, 'Serene', 'Ultra-slim designer electronic lock.', '/assets/image/ONITY IMG/Serene.png'),
(136, 20, 'E3041', 'Orbita electronic hotel card lock.', '/assets/image/ORBITA IMG/E3041.png'),
(137, 20, 'E4031', 'Orbita split-type smart lock.', '/assets/image/ORBITA IMG/E4031.png'),
(138, 20, 'Orbita Minibar', 'Absorption-style silent hotel minibar.', '/assets/image/ORBITA IMG/Orbita Minibar.png'),
(139, 20, 'Orbita Safe', 'In-room electronic hotel safe.', '/assets/image/ORBITA IMG/Orbita Safe.png'),
(140, 21, 'EVO192', '192-Zone control panel.', '/assets/image/PARADOX IMG/EVO192.png'),
(141, 21, 'K32LCD', '32-Character hardwired LCD keypad.', '/assets/image/PARADOX IMG/K32LCD.png'),
(142, 21, 'NV5', 'High-performance infrared motion detector.', '/assets/image/PARADOX IMG/NV5.png'),
(143, 21, 'Paradox IP150', 'Internet protocol reporting module.', '/assets/image/PARADOX IMG/Paradox IP150.png'),
(144, 21, 'PCS250', 'GPRS/GSM communicator module.', '/assets/image/PARADOX IMG/PCS250.png'),
(145, 21, 'TM70', '7-inch touchscreen security keypad.', '/assets/image/PARADOX IMG/TM70.png'),
(146, 9, 'Esprit Compact', 'Hardened PTZ camera system.', '/assets/image/PELCO IMG/Esprit Compact.png'),
(147, 9, 'ExSite Enhanced 2', 'Explosion-proof camera system.', '/assets/image/PELCO IMG/ExSite Enhanced 2.png'),
(148, 9, 'Sarix Professional 3', 'Fixed IP camera for versatile security.', '/assets/image/PELCO IMG/Sarix Professional 3.png'),
(149, 9, 'Sarix Thermal Enhanced', 'Advanced thermal imaging camera.', '/assets/image/PELCO IMG/Sarix Thermal Enhanced.png'),
(150, 9, 'Spectra Enhanced 7', 'High-speed dome PTZ camera.', '/assets/image/PELCO IMG/Spectra Enhanced 7.png'),
(151, 9, 'VideoXpert', 'Video management platform.', '/assets/image/PELCO IMG/VideoXpert.png'),
(152, 23, 'Quick Alert Fire Control', 'Centralized fire alarm control unit.', '/assets/image/QUICK ALERT IMG/Quick Alert Fire Control.png'),
(153, 23, 'Quick Alert Heat Detector', 'Rapid-response heat sensor.', '/assets/image/QUICK ALERT IMG/Quick Alert Heat Detector.png'),
(154, 23, 'Quick Alert Smoke Detector', 'Photoelectric smoke detection unit.', '/assets/image/QUICK ALERT IMG/Quick Alert Smoke Detector.png'),
(155, 4, 'i-Box', 'Intelligent key locker system.', '/assets/image/UBERGARD IMG/i-Box.png'),
(156, 4, 'key-station', 'Modular key management station.', '/assets/image/UBERGARD IMG/key-station.png'),
(157, 4, 'smart-locker', 'Electronic asset and parcel locker.', '/assets/image/UBERGARD IMG/smart-locker.png'),
(158, 28, 'Vesda Family', 'Industrial aspirating smoke detector.', '/assets/image/VESDA IMG/Vesda.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_brands`
--
ALTER TABLE `category_brands`
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category_brands`
--
ALTER TABLE `category_brands`
  ADD CONSTRAINT `category_brands_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `category_brands_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
