-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2026 at 04:53 AM
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
-- Database: `guard_db`
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
-- Table structure for table `brand_products`
--

CREATE TABLE `brand_products` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(100) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `detail_route` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand_products`
--

INSERT INTO `brand_products` (`id`, `brand_name`, `category_name`, `title`, `description`, `image_path`, `detail_route`) VALUES
(1, 'Honeywell', 'Access Control System', 'HON-FIN4000AC-100K: COMPACT FINGERPRINT DEVICE', 'A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.', '/assets/image/Honeywell/HON-FIN4000AC-100K.jpg', '/our-products/honeywell/fin4000ac'),
(2, 'Honeywell', 'Access Control System', 'HON-FIN4000MIK-100K: COMPACT FINGERPRINT DEVICE', 'A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.', '/assets/image/Honeywell/HON-FIN4000MIK-100K-COMPACT.jpg', '/our-products/honeywell/fin4000mik'),
(3, 'Honeywell', 'Access Control System', 'OMNIPROX: PROXIMITY CARD READER', 'A sleek, compact proximity reader that has a reliable and consistent read range. It has added security to avoid tampering and system compromise.', '/assets/image/Honeywell/OMNIPROX.jpg', '/our-products/honeywell/omniprox'),
(4, 'Honeywell', 'Access Control System', 'LOBBYWORKS™ CREDENTIALS: CONTACTLESS SMART CARD', 'A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.', '/assets/image/Honeywell/LOBBYWORKS CREDENTIALS CONTACTLESS.jpg', '/our-products/honeywell/lobbyworks-credentials'),
(5, 'Honeywell', 'Access Control System', 'Pro-Watch™ Integrated Security Suite', 'A comprehensive security system that helps secure people, property, and assets. It can monitor access controls, video, and intrusion.', '/assets/image/Honeywell/PRO-WATCH INTEGRATED.jpg', '/our-products/honeywell/pro-watch'),
(6, 'Honeywell', 'Access Control System', 'LobbyWorks™ Visitor Management Systems', 'A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.', '/assets/image/Honeywell/LOBBYWORKS-VISITOR.jpg', '/our-products/honeywell/lobbyworks-visitor'),
(7, 'Honeywell', 'Access Control System', 'OmniProx™ Credentials: Smart Card Readers', 'A contactless smart card reader that offers superb reliability, consistent read range, and ease of installation. Supports biometric features.', '/assets/image/Honeywell/OMNIPROX CREDENTIALS.jpg', '/our-products/honeywell/omniprox-credentials'),
(8, 'Honeywell', 'Access Control System', 'OmniAssure™ 2.0 XS Multismart Readers', 'Provides a flexible range of access control readers for reading high frequency and low frequency credentials.', '/assets/image/Honeywell/OMNIASSURE.jpg', '/our-products/honeywell/omniassure'),
(9, 'Honeywell', 'Access Control System', 'OmniProx™ Credentials: Proximity Card Reader', 'A sleek, compact proximity reader that has a reliable and consistent read range with added security features.', '/assets/image/Honeywell/OMNIPROX.jpg', '/our-products/honeywell/omniprox-proximity'),
(10, 'Honeywell', 'Access Control System', 'DR4200 Series: Digital Proximity Readers', 'A cost-effective and high-performing proximity access that offers the longest ranges available. It has a fast read time.', '/assets/image/Honeywell/DIGIREADER-DR4200-SERIES.jpg', '/our-products/honeywell/dr4200-series'),
(11, 'Honeywell', 'Access Control System', 'HON-FIN400MIK-100K: Compact Fingerprint Device', 'A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints.', '/assets/image/Honeywell/HON-FIN400MIK-100K.jpg', '/our-products/honeywell/fin400mik'),
(12, 'Honeywell', 'Access Control System', 'HON-FIN400AC-100K: Compact Fingerprint Device', 'A slender, compact fingerprint device that can provide a high level of security for your property and can effectively identify fake fingerprints.', '/assets/image/Honeywell/HON-FIN4000AC-100K-COMPACT-FINGERPRINT.jpg', '/our-products/honeywell/fin400ac'),
(13, 'Honeywell', 'Access Control System', 'PW6101 Series: Single Door PoE Intelligent Controller', 'A high-performance and cost-effective controller-reader module capable of securing single door access. It is configurable for either Wiegand or OSDP.', '/assets/image/Honeywell/PW-6000 SERIES.jpg', '/our-products/honeywell/pw6101-series'),
(14, 'Honeywell', 'Access Control System', 'PW-Series Access Modules', 'The PW-Series family of access control modules are controlled by and connected to the intelligent control module.', '/assets/image/Honeywell/PW-SERIES.jpg', '/our-products/honeywell/pw-series'),
(15, 'Honeywell', 'Access Control System', 'PRO3200 Professional Series Access Modules', 'Designed to work without a PC, the PRO3200 series is a customizable access control that provides real-time processing.', '/assets/image/Honeywell/PRO3200.jpg', '/our-products/honeywell/pro3200-series'),
(16, 'Honeywell', 'Access Control System', 'OmniProx™ Credentials: Contactless Proximity Card', 'An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range.', '/assets/image/Honeywell/OMNIPROX-ISO-CARD.jpg', '/our-products/honeywell/contactless-proximity'),
(17, 'Honeywell', 'Access Control System', 'OmniClass™ Credentials: Contactless Smart Card', 'A laminated PVC card that utilizes RFID technology and has an excellent contactless range.', '/assets/image/Honeywell/OMNICLASS-CREDENTIALS.jpg', '/our-products/honeywell/contactless-smart'),
(18, 'Honeywell', 'Access Control System', 'MF-01 Mifare Proximity Cards', 'A contactless access control fit for student and employee IDs. It also helps in attendance management.', '/assets/image/Honeywell/MF-01.jpg', '/our-products/honeywell/mifare'),
(19, 'Hirsch', 'Access Control System', 'uTrust TS Contact Smart Card Readers', 'Delivers upgraded security and flexibility for users and PACS, combining high-assurance smart card technology.', '/assets/image/Hirsch/Utrust TS Cards.png', '/our-products/hirsch/utrust-ts-contact-smart-card-readers'),
(20, 'Hirsch', 'Access Control System', 'uTrust TS Government Readers', 'Provides a contactless, high-secure, and compliant ID management solution for federal agencies and contractors.', '/assets/image/Hirsch/Utrust TS Government.png', '/our-products/hirsch/utrust-ts-government-readers'),
(21, 'Hirsch', 'Access Control System', 'uTrust TS Readers', 'Delivers high performance and maximum flexibility for diverse access control needs. Support for current and future technology.', '/assets/image/Hirsch/Utrust TS Readers.png', '/our-products/hirsch/utrust-ts-readers'),
(22, 'Hirsch', 'Access Control System', 'Hirsch TS ScramblePad SC', 'A high-security keypad that features a patented scrambling function, incorporating a contact smart card reader.', '/assets/image/Hirsch/Hirsch TS ScramblePad SC.png', '/our-products/hirsch/hirsch-ts-scramblepad-sc'),
(23, 'Hirsch', 'Access Control System', 'Hirsch Scramble Pad Readers', 'A high-security keypad with patented scrambling function to avoid pattern recognition and prevent code identification.', '/assets/image/Hirsch/Hirsch ScramblePad Readers.png', '/our-products/hirsch/hirsch-scramble-pad-readers'),
(24, 'Hirsch', 'Access Control System', 'Hirsch Scramble Factor', 'An advanced fingerprint reader with LCD touchscreen keypad designed for high-security environments.', '/assets/image/Hirsch/Hirsch Scramble Factor.png', '/our-products/hirsch/hirsch-scramble-factor'),
(25, 'Hirsch', 'Access Control System', 'MEB/CB Memory Expansion Board', 'Helps expand the memory capacity of controllers. Increases the number of users and events stored locally.', '/assets/image/Hirsch/MebCB Memory Expansion Board.png', '/our-products/hirsch/meb-cb-memory-expansion-board'),
(26, 'Hirsch', 'Access Control System', 'AEB8 Alarm Expansion Board', 'Used for a variety of security monitoring, this device provides additional line model inputs on board.', '/assets/image/Hirsch/AEB8-Alarm-Expansion-Board.jpg', '/our-products/hirsch/aeb8-alarm-expansion-board'),
(27, 'Hirsch', 'Access Control System', 'Hirsch M64 Controller', 'Provide a variety of access control, high-security alarm monitoring, relay control outputs, and programmable logic.', '/assets/image/Hirsch/AEB8-Alarm-Expansion-Board.jpg', '/our-products/hirsch/hirsch-m64-controller'),
(28, 'Hirsch', 'Access Control System', 'Hirsch Mx-1-ME Controller', 'A fully integrated, single-door access control unit designed for high-security standalone or networked systems.', '/assets/image/Hirsch/Hirsch MX-1-ME.png', '/our-products/hirsch/hirsch-mx-1-me-controller'),
(29, 'Hirsch', 'Access Control System', 'Hirsch Mx-1 Controller', 'An access control with an integrated Ethernet manager to support multiple high-end reader technologies.', '/assets/image/Hirsch/HIRSCH MxCONTROLLER.png', '/our-products/hirsch/hirsch-mx-1-controller'),
(30, 'Hirsch', 'Access Control System', 'Hirsch Mx Controller', 'An access control unit with integrated door modules. It provides a highly versatile and cost-effective system.', '/assets/image/Hirsch/Hirsch MX-1 Controller.png', '/our-products/hirsch/hirsch-mx-controller'),
(31, 'Hirsch', 'Access Control System', 'SNIB3 Secure Network Interface Board', 'A leading edge communication device that provides TCP/IP version 6, Gigabit Ethernet, and AES 256 bit encryption.', '/assets/image/Hirsch/snib3_onWhite-768x1152.jpg', '/our-products/hirsch/snib3-secure-network-interface-board'),
(32, 'Hirsch', 'Access Control System', 'RS-485 Relay Expansion Board', 'Provides fast, two-way OSDP communication and processing for PIV Certificates.', '/assets/image/Hirsch/RREB-onWhite-768x1152.jpg', '/our-products/hirsch/rs-485-relay-expansion-board'),
(33, 'Hirsch', 'Access Control System', 'REB8 Relay Expansion Board', 'Expands the control relay capacity of M-Series Controllers with 8 additional dry relay outputs.', '/assets/image/Hirsch/RREB-onWhite-768x1152.jpg', '/our-products/hirsch/reb8-relay-expansion-board'),
(34, 'Hirsch', 'Access Control System', 'Cirrus Cloud Access Control', 'A secure, cloud-based electronic access control and security management solution.', '/assets/image/placeholder-cloud.png', '/our-products/hirsch/cirrus-cloud-access-control'),
(35, 'Hirsch', 'Access Control System', 'UTrust UHF Credentials', 'An ultra high frequency smart card designed for long distance reading.', '/assets/image/Hirsch/Utrust UHF Credentials.png', '/our-products/hirsch/utrust-uhf-credentials'),
(36, 'Hirsch', 'Access Control System', 'UTrust TS Cards', 'A high-frequency smart card designed for contactless access to offices and similar properties.', '/assets/image/Hirsch/Utrust TS Cards.png', '/our-products/hirsch/utrust-ts-cards'),
(37, 'Hirsch', 'Access Control System', 'UTrust HF Key Fob', 'An easy-to-bring physical access commonly used for gym facilities.', '/assets/image/Hirsch/Utrust HF Key.png', '/our-products/hirsch/utrust-hf-key-fob'),
(38, 'Hirsch', 'Access Control System', 'UTrust Wristband Proximity', 'Allows for seamless access and management of amusement parks, gyms, and other active facilities.', '/assets/image/Hirsch/Utrust Wristband Proximity.png', '/our-products/hirsch/utrust-wristband-proximity'),
(39, 'Hirsch', 'Access Control System', 'uTrust Proximity Credentials: Mag Stripe Card', 'A contactless smart card with mag stripe, suitable for office access.', '/assets/image/Hirsch/Utrust Proximity.png', '/our-products/hirsch/utrust-proximity-credentials-mag-stripe-card'),
(40, 'Hirsch', 'Access Control System', 'uTrust Proximity Credentials (General)', 'A series of cost-effective contactless credentials that come in various formats.', '/assets/image/Hirsch/Utrust Proximity Credentials.png', '/our-products/hirsch/utrust-proximity-credentials'),
(41, 'Mag', 'Access Control System', 'TB01 Touchless Button', 'With a simple and compact design, this device allows exit without needing to touch any button via infrared sensor.', '/assets/image/Mag/TB01 Touchless.png', '/our-products/mag/tb01'),
(42, 'Mag', 'Access Control System', 'FR330 Face Recognition Reader', 'A powerful face recognition reader with full HD display for efficient working and fast recognition rates.', '/assets/image/Mag/FR330 FACE RECOGNITION.png', '/our-products/mag/fr330'),
(43, 'Mag', 'Access Control System', 'FR320 Face Recognition Reader', 'A dynamic face recognition reader with ultra-fast technical tracking for accurate face detection.', '/assets/image/Mag/FR320 FACE RECOGNITION.png', '/our-products/mag/fr320'),
(44, 'Mag', 'Access Control System', 'FR300 Face Recognition Reader', 'A mid-level face recognition reader that features basic and reliable outdoor access with edge-core tech.', '/assets/image/Mag/FR300 FACE RECOGNITION.png', '/our-products/mag/fr300'),
(45, 'Mag', 'Access Control System', 'DFA Fingerprint With Optical Sensor', 'A door access control system that uses high-performance fingerprint reader technology for a robust optical sensor.', '/assets/image/Mag/DF1A FINGERPRINT WITH OPTICAL SENSOR.png', '/our-products/mag/DF1A'),
(46, 'Mag', 'Access Control System', 'CDUE133L UHF & EM Hybrid Card', 'A dual frequency tag compatible with UHF and EM range readers. Design allows for both high and low frequency.', '/assets/image/Mag/CDULI33L UHF & EM HYBRID.png', '/our-products/mag/CDUE133L'),
(47, 'Mag', 'Access Control System', 'CDUE130L Dual Frequency UHF & EM Hybrid Card', 'A dual frequency keycard with 0.84mm thickness and can be used for AR300U mid range readers.', '/assets/image/Mag/CDUE130L DUAL FREQUENCY UHF.png', '/our-products/mag/CDUE130L'),
(48, 'Mag', 'Access Control System', 'CDS18 EM Proximity Card', 'A 125Khz proximity card with 1.8mm thickness. Printed wiegand number makes programming card to system easier.', '/assets/image/Mag/CDS18 EM PROXIMITY CARD.png', '/our-products/mag/CDS18'),
(49, 'Mag', 'Access Control System', 'AR401RO16 16-Channel Digital Output Module', 'Designed to accommodate up to 16 channels, this card reader can connect up to 16 lift levels for elevator control.', '/assets/image/Mag/AR401RO16 16-CHANNEL.png', '/our-products/mag/AR401RO16'),
(50, 'Mag', 'Access Control System', 'AR837EF Direct TCPIP Fingerprint with LCD & Keypad Panel', 'A contemporary door access that has a manual keypad, LCD panel, and fingerprint biometric access.', '/assets/image/Mag/AR837EF DIRECT TCPIP FINGERPRINT.png', '/our-products/mag/AR837EF'),
(51, 'Mag', 'Access Control System', 'AR837E Direct TCPIP LCD and Keypad Panel', 'A metallic and compact door access with manual keypad and large LCD design typically installed at the door.', '/assets/image/Mag/AR837E DIRECT TCPIP LCD AND KEYPAD.png', '/our-products/mag/AR837E'),
(52, 'Mag', 'Access Control System', 'AR725E Direct TCPIP Illuminated Touch Keypad Panel', 'A shiny silverblack door access with built-in touchpad and patented anti-vibration relay.', '/assets/image/Mag/AR725E DIRECT TCPIP ILLUMINATED.png', '/our-products/mag/AR725E'),
(53, 'Mag', 'Access Control System', 'AR723U Soyal Wiegand Readers', 'Minimalistic design allows it to look simple but elegant. Designed for anti-passback function as an exit reader.', '/assets/image/Mag/AR723U SOSYAL WIEGAND READERS .png', '/our-products/mag/AR723U'),
(54, 'Mag', 'Access Control System', 'AR727H Standard Controller with Built-In Reader', 'A cost-effective door access with manual keypad, LCD screen, and easy to use software for turnstiles.', '/assets/image/Mag/AR727H STANDARD CONTROLLER.png', '/our-products/mag/AR727H'),
(55, 'Mag', 'Access Control System', 'AR721H Basic Controller with Built-In Reader', 'A cost-effective and compact door access with manual keypad, efficiently optimized for low budget systems.', '/assets/image/Mag/AR721H BASIC CONTROLLER.png', '/our-products/mag/AR721H'),
(56, 'Mag', 'Access Control System', 'AR327H Vandal Resistant Illuminated Touch-Panel Keypad', 'A water and vandal-resistant door access that has a built-in touchpad and can even read proximity cards.', '/assets/image/Mag/AR327H VANDAL RESISTANT.png', '/our-products/mag/AR327H'),
(57, 'Mag', 'Access Control System', 'AR331HT Weather Proof Illuminated Touch-Panel Keypad', 'A weatherproof-card door access with built-in touchpad and can read proximity cards for contactless access.', '/assets/image/Mag/AR331HT WEATHER PROOF.png', '/our-products/mag/AR331HT'),
(58, 'Mag', 'Access Control System', 'AR331HS Weather Proof Illuminated Touch-Panel Keypad', 'With a sleek design and silverblack color, this contactless door access can read EM or Mifare proximity cards.', '/assets/image/Mag/AR331HS WEATHER PROOF ILLUMINATED.png', '/our-products/mag/AR331HS'),
(59, 'Mag', 'Access Control System', 'AR331U Weather Proof Illuminated Touch-Panel Keypad', 'Metallic SilverBlack color concept further enhances the modern contemporary impression of your security setup.', '/assets/image/Mag/AR331U WEATHER PROOF.png', '/our-products/mag/AR331U'),
(60, 'Mag', 'Access Control System', 'AR321H Vandal Resistant Illuminated Touch-Panel Keypad', 'A compact, touchpad door access with anti-vandalism design to prevent damage or tampering.', '/assets/image/Mag/AR321H VANDAL RESISTANT.png', '/our-products/mag/AR321H'),
(61, 'Ubergard', 'Access Control System', 'iKLAS Software CCMS', 'A management platform and access control for keys management. Provides a single platform for planning and monitoring.', '/assets/image/Ubergard/Software-CCMS.png', '/our-products/ubergard/software-ccms'),
(62, 'Ubergard', 'Access Control System', 'iKLAS Keys Management System', 'An intelligent Key Lock Application System (iKLAS) that protects and tracks keys to ensure they are managed securely.', '/assets/image/Ubergard/IKLAS KEYS MANAGEMENT.png', '/our-products/ubergard/keys-management-system'),
(63, 'Ubergard', 'Access Control System', 'iKLAS Gen 5 Touchscreen', 'A 7″ Colour Touchscreen incorporating a contactless card reader and RFID key-tag reader for the iKLAS System.', '/assets/image/Ubergard/IKLAS GEN 5 TOUCHSCREEN.png', '/our-products/ubergard/gen5-touchscreen'),
(64, 'Ubergard', 'Access Control System', 'TBS 3D AIR 22', 'A unique touchless biometric terminal and the world’s first to introduce 3D finger-scanning. Supports PoE.', '/assets/image/Ubergard/TBS-AIR-22.png', '/our-products/ubergard/3d-air-22'),
(65, 'Ubergard', 'Access Control System', 'TBS AIR 12', 'A touchless biometric scanner featuring advanced 3D finger-scanning technology for fast-throughput identification.', '/assets/image/Ubergard/TBS-AIR-12.png', '/our-products/ubergard/air-12'),
(66, 'Ubergard', 'Access Control System', 'TBS 3D FLY', 'A true on-the-fly experience delivering high-speed identification through a smooth and seamless hand-scanning process.', '/assets/image/Ubergard/TBS 3D-Fly.png', '/our-products/ubergard/3d-fly'),
(67, 'Alarm', 'Access Control System', 'ADC-AC-ET Access Control Readers', 'A series of multi-technology, contactless access control to properly secure your properties or business. Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution.', '/assets/image/Alarm/ADC-AC-ET ACCESS.jpg', '/our-products/alarm/access-control-readers'),
(68, 'Alarm', 'Access Control System', 'ADC-AC-CARD and ADC-AC-FOB Smart Credentials', 'Secure your properties or business through smart cards and keyfobs designed to work with Alarm.com readers.', '/assets/image/Alarm/ADC-AC-CARD.png', '/our-products/alarm/smart-credentials'),
(69, 'Alarm', 'Access Control System', 'ADC-AC-X1100-4PSE Four Door Controller and Power Kit', 'Secure your expansion modules and door controllers in this secured kit. Seamlessly integrates with the Smarter Access Control platform.', '/assets/image/Alarm/ADC-AC-X1100-4PSE.png', '/our-products/alarm/four-door-controller'),
(70, 'Alarm', 'Access Control System', 'ADC-AC-X1100 Door Controller', 'This device supports two card readers with four relay outputs and four programmable inputs. A powerful solution for commercial properties.', '/assets/image/Alarm/ADC-AC-X1100.png', '/our-products/alarm/door-controller'),
(71, 'Alarm', 'Access Control System', 'ADC-AC-X300 Output Control Expansion Module', 'Designed to work with X1100 Door Controllers, this expansion module adds 12 additional outputs and two additional outputs.', '/assets/image/Alarm/ADC-AC-X300.png', '/our-products/alarm/output-control-expansion'),
(72, 'Alarm', 'Access Control System', 'ADC-AC-X200 Input Monitor Expansion Module', 'Designed to work with X1100 Door Controllers, this expansion module adds support for 16 additional inputs and two relay outputs.', '/assets/image/Alarm/ADC-AC-X200.png', '/our-products/alarm/input-monitor-expansion'),
(73, 'Alarm', 'Access Control System', 'ADC-AC-X100 Two Reader Expansion Module', 'Designed to work with X1100 Door Controllers, this expansion module adds support for two additional readers and four programmable inputs.', '/assets/image/Alarm/ADC-AC-X100 TWO.jpg', '/our-products/alarm/two-reader-expansion'),
(74, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'WIT 10” HOME AUT. MONITOR POE BLACK MEET', 'With sleek black design and large 10-inch touchscreen display, this device offers a comprehensive solution for video door entry and home control automation.', '/assets/image/Fermax/WIT_10in_HOME_AUT.png', '/our-products/fermax/home-aut-monitor'),
(75, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'WIT 7” MONITOR POE BLACK MEET', 'A functional video door entry solution with Power over Ethernet (POE). It has a sleek black design, a 7-inch touch display, and clear video communication.', '/assets/image/Fermax/WIT_7 monitor.png', '/our-products/fermax/monitor-poe-black-meet'),
(76, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'NEO 7” MONITOR POE WHITE MEET', 'This modern and easy-to-install video door entry solution has a 7-inch color touchscreen display for easy operation and intuitive control.', '/assets/image/Fermax/NEO-7 monitor.png', '/our-products/fermax/monitor-poe-white-meet'),
(77, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'MILO TOUCH DIGITAL VIDEO PANEL', 'A combination of sleek design and advanced functionality, this video & audio door panel features a 7-inch touchscreen.', '/assets/image/Fermax/MILO-TOUCH-DIGITAL.png', '/our-products/fermax/milo-touch-digital'),
(78, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'MEET DESKTOP GUARD UNIT', 'A versatile intercom system with 7-inch touchscreen. It is designed for concierge desks or guard posts for easier communication with visitors.', '/assets/image/Fermax/MEET-DESKTOP-GUARD.png', '/our-products/fermax/meet-desktop-guard'),
(79, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'MARINE DIGITAL VIDEO PANEL MEET', 'This vandal-proof door and video entry system has a stainless steel finish to withstand harsh weather conditions.', '/assets/image/Fermax/MARINE-DIGITAL-VIDEO.png', '/our-products/fermax/marine-digital-video-panel'),
(80, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'KIN TOUCH PANEL MEET', 'This video & audio panel features a 7-inch capacitive touch screen for easy operation. It offers clear video and audio communication.', '/assets/image/Fermax/KIN_TOUCH_PANEL_MEET.png', '/our-products/fermax/kin-touch-panel'),
(81, 'Fermax', 'Audio-Video Intercom & PA-BGM', '1W MILO VIDEO PANEL WITH PROX MEET', 'More than just a video & audio door entry, this sleek and compact system has a built-in proximity reader for keyless entry.', '/assets/image/Fermax/1W-MILO-VIDEO-PANEL.png', '/our-products/fermax/milo-video-panel-with-prox-meet'),
(82, 'Fermax', 'Audio-Video Intercom & PA-BGM', '1/W MILO VIDEO PANEL BLACK MEET', 'A video & audio door entry system with compact design and black finish. It is designed for single-family homes and small buildings.', '/assets/image/Fermax/1W-MILO-VIDEO-PANEL-BLACK-MEET.png', '/our-products/fermax/milo-video-panel-black-meet'),
(83, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'DUOX PLUS VEO TELEPHONE', 'A complete solution for homes and small buildings, this audio door entry system allows clear two-way communication with visitors.', '/assets/image/Fermax/TELEFONOVEODUO.png', '/our-products/fermax/duox-plus-veo'),
(84, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'iLOFT TELEPHONE VDS EXTRA', 'A minimalist and highly-functional audio door entry system that offers hands-free communication and high-quality sound.', '/assets/image/Fermax/ILOFT TELEPHONE.png', '/our-products/fermax/iloft-telephone-vds'),
(85, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'DUOX PLUS VEO WIFI 4.3” MONITOR', 'Suitable for homes and offices, this simple and easy to use video entry monitor has a built-in- WIFI for mobile access control.', '/assets/image/Fermax/DUOX PLUS VEO.png', '/our-products/fermax/duox-plus-veo-wifi'),
(86, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'MARINE PANEL DUOX PLUS ST1 AP101', 'Made of 2.5mm thick stainless steel, this weather-resistant video door entry panel is designed for outdoor use.', '/assets/image/Fermax/MARINE PANEL.png', '/our-products/fermax/marine-panel-duox-plus'),
(87, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'CITY PANEL DUOX PLUS S1 AP201', 'This versatile outdoor panel for video door entry systems offers hands-free communication and wide-angle color camera.', '/assets/image/Fermax/CITY PANEL.png', '/our-products/fermax/city-panel-duox-plus-s1ap201'),
(88, 'Fermax', 'Audio-Video Intercom & PA-BGM', 'CITY PANEL DUOX PLUS S1 CP101', 'A compact and stylish outdoor panel for video door entry systems. It is easy to install and allows for two-way communication.', '/assets/image/Fermax/CITY PANEL DUOX.png', '/our-products/fermax/city-panel-duox-plus-s1cp101'),
(89, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AFLS 10H SC W: Cabinet Speaker', 'Designed specifically to provide reliable voice signal transmission under indoor conditions. Provides clear IP cabinet loudspeaker audio.', '/assets/image/Commend/AFLC 10H SCW CABINET.png', '/our-products/commend/cabinet-speaker'),
(90, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AFLS 10H PW: IP Projector Speaker', 'IP projector loudspeaker, designed specifically for Public Address in buildings and halls for reliable voice signal transmission.', '/assets/image/Commend/AFLS10HPW PROJECTOR.png', '/our-products/commend/projector-speaker'),
(91, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AFLS 10H HG: IP Horn Speaker', 'A Public Address loudspeaker designed for rough, industrial conditions such as industrial sites and railway stations.', '/assets/image/Commend/AFLS10H IP HORN.png', '/our-products/commend/horn-speaker'),
(92, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AFLS 10H CW: IP Ceiling Speaker', 'This fitted loudspeaker is designed for installation in drywall ceilings and high-end commercial buildings.', '/assets/image/Commend/AFLS10HCW IP CEILING.png', '/our-products/commend/ceiling-speaker'),
(93, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AF 500 – 500 Watt Amplifier', 'A 500 Watt IP amplifier with metal housing, 1U. Provides high output range and various connections from microphone to relay.', '/assets/image/Commend/AF-500 WATT.png', '/our-products/commend/watt-amplifier-500'),
(94, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AF 250 – 250 Watt Amplifier', 'A 250 Watt IP amplifier with metal housing. Provides high output range and versatile connectivity for PA systems.', '/assets/image/Commend/AF-250-HD-768x380.png', '/our-products/commend/watt-amplifier-250'),
(95, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AF 125 – 125 Watt Amplifier', 'A 125 Watt amplifier with metal housing. Ideal for mid-sized zones requiring reliable IP audio amplification.', '/assets/image/Commend/AF-125-HD-768x380.png', '/our-products/commend/watt-amplifier-125'),
(96, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AF 50 – 50 Watt Amplifier', 'A 50 Watt amplifier with polycarbonate housing. Universally suitable for any size installation with high output range.', '/assets/image/Commend/AF-50-HD-768x380.png', '/our-products/commend/watt-amplifier-50'),
(97, 'Commend', 'Audio-Video Intercom & PA-BGM', 'AF 20 – 20 Watt Amplifier', 'A 20 Watt amplifier with compact design. Ideal for decentralized, cable-saving installation next to PA loudspeakers.', '/assets/image/Commend/AF-20-HD-768x380.png', '/our-products/commend/watt-amplifier-20'),
(98, 'Webgate', 'CCTVs', 'NT4100PT-IR-Z3.7W Intelligent Network Camera', 'A high-security pan-tilt-zoom camera with 37x Optical Zoom. It has reliable results even in low-light environments. Features a 1/1.8″ progressive scan CMOS.', '/assets/image/Webgate/NT4100PT-IR-Z37W.png', '/our-products/webgate/intelligent-network-camera-z3'),
(99, 'Webgate', 'CCTVs', 'NT4100PT-IR-Z2.5W Intelligent Network Camera', 'A high-security pan-tilt-zoom camera with 25x Optical Zoom. Reliable results even in low-light environments with 1/2.7″ progressive scan CMOS.', '/assets/image/Webgate/NT4100PT-IR-Z25W.png', '/our-products/webgate/intelligent-network-camera-z2'),
(100, 'Webgate', 'CCTVs', 'NK1080D-IR30-AF Network Camera', 'This high-security surveillance camera has Internal IR Distance of 40M and Wide Dynamic Range. Utilizes a 2.1Megapixel Sony STARVIS Sensor.', '/assets/image/Webgate/NK1080D-IR30-AF.png', '/our-products/webgate/nk1080d-ir30-af'),
(101, 'Webgate', 'CCTVs', 'NK1080D-F2.0 Network Camera', 'A high-performance surveillance system with 3D Digital Noise Reduction to improve quality of images and Sony STARVIS Sensor.', '/assets/image/Webgate/NK1080D-F2-0.png', '/our-products/webgate/nk1080d-f2'),
(102, 'Webgate', 'CCTVs', 'NE5100VD-SIR2-AF Network Camera', 'A 5MP surveillance system with motorized lens and basic video analytics. Supports H.265, H.264, and MJPEG compression.', '/assets/image/Webgate/NE5100VD-SIR2-AF.png', '/our-products/webgate/ne5100vd-sir2'),
(103, 'Webgate', 'CCTVs', 'NE5100VD-SIR1-F2.8 Network Camera', 'This surveillance system has a 5MP camera and basic video analytics ideal for outdoor installation. High resolution 5MP imaging.', '/assets/image/Webgate/NE5100VD-SIR1-F2.8.png', '/our-products/webgate/ne5100cd-sir1'),
(104, 'Webgate', 'CCTVs', 'NE5100ED-SIR1-F2.8 Network Camera', 'A surveillance system with 5MP camera and basic video analytics to detect humans or vehicles crossing designated areas.', '/assets/image/Webgate/NE5100ED-SIR1-F2.8.png', '/our-products/webgate/ne5100ed-sir1'),
(105, 'Webgate', 'CCTVs', 'NE2100ED-SIR2-AF Network Camera', 'A surveillance system with motorized lens and basic video analytics to detect humans or vehicles crossing designated areas at 1080P.', '/assets/image/Webgate/NE2100ED-SIR2-AF.png', '/our-products/webgate/ne2100ed-sir2'),
(106, 'Webgate', 'CCTVs', 'NK1080BL-IR48-AF Network Camera', 'A high-security surveillance system that provides clear images in low light condition using Sony STARVIS technology.', '/assets/image/Webgate/NK1080BL-IR48-AF-768x508.png', '/our-products/webgate/nk1080bl-ir48'),
(107, 'Webgate', 'CCTVs', 'NK5100BL-IR42-F.36 AI Network Camera', 'A surveillance system that has an AI/deep-learning engine that detects objects, intrusions, and even line crossing.', '/assets/image/Webgate/NK5100BL-IR42-F3.6-HD-768x768.png', '/our-products/webgate/nk5100bl'),
(108, 'Pelco', 'CCTVs', 'Ulisee Enhanced PTZ 2 Series', 'A high-security camera built for outdoor environments while still providing high-resolution video. Ideal for mission-critical applications.', '/assets/image/Pelco/Ulisse-Enhanced-PTZ-2.png', '/our-products/pelco/ulisee-enhanced'),
(109, 'Pelco', 'CCTVs', 'Spectra Enhanced 8 PTZ Camera', 'This pan-tilt-zoom (PTZ) camera can provide fast updates when human activity or vehicle is detected within the property.', '/assets/image/Pelco/Spectra-Enhanced-8-Series.png', '/our-products/pelco/spectra-enhanced'),
(110, 'Pelco', 'CCTVs', 'Esprit Anti-Corrosion Bispectral PTZ', 'Designed for environments with harsh conditions, this corrosion-resistant camera provides visual and thermal imaging.', '/assets/image/Pelco/Esprit Anti-Corrosion Bispectral PTZ.png', '/our-products/pelco/esprit-anti-corrosion'),
(111, 'Pelco', 'CCTVs', 'Sarix Multi Enhanced Camera', 'This camera delivers multi-directional coverage from a single vantage point helping reduce blind spots significantly.', '/assets/image/Pelco/Sarix-Multi-Enhanced Camera.png', '/our-products/pelco/sarix-multi-enhanced'),
(112, 'Pelco', 'CCTVs', 'Optera IMM Series with SureVision 2.0', 'A panoramic surveillance camera that enables users to zoom in for detail and provide a seamless viewing experience.', '/assets/image/Pelco/Optera IMM Series.png', '/our-products/pelco/optera-imm-series'),
(113, 'Pelco', 'CCTVs', 'Pelco Fisheye Camera', 'A surveillance camera that provides a 360-degree view of the surrounding to avoid any blind spots with AI analytics.', '/assets/image/Pelco/Pelco Fisheye Camera.png', '/our-products/pelco/pelco-fisheye-camera'),
(114, 'Pelco', 'CCTVs', 'Sarix Value Series IR Environmental Turret Camera (ITV529-1ERS)', 'A cost-effective, dome-shaped camera that can provide maximum coverage even in total darkness with bubble-less design.', '/assets/image/Pelco/Sarix Value Series IR Environmental Turret.png', '/our-products/pelco/environmental-turret'),
(115, 'Pelco', 'CCTVs', 'Sarix Value Series IR Environmental Mini Dome Cameras (IMV229-1ERS, IMV529-1ERS)', 'A budget-friendly, compact surveillance camera that blends with its surroundings for discreet monitoring.', '/assets/image/Pelco/Sarix Value Series Environmental Mini Dome.png', '/our-products/pelco/environmental-mini-dome'),
(116, 'Pelco', 'CCTVs', 'Sarix Professional 4 Series Dome Camera', 'A high-performance, dome-shaped security camera designed to capture activity in high-definition and future-proof your site.', '/assets/image/Pelco/Sarix-Professional 4 Series Dome Camera.png', '/our-products/pelco/sarix-professional-4'),
(117, 'Pelco', 'CCTVs', 'Sarix Enhanced 4 And 4P Series Dome Camera', 'A dome-shaped surveillance camera designed to run multiple analytics at once for complex security challenges.', '/assets/image/Pelco/Sarix-Enhanced-4 and 4P Series Dome Camera.png', '/our-products/pelco/series-dome-camera'),
(118, 'Pelco', 'CCTVs', 'Sarix Enhanced 4 and 4P Series Short and Long Bullet Cameras', 'A high-performance surveillance camera designed to run multiple analytics at once with new analytic capabilities.', '/assets/image/Pelco/Short and Long Bullet Camera.png', '/our-products/pelco/short-and-long-bullet-camera'),
(119, 'Pelco', 'CCTVs', 'Sarix Thermal Enhanced 4 Camera Series', 'More than just a security camera, this device has heat-sensing technology to identify incoming threats.', '/assets/image/Pelco/Sarix Thermal Enhanced-4 Camera Series.png', '/our-products/pelco/thermal-enhanced-4-camera-series'),
(120, 'Pelco', 'CCTVs', 'Sarix Professional 4 Series Bullet Camera', 'A high-performance, bullet-style security camera designed to capture activity in high-definition.', '/assets/image/Pelco/Sarix-Professional-4-Series-Bullet Camera.png', '/our-products/pelco/bullet-camera'),
(121, 'Pelco', 'CCTVs', 'Sarix Value Series IR Environmental Bullet Cameras (IBV229-1ER, 1BV529-1ER)', 'A cost-friendly surveillance camera with reliable image quality and excellent low-light performance to deter criminal activity.', '/assets/image/Pelco/Sarix Value Series IR Environmental Bullet.png', '/our-products/pelco/environmental-bullet-cameras'),
(122, 'Hikvision', 'CCTVs', 'DS-2CD2T43G2-2I/4I 4MP AcuSense Fixed Bullet Network Camera', 'Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms to bullet-style surveillance.', '/assets/image/Hikvision/Acusense Fixed Bullet Network.jpg', '/our-products/hikvision/fixed-bullet-network'),
(123, 'Hikvision', 'CCTVs', 'DS-2DE7A825IW-AEB(T5) 8MP 25 x IR Network Speed Dome Camera', 'Designed for outdoor use, this surveillance dome camera has 25x optical zoom lens and up to 200m IR distance.', '/assets/image/Hikvision/Network Speed Dome Camera.png', '/our-products/hikvision/network-speed-dome-camera'),
(124, 'Hikvision', 'CCTVs', 'DS-2SE7C432MWG-EB/26(F0) TandemVu 4MP 32 x Network PTZ Camera', 'A panoramic surveillance camera with 32x optical zoom, integrating multiple lenses in one security camera for superior coverage.', '/assets/image/Hikvision/TandemVu 4MP 32X Network PTZ.png', '/our-products/hikvision/network-ptz-camera'),
(125, 'Hikvision', 'CCTVs', 'DS-7700NI-I4 (B) Series NVR', 'A network video-recorder with up to 32 channel input and built-in analytics for advanced artificial intelligence capabilities.', '/assets/image/Hikvision/Series NVR.png', '/our-products/hikvision/series-nvr'),
(126, 'Hikvision', 'CCTVs', 'DS-7608NXI-I2/8P/S AcuSense Series NVR', 'A network video-recorder with AI functionality, offering up to 8 channel input with advanced built-in analytics.', '/assets/image/Hikvision/Acusense Series NVR.png', '/our-products/hikvision/acusense-series-nvr'),
(127, 'Hikvision', 'CCTVs', 'DS-2CD2143G2-I(S) 4MP AcuSense Fixed Dome Network Camera', 'A dome-shaped surveillance camera that uses deep learning to accurately detect human or vehicle motion.', '/assets/image/Hikvision/4MP AcuSense Fixed Dome Network.jpg', '/our-products/hikvision/acusense-fixed-dome-network-camera'),
(128, 'Hikvision', 'CCTVs', 'DS-2CD2083G2-I(U) 8MP AcuSense Fixed Bullet Network Camera', 'A bullet-style surveillance camera featuring 8MP resolution and AcuSense technology for target classification.', '/assets/image/Hikvision/8MP AcuSense Fixed Bullet Network.jpg', '/our-products/hikvision/acusense-fixed-bullet-network-camera'),
(129, 'Hikvision', 'CCTVs', 'DS-2DE4225IW-DE(T5) 2MP 25 x Network IR Speed Dome Camera', 'Designed for outdoor use, this dome camera adopts a 1/2.8″ progressive scan CMOS to capture expansive areas with 25x zoom.', '/assets/image/Hikvision/Network IR Speed Dome Camera.png', '/our-products/hikvision/network-ir-speed-dome-camera'),
(130, 'ACTi', 'CCTVs', 'INR 415 256-Channel 12 Bay RAID Backmount Standalone', 'A high-capacity network video recorder that can manage up to 256 channels with 12-bay RAID support for mission-critical storage.', '/assets/image/ACTI/Backmount Standalone.png', '/our-products/acti/bay-raid-backmount-standalone'),
(131, 'ACTi', 'CCTVs', 'GNR 340 100-Channel Tower Strandalone', 'A network video recorder designed to record from and manage up to 100 cameras, expandable to host 5 HDDs in a tower configuration.', '/assets/image/ACTI/Channel Tower Strandalone.png', '/our-products/acti/channel-tower-strandalone'),
(132, 'ACTi', 'CCTVs', 'ENR 130 16-Channel Desktop Standalone NVR', 'High-performance desktop network video recorder that can accommodate up to 16 channels. Supports 4MP/10MP standalone recording.', '/assets/image/ACTI/Channel Desktop Standalone.png', '/our-products/acti/channel-desktop-standalone'),
(133, 'ACTi', 'CCTVs', 'Z86 Outdoor Network Dome Camera with Night Vision', 'Designed for both indoor and outdoor use, this 4MP surveillance camera offers wide area coverage and two-way audio.', '/assets/image/ACTI/Outdoor Network Dome Camera.png', '/our-products/acti/outdoor-network-dome-camera'),
(134, 'ACTi', 'CCTVs', 'Z49 4MP Zoom Bullet with D/N, Adaptive IR', 'A bullet-style surveillance camera with 4.3x lens, Superior WDR, and Adaptive IR to trigger notifications for specific user actions.', '/assets/image/ACTI/Zoom Bullet With DN.png', '/our-products/acti/zoom-bullet-with-dn'),
(135, 'ACTi', 'CCTVs', '1915 2MP Outdoor PTZ Network Dome Camera', 'A pan-tilt-zoom surveillance camera with night vision and heater, capable of capturing high-quality video at up to 60fps.', '/assets/image/ACTI/Outdoor PTZ Network Dome Camera.png', '/our-products/acti/network-dome-camera'),
(136, 'ACTi', 'CCTVs', 'B928 5MP Outdoor PTZ Network Speed Dome Camera', 'Features 36x optical zoom and extreme Wide Dynamic Range for crystal clear imaging in expansive outdoor environments.', '/assets/image/ACTI/B928- 5MP Outdoor.png', '/our-products/acti/outdoor-ptz-network-speed-dome-camera'),
(137, 'ACTi', 'CCTVs', 'A817 8MP Outdoor Network Dome Camera', 'High-resolution 8MP camera designed for indoor and outdoor use, capturing clear images even in low-light night conditions.', '/assets/image/ACTI/A817 8MP Outdoor.png', '/our-products/acti/outdoor-network-dome-camera'),
(138, 'ACTi', 'CCTVs', 'A713 5MP Outdoor Network Fisheye Dome Camera', 'A high-security fisheye camera providing 360-degree coverage, night vision, a built-in heater, and two-way audio.', '/assets/image/ACTI/A713 5MP Outdoor Network Fisheye.png', '/our-products/acti/network-fisheye-dome-camera'),
(139, 'Dahua', 'CCTVs', 'DH-80840WANF 8MP 4K Starlight PTZ IP Camera', 'Designed for outdoor use, this 4K camera features 40x optical zoom and Analytics+ for real-time face recognition using a 1/1.8-in STARVIS sensor.', '/assets/image/Dahua/Starlight PTZ IP Security.png', '/our-products/dahua/dh-80840wanf'),
(140, 'Dahua', 'CCTVs', 'DH-PSDW81642M-A360-D440-S3 16MP Multi-Sensor Hubble WizMind', 'A high-speed Hubble WizMind camera providing a 360° panoramic view by splicing multiple sensors for complete situational awareness.', '/assets/image/Dahua/Multi Sensor 360 Panoramic.png', '/our-products/dahua/dh-psdw81642m'),
(141, 'Dahua', 'CCTVs', 'DH-IPC-EBW81242N-AS-S2 12MP IR Fisheye WizMind', 'A 12MP fisheye lens camera providing 360° surveillance, ideal for high-traffic areas like shopping centers, airports, and banks.', '/assets/image/Dahua/Fisheye WizMind Network.png', '/our-products/dahua/dh-ipc-ebw81242n'),
(142, 'Dahua', 'CCTVs', 'DH-IPC-PFW83242-A180-S2 4 x 8MP Multi-Sensor Panoramic Bullet', 'A 180° panoramic bullet camera that accurately detects humans and vehicles to provide robust perimeter protection.', '/assets/image/Dahua/8MP Multisensor Panoramic Bullet WizMind.png', '/our-products/dahua/dh-ipc-pfw83242'),
(143, 'Dahua', 'CCTVs', 'DH-IPC-HDBW7442H-Z-S 4MP IR Dome WizMind', 'Utilizing an advanced deep learning algorithm, this WizMind 7 Series camera supports various intelligent security solutions.', '/assets/image/Dahua/Dome WizMind Network Camera.png', '/our-products/dahua/dh-ipc-hdbw7442h'),
(144, 'Dahua', 'CCTVs', '6CE445XANR 4MP IR 45x Starlight Analytics+ PTZ', 'Featuring Analytics+ for real-time perimeter protection and a powerful 45x optical zoom for long-distance monitoring.', '/assets/image/Dahua/Starlight Analytics DomeCamera.png', '/our-products/dahua/6ce445xanr'),
(145, 'Dahua', 'CCTVs', 'WizSense Series 52C432GBNR 4MP Network PTZ Dome', 'This surveillance camera features endless panning, a 0 to 90 degree tilt range, and 32x optical zoom for versatile monitoring.', '/assets/image/Dahua/WizSense Series 52C432GBNR.png', '/our-products/dahua/wizsense-series-52c432gbnr'),
(146, 'Dahua', 'CCTVs', 'WizSense Series 5A445GBNR 4MP Outdoor PTZ Dome', 'Outdoor PTZ camera featuring endless panning, a -15 to 90 degree tilt range, and 45x optical zoom for expansive areas.', '/assets/image/Dahua/WizSense Series 5A445GBNR.png', '/our-products/dahua/wizsense-series-5a445gbnr'),
(147, 'Dahua', 'CCTVs', '6C3425XBPV 4MP Outdoor TiOC Network PTZ Dome', 'An active alarm system featuring red and blue lights and voice prompts to actively deter intruders in outdoor environments.', '/assets/image/Dahua/Outdoor TiOC Network.png', '/our-products/dahua/6c3425xbpv-outdoor-tioc-network'),
(148, 'Dahua', 'CCTVs', 'N83BP83 8MP Outdoor Dual-Lens TiOC Panoramic ePoE Bullet', 'A panoramic camera with Enhanced Night Color technology to provide clear illumination even in complete darkness.', '/assets/image/Dahua/Panoramic Network EP0E Bullet.png', '/our-products/dahua/n83bp83-outdoor-dual-lens'),
(149, 'Dahua', 'CCTVs', 'AcuPick N85FJ6Z 8MP Outdoor Network ePoE Turret', 'Features a varifocal lens for large coverage and a built-in microphone to capture clear audio alongside 8MP video.', '/assets/image/Dahua/AcuPick N85FJ6Z 8MP.png', '/our-products/dahua/acupick-n85fj6z'),
(150, 'Dahua', 'CCTVs', 'AcuPick N45FJ62 4MP Outdoor Network ePoE Turret', 'A cost-effective ePoE camera with dual IR LEDs for superior night vision coverage in a turret form factor.', '/assets/image/Dahua/AcuPick N45FJ62 4MP.png', '/our-products/dahua/acupick-n45fj62'),
(151, 'Dahua', 'CCTVs', 'N85EUN2 8MP ePoE Night Color Network Turret', 'Captures 4K UHD videos and records full-color video in low-light conditions, providing high-detail evidence 24/7.', '/assets/image/Dahua/N85EUN2 8MP EPoE Night Color.png', '/our-products/dahua/night-color-turret-camera'),
(152, 'Dahua', 'CCTVs', 'N45EYN2 4MP ePoE Night Color 2.0 Network Dome', 'A highly reliable dome camera designed to capture full-color video in extremely low-light conditions.', '/assets/image/Dahua/N45EYN2 4MP EPoE Night Color.png', '/our-products/dahua/night-color-network-dome-camera'),
(153, 'Dahua', 'CCTVs', 'AcuPick N85FL6Z4 8MP Outdoor Network ePoE Dome', 'Cost-effective ePoE camera featuring a varifocal lens for a customizable, wide horizontal field of view.', '/assets/image/Dahua/AcuPick N85FL6Z4 8MP Dome Camera.webp', '/our-products/dahua/outdoor-network-dome-camera'),
(154, 'Dahua', 'CCTVs', 'N85CL5Z 4K UHD Outdoor ePoE Network Dome', 'A 4K UHD camera with a varifocal lens and 4x optical zoom for balancing wide coverage with specific detail.', '/assets/image/Dahua/N85CL5Z 4k UHD Outdoor EPoE.png', '/our-products/dahua/n85cl5z-outdoor-epoe-network-dome'),
(155, 'Dahua', 'CCTVs', 'N85EFN2 8MP Outdoor ePoE Night Color 2.0 Bullet', 'Highly reliable bullet camera built for indoor/outdoor use, capable of capturing high-definition 4K UHD videos.', '/assets/image/Dahua/N85EFN2 8MP Outdoor.png', '/our-products/dahua/n85efn2'),
(156, 'Dahua', 'CCTVs', 'AcuPick N85FB6Z4 8MP Outdoor Network ePoE Bullet', 'Features a varifocal lens for wider fields of view and a built-in microphone for synchronized two-way audio.', '/assets/image/Dahua/AcuPick N85FB6Z4 8MP Outdoor.png', '/our-products/dahua/acupick-n85fb6z4'),
(157, 'Dahua', 'CCTVs', 'DH-S4228-24GT-360 28-Port Gigabit PoE++ Managed Switch', 'A high-speed managed switch supporting up to 28 devices, ideal for large-scale IP security camera deployments.', '/assets/image/Dahua/Compliant Managed Network Switch.png', '/our-products/dahua/dh-s4228'),
(158, 'Dahua', 'CCTVs', 'DH-PFS3010-8GT-96 8-Port Gigabit PoE Unmanaged Switch', 'Budget-friendly plug-and-play network switch for expanding camera capacity without complex configuration.', '/assets/image/Dahua/Compliant Unmanaged Network.png', '/our-products/dahua/dh-psf3010'),
(159, 'Dahua', 'CCTVs', 'DH-S4220-16GT-240 16-Port Gigabit PoE++ Managed Switch', 'Grow your network capacity with this 16-port Gigabit PoE++ compliant managed switch for high-power devices.', '/assets/image/Dahua/Compliant Managed.png', '/our-products/dahua/dh-s4220'),
(160, 'Dahua', 'CCTVs', 'DH-S4210-8GT-110 8-Port Gigabit PoE Managed Switch', 'Reliable managed switch with 8 ports, designed to support security devices and access points effectively.', '/assets/image/Dahua/Port Gigabit PoE Compliant.png', '/our-products/dahua/dh-s4210'),
(161, 'Dahua', 'CCTVs', 'DH-LR2110-8ET-120 10-Port Unmanaged Switch with 8 ePoE', 'Optimized for long-range data transmission over ePoE, accommodating up to 8 devices with high efficiency.', '/assets/image/Dahua/Port Unmanaged Switch.png', '/our-products/dahua/dh-lr2110'),
(162, 'Dahua', 'CCTVs', 'DH-IS4210-8GT-120 8-Port PoE++ Managed Industrial Switch', 'Rugged industrial switch built to withstand temperatures from -40 to 167°F in harsh security environments.', '/assets/image/Dahua/Compliant Managed Industrial Switch.png', '/our-products/dahua/dh-is4210'),
(163, 'Dahua', 'CCTVs', 'N84B5N 32-Channel AcuPick 8K PoE NVR', 'Powered by a high-performance processor and analytics chip, supporting up to 32 channels and 8K resolution.', '/assets/image/Dahua/32-Channel Network Video Recorder.png', '/our-products/dahua/n84b5n'),
(164, 'Dahua', 'CCTVs', 'N82B2P 8-Channel AcuPick 8K PoE NVR', 'An 8-channel 8K PoE network video recorder featuring built-in analytics for smarter security management.', '/assets/image/Dahua/8-Channel Network Video Recorder.png', '/our-products/dahua/n82b2p'),
(165, 'Dahua', 'CCTVs', '1A404DBNR 4MP Outdoor Network Mini Dome', 'Mini dome camera with 2 IR LEDs, two-way audio, and 4x optical zoom for discreet but powerful monitoring.', '/assets/image/Dahua/Outdoor Network Mini Dome Camera.png', '/our-products/dahua/1a404dbnr'),
(166, 'Dahua', 'CCTVs', 'N43CJ6Z 4MP Enhanced Straight Network Eyeball Camera', 'Enhanced Starlight eyeball camera designed for various outdoor applications in any lighting condition.', '/assets/image/Dahua/Straight Network Eyeball.png', '/our-products/dahua/n43cj6z'),
(167, 'Dahua', 'CCTVs', 'N43CL62 4MP Outdoor Network Dome with Night Vision', 'Features 3 IR LEDs for clear night vision and a built-in microphone for two-way audio communication.', '/assets/image/Dahua/Outdoor Network Dome Camera with Night Vision.png', '/our-products/dahua/n43cl62'),
(168, 'Dahua', 'CCTVs', 'N22AL12 2MP Outdoor Network Mini Dome', 'Compact Full HD outdoor camera designed for discreet, high-resolution security monitoring.', '/assets/image/Dahua/Outdoor Network Mini Dome Camera with Night Vision.png', '/our-products/dahua/n22al12'),
(169, 'Dahua', 'CCTVs', 'N43CF6Z WizSense 4MP Outdoor Bullet with Night Vision', 'Cost-effective WizSense bullet camera with 4 IR LEDs and two-way audio for comprehensive protection.', '/assets/image/Dahua/N43CF6z WizSense 4MP.png', '/our-products/dahua/n43cf6z'),
(170, 'Dahua', 'CCTVs', 'N43BX8Z 4MP Outdoor TiOC Network Bullet', 'TiOC bullet camera featuring 2 white LEDs for recording full-color video even at night to deter intruders.', '/assets/image/Dahua/N43BX8Z 4MP Outdoor TiOC.png', '/our-products/dahua/n43bx8z'),
(171, 'Gilardoni', 'Detection Systems', 'FEP CARGO', 'Designed for screening pallets and large packages, this multi-energy X-ray system is ideal for high-security cargo environments.', '/assets/image/Gilardoni/FEP CARGO.png', '/our-products/gilardoni/cargo'),
(172, 'Gilardoni', 'Detection Systems', 'FEP CARGO DV', 'A high-capacity X-ray inspection system for cargo and large objects, providing dual-view images for enhanced threat detection.', '/assets/image/Gilardoni/FEP CARGO DV.png', '/our-products/gilardoni/cargo-dv'),
(173, 'Gilardoni', 'Detection Systems', 'FEP 1000', 'A large-scale X-ray system designed for heavy baggage and cargo screening with a significant belt height for oversized items.', '/assets/image/Gilardoni/FEP 1000.png', '/our-products/gilardoni/1000');
INSERT INTO `brand_products` (`id`, `brand_name`, `category_name`, `title`, `description`, `image_path`, `detail_route`) VALUES
(174, 'Gilardoni', 'Detection Systems', 'FEP 1000 HC DV', 'High-performance hold luggage inspection system for large baggage, providing dual-view imaging to maximize detection accuracy.', '/assets/image/Gilardoni/FEP 1000 HC DV.png', '/our-products/gilardoni/1000-hc-dv'),
(175, 'Gilardoni', 'Detection Systems', 'FEP 640 X-Ray', 'Versatile multi-energy X-ray system designed for hand baggage and parcels, capable of detecting a wide array of dangerous objects.', '/assets/image/Gilardoni/FEP 640 XRAY.png', '/our-products/gilardoni/640-x-ray'),
(176, 'Gilardoni', 'Detection Systems', 'FEP 640 AMX', 'Advanced multiview technology for aviation security checkpoints, capable of automatically detecting explosives, narcotics, and weapons.', '/assets/image/Gilardoni/FEP 640 AMX.png', '/our-products/gilardoni/640-amx'),
(177, 'Gilardoni', 'Detection Systems', 'BREVA TRS: Automatic Tray Return System', 'An advanced tray handling system that facilitates airport security workflow by integrating seamlessly with X-ray screening machines.', '/assets/image/Gilardoni/BREVA TRS.png', '/our-products/gilardoni/automatic-tray-return-system'),
(178, 'Gilardoni', 'Detection Systems', 'ARGO 640: Single View Hand Baggage X-Ray Scanner', 'High-performance scanner using advanced algorithms to examine baggage, mail, and parcels at checkpoints for accurate threat detection.', '/assets/image/Gilardoni/Argo-640.png', '/our-products/gilardoni/single-view-hand-baggage'),
(179, 'Gilardoni', 'Detection Systems', 'ARGO 640DV: Dual View Hand Baggage X-Ray Scanner', 'A compact inspection system delivering dual-view imaging for comprehensive threat detection in mail and baggage screening.', '/assets/image/Gilardoni/ARGO 640 DV.png', '/our-products/gilardoni/dual-view-hand-baggage'),
(180, 'Gilardoni', 'Detection Systems', 'ARGO 536: Single View Hand Baggage X-Ray Scanner', 'Compact X-ray system providing high-level security screening, specifically designed for buildings with limited space.', '/assets/image/Gilardoni/ARGO 536.png', '/our-products/gilardoni/single-view'),
(181, 'Ceia', 'Detection Systems', 'SMD601 Plus: Most Sensitive Multi-Zone Metal Detector', 'A very high-sensitivity walk-through system that detects even the smallest metal items anywhere on or in the body.', '/assets/image/CEIA/SMD601 PLUS.png', '/our-products/ceia/smd601'),
(182, 'Ceia', 'Detection Systems', 'SMD600 Plus: Enhanced Walkthrough and Metal Detector', 'A high-sensitivity metal detector that offers exceptional discrimination and high throughput for busy checkpoints.', '/assets/image/CEIA/SMD600 PLUS.png', '/our-products/ceia/smd600'),
(183, 'Ceia', 'Detection Systems', 'PMD2 Plus/EZHD: Elliptic Multi-Zone Heavy Duty Detector', 'A rugged walk-through device designed to quickly detect firearms and knives, even when hidden within body cavities.', '/assets/image/CEIA/PMD2 PLUS.png', '/our-products/ceia/pmd2'),
(184, 'Ceia', 'Detection Systems', 'HI-PE Plus: Enhanced Walkthrough Multi-Zone Metal Detector', 'Provides accurate detection of all metals with exceptional immunity to external interferences for reliable operation.', '/assets/image/CEIA/HIPE PLUS.png', '/our-products/ceia/hi-pe'),
(185, 'Ceia', 'Detection Systems', 'OPENGATE® Weapons Detection System', 'The first and only fully open, active walk-through system designed for fast screening of backpacks, purses, and bags.', '/assets/image/CEIA/OPENGATE WEAPONS.png', '/our-products/ceia/opengate'),
(186, 'Ceia', 'Detection Systems', 'MSDi High-Performance Ferromagnetic Weapons Detector', 'Specifically designed for easy integration in covert access control to detect ferromagnetic weapons discreetly.', '/assets/image/CEIA/MSDI HIGH PERFORMANCE.jpg', '/our-products/ceia/high-performance'),
(187, 'Ceia', 'Detection Systems', 'MSD Highly Portable Cellphone and Contraband Detector', 'A portable solution designed to detect cellphones and ferrous contraband, ideal for correctional institutions.', '/assets/image/CEIA/MSD HIGHLY PORTABLE.png', '/our-products/ceia/portable-cellphone'),
(188, 'Ceia', 'Detection Systems', 'PD240CB Long-Range Hand-Held Metal Detection Set', 'Features a long detection range for weapons and minimal metal targets with high immunity to external metal masses.', '/assets/image/CEIA/PD240CB LONG RANGE.png', '/our-products/ceia/long-range-hand-held'),
(189, 'Ceia', 'Detection Systems', 'PD240 Wide Search Area Hand-Held Metal Detection Set', 'Combines high reliability and ergonomics with an offset hand grip to provide a wider search area during screening.', '/assets/image/CEIA/PD240 WIDE SEARCH.jpg', '/our-products/ceia/wide-search-area'),
(190, 'Ceia', 'Detection Systems', 'PD140N Compact Hand-Held Metal Detection Set', 'A highly reliable, ergonomic hand-held detector with advanced operator signaling for efficient personal screening.', '/assets/image/CEIA/PD140N COMPACT HAND.png', '/our-products/ceia/compact-hand-held'),
(191, 'Ceia', 'Detection Systems', 'EMIS-MAIL Mail Scanner', 'Specially designed to detect letter bombs and IED components, including detonators and batteries, in small parcels.', '/assets/image/CEIA/EMIS MAIL.png', '/our-products/ceia/mail-scanner'),
(192, 'Ceia', 'Detection Systems', 'EMA Liquid Explosive Detector', 'A compact analyzer for liquid containers to detect explosive precursors and exclusive liquids at security checkpoints.', '/assets/image/CEIA/EMA LIQUID.png', '/our-products/ceia/liquid-explosive-detector'),
(193, 'Autoclear', 'Detection Systems', 'HandWand', 'A lightweight and ergonomic digital metal detector known for its fast scanning area, designed to search for weapons and contraband efficiently.', '/assets/image/AUTOCLEAR/HandWand.png', '/our-products/autoclear/handwand'),
(194, 'Autoclear', 'Detection Systems', '100100TDVS-DV X-Ray Inspection System', 'A dual-view, heavy-duty conveyorized X-ray system designed for screening large objects, hold baggage, and cargo.', '/assets/image/AUTOCLEAR/DV XRAY Inspection System.png', '/our-products/autoclear/100100tdvs-dv-inspection-system'),
(195, 'Autoclear', 'Detection Systems', '100100TDVS X-Ray Inspection System', 'Heavy-duty direct transmission X-ray system optimized for screening large cargo and detecting concealed weapons or explosives.', '/assets/image/AUTOCLEAR/XRAY Inspection System.png', '/our-products/autoclear/100100tdvs-inspection-system'),
(196, 'Autoclear', 'Detection Systems', '6040DVS-DV X-Ray Inspection System', 'A dual-view X-ray scanner that delivers a clear, comprehensive picture of hidden explosives, weapons, and narcotics in a single scan.', '/assets/image/AUTOCLEAR/6040dvs dv XRAY.png', '/our-products/autoclear/6040dvs-dv-inspection-system'),
(197, 'Autoclear', 'Detection Systems', '6040DVS X-Ray Inspection System', 'A compact, user-friendly system known for best-in-class speed and accurate detection of briefcases and backpacks.', '/assets/image/AUTOCLEAR/6040DVS-HD.png', '/our-products/autoclear/6040dvs-inspection-system'),
(198, 'Autoclear', 'Detection Systems', '5333DVS X-Ray Inspection System', 'A fast and easy-to-operate X-ray system designed specifically for small to mid-sized screening of items for prohibited materials.', '/assets/image/AUTOCLEAR/5333DVS-HD.png', '/our-products/autoclear/5333dvs-inspection-system'),
(199, 'Autoclear', 'Detection Systems', 'N2300 Trace Detector', 'A high-sensitivity narcotics detector that pinpoints minute traces of cocaine, opiates, cannabis, and amphetamine stimulants.', '/assets/image/AUTOCLEAR/N2300.png', '/our-products/autoclear/n2300-trace-detector'),
(200, 'Autoclear', 'Detection Systems', 'E5000 Series Trace Detector', 'A reliable desktop system designed for fast and accurate analysis when screening for traces of explosives and narcotics.', '/assets/image/AUTOCLEAR/E5000-Series.png', '/our-products/autoclear/series-trace-detector'),
(201, 'Autoclear', 'Detection Systems', 'E3500 Trace Detector', 'Uses advanced chemiluminescence to detect homemade, military, and commercial explosives, including ICAO taggants.', '/assets/image/AUTOCLEAR/E3500 Trace.jpg', '/our-products/autoclear/e3500-trace-detector'),
(202, 'Autoclear', 'Detection Systems', 'CLX Compact Trace Detector', 'An advanced, easy-to-use trace detection system designed for military and home explosives with minimal training required.', '/assets/image/AUTOCLEAR/CLX Compact.png', '/our-products/autoclear/compact-tree-detector'),
(203, 'Detnov', 'Fire Alarm', 'MAD-401 and MAD-402 Series Addressable Modules', 'Addressable modules ideal for the supervision of any signal requiring monitoring for fire control panels.', '/assets/image/Detnov/MAD-401.png', '/our-products/detnov/technical-inputs'),
(204, 'Detnov', 'Fire Alarm', 'DOA Series Indicator Light with Buzzer', 'Signaling devices providing both visual indicators and acoustic warnings via an integrated buzzer.', '/assets/image/Detnov/DOA Series.jpg', '/our-products/detnov/indicator-light-with-buzzer'),
(205, 'Detnov', 'Fire Alarm', 'TRD-100 Expansion Card', 'Designed to increase the number of free voltage relay outputs for DETNOV fire detection control panels.', '/assets/image/Detnov/Expansion-Cards.jpg', '/our-products/detnov/voltage-relay-output'),
(206, 'Detnov', 'Fire Alarm', 'Clampbell Fire Alarm Bells', 'EN54-3 approved fire bells incorporating traditional reliability with innovative hinged design for fast installation.', '/assets/image/Detnov/Clambell Fire Alarm.jpg', '/our-products/detnov/clampbell-fire-alarm'),
(207, 'Detnov', 'Fire Alarm', 'DOTD-230 Conventional Dual Heat & Smoke Detector', 'Advanced dual-sensor technology designed for early detection by monitoring both heat and smoke signals.', '/assets/image/Detnov/DOTD-230A-768x755.png', '/our-products/detnov/heat-and-smoke-detector'),
(208, 'Detnov', 'Fire Alarm', 'CCD-102 Conventional Control Panel Series', 'EN 54-2 and EN 54-4 certified fire detection control panels, ideal for small to medium-sized installations.', '/assets/image/Detnov/CAD-150-1_new-768x1149.png', '/our-products/detnov/conventional-control-panel'),
(209, 'Detnov', 'Fire Alarm', 'TED-151-2PE Multi-Purpose Communication Card', 'Communication interface compatible with both conventional CCD-100 and addressable CAD-150 control panels.', '/assets/image/Detnov/TED 151.jpg', '/our-products/detnov/multi-pupose-communication-card'),
(210, 'Detnov', 'Fire Alarm', 'RP-GS1 Conventional Manual Call Point', 'A resettable manual call point designed for immediate emergency evacuation signaling in fire detection systems.', '/assets/image/Detnov/Conventional Manual.jpg', '/our-products/detnov/manual-call-point'),
(211, 'Detnov', 'Fire Alarm', 'PED-221/PED 231 Conventional Beacon Series', 'Audible and visible notification devices compatible with conventional panels and addressable sounder modules.', '/assets/image/Detnov/Conventional Beacon Series.png', '/our-products/detnov/beacon-series'),
(212, 'Detnov', 'Fire Alarm', 'TUL 500EN Monitored Power Supply 24V/5A', 'Microprocessor-controlled switched power supply with constant monitoring of voltage and battery status.', '/assets/image/Detnov/Power-Supply-768x768.jpg', '/our-products/detnov/monitored-power-supply'),
(213, 'Detnov', 'Fire Alarm', 'Z-200/ Z-200H Connection Base', 'Universal low-profile connection base with stainless metallic contact trips for all Detnov detectors.', '/assets/image/Detnov/z200.jpg', '/our-products/detnov/connection-base'),
(214, 'Detnov', 'Fire Alarm', 'TED-151-CL DETNOV Cloud', 'Cloud-based remote connectivity solution allowing real-time maintenance and monitoring of fire alarm systems.', '/assets/image/Detnov/TED 151.jpg', '/our-products/detnov/detnov-cloud'),
(215, 'Detnov', 'Fire Alarm', 'MAD-464-I Addressable Sounder', 'High-performance addressable sounder designed to facilitate building evacuation procedures via loop-powered signaling.', '/assets/image/Detnov/MAD-464.png', '/our-products/detnov/addressable-sounder'),
(216, 'Detnov', 'Fire Alarm', 'PGD-201 Address Programmer', 'Handheld tool used to assign digital addresses to devices within the loop of an addressable fire alarm system.', '/assets/image/Detnov/PGD 201.jpg', '/our-products/detnov/address-programmer'),
(217, 'Detnov', 'Fire Alarm', 'MAD-451-1 Addressable Manual Call Point with Isolator', 'Manual alarm station with a built-in short-circuit isolator for use with addressable fire control panels.', '/assets/image/Detnov/MAD 451.png', '/our-products/detnov/manual-call--point-with-isolator'),
(218, 'Detnov', 'Fire Alarm', 'DOD-220A/ DOD-220A-I Addressable Optical Smoke Detector', 'Compact addressable detector utilizing advanced analysis technology for reliable and early fire detection.', '/assets/image/Detnov/DOD-220.png', '/our-products/detnov/optical-smoke-detector'),
(219, 'Detnov', 'Fire Alarm', 'CAD-150-2-MB | 2-Loop Addressable Control Panel', 'Full-featured addressable fire alarm system in a metal box, providing an ideal solution for large-scale facilities.', '/assets/image/Detnov/CAD 150 2 MB.jpg', '/our-products/detnov/control-panel-with-metal-box'),
(220, 'Foster', 'Forensic Examination', 'VSC9000', 'A high-performance optical and illumination system that enables multi-spectral examinations of documents to reveal tampering or manipulation.', '/assets/image/Foster/VSC-9000.jpg', '/our-products/foster/vsc9000'),
(221, 'Foster', 'Forensic Examination', 'VSC80i', 'A fully integrated touch screen workstation providing a complete solution for the examination of secure travel and identity documents.', '/assets/image/Foster/VSC80i.jpg', '/our-products/foster/vsc80i'),
(222, 'Foster', 'Forensic Examination', 'DCS 5: Fingerprint Imaging Workstation', 'A comprehensive imaging system for any type of fingerprint on any surface, ensuring maximum detail is revealed for examiners.', '/assets/image/Foster/DCS-5.jpg', '/our-products/foster/fingerprint-imaging-workstation'),
(223, 'Foster', 'Forensic Examination', 'CRIME-LITE X', 'A handheld, multi-spectral LED light source kit allowing examiners to seamlessly switch between light options at a crime scene.', '/assets/image/Foster/Crime-Lite-X.jpg', '/our-products/foster/crime-lite-x'),
(224, 'Foster', 'Forensic Examination', 'CRIME-LITE AUTO', 'Combining forensic imaging with high-intensity illumination, this is an all-in-one semi-automated tool for evidence screening.', '/assets/image/Foster/Crime-Lite-Auto.jpg', '/our-products/foster/crime-lite-auto'),
(225, 'Ebs', 'Guard Tour Systems', 'EBS: AT MOBILE', 'A real-time mobile application designed to support lone workers, perfectly integrated with Active Track hardware.', '/assets/image/Ebs/AT MOBILE.png', '/our-products/ebs/at-mobile'),
(226, 'Ebs', 'Guard Tour Systems', 'EBS: ACTIVE VIEW', 'A cloud-based monitoring system for real-time management of personnel and property, enhancing security service efficiency.', '/assets/image/Ebs/ACTIVE VIEW.png', '/our-products/ebs/active-view'),
(227, 'Ebs', 'Guard Tour Systems', 'EBS: ACTIVE TRACK', 'A rugged, portable device combining GPS, RFID, and 4G technology for the high-precision monitoring of remote employees.', '/assets/image/Ebs/ACTIVE TRACK.png', '/our-products/ebs/active-track'),
(228, 'Onity', 'Hotel Security Systems', 'Onity DirectKey with Serene', 'A sleek all-in-one lock designed for luxury hotels, featuring integrated DirectKey mobile access technology for seamless guest entry.', '/assets/image/Onity/Onity DirectKey.jpg', '/our-products/onity/directkey-with-serene'),
(229, 'Onity', 'Hotel Security Systems', 'Trillium RFID', 'A modern hotel lock featuring a one-piece module design, compatible with both RFID cards and DirectKey mobile access.', '/assets/image/Onity/Trillium RFID.png', '/our-products/onity/trillium-rfid'),
(230, 'Onity', 'Hotel Security Systems', 'Advance Trillium RFID', 'Designed with a slim two-piece module, this lock offers sophisticated aesthetics with RFID and mobile access capabilities.', '/assets/image/Onity/Advance Trillium RFID.png', '/our-products/onity/advance-trillium-rfid'),
(231, 'Onity', 'Hotel Security Systems', 'Self Storage Passport Locking Solution', 'A compact and easy-to-install secure ecosystem designed specifically for the requirements of modern self-storage facilities.', '/assets/image/Onity/Self Storage Passport.png', '/our-products/onity/self-storage-passport'),
(232, 'Onity', 'Hotel Security Systems', 'OS700 Contactless RFID Card Safe', 'A high-end guestroom safe utilizing contactless RFID technology to securely store laptops, tablets, and personal valuables.', '/assets/image/Onity/OS700 Contactless RFID.png', '/our-products/onity/contactless-rfid-card-safe'),
(233, 'Onity', 'Hotel Security Systems', 'OS500 In-Room Safe with Keypad', 'A sleek, solid steel safe designed for versatile mounting on shelves or walls, featuring a user-friendly keypad and audit trail.', '/assets/image/Onity/OS500 In Room Safe With Keypad.png', '/our-products/onity/keypad-and-audit-trail'),
(234, 'Onity', 'Hotel Security Systems', 'OS200 In-Room Safe with Top-Opening Option', 'A reliable security solution for guest valuables, offering a top-opening configuration ideal for drawer installations.', '/assets/image/Onity/OS200 In Room Safe With Keypad and Top Opening.png', '/our-products/onity/keypad-and-opening-option-os200'),
(235, 'Onity', 'Hotel Security Systems', 'OS100 In-Room Safe with Keypad', 'An economical and cost-effective safe providing the essential security amenities expected by modern travelers.', '/assets/image/Onity/OS100 In Room Safe With Keypad.png', '/our-products/onity/keypad-and-opening-option-os100'),
(236, 'Onity', 'Hotel Security Systems', 'Onity DirectKey: Mobile Access Solution', 'The core mobile access technology platform that allows guests to use their smartphones as secure room keys.', '/assets/image/Onity/Onity-DirectKey Mobile Access Solution.png', '/our-products/onity/mobile-access-solution'),
(237, 'Orbita', 'Hotel Security Systems', 'OBT-2043MB Hotel Room Safe', 'A scratch-resistant guestroom safe with manual buttons and a high-security lock mechanism. Dimensions: W420 x H200 x D370mm.', '/assets/image/Orbita/OBT 2043MB.png', '/our-products/orbita/obt-2043mb'),
(238, 'Orbita', 'Hotel Security Systems', 'OBT-4135MG Hotel Room Safe', 'Constructed with cold-rolled steel and designed with an upward latch for ergonomic and easier guest access.', '/assets/image/Orbita/OBT 4135MG.png', '/our-products/orbita/obt-4135mg'),
(239, 'Orbita', 'Hotel Security Systems', 'OBT-2042MJ Hotel Room Safe', 'High-end luxury safe featuring anti-theft, anti-mite, and anti-drill protection with a clear LCD display for user feedback.', '/assets/image/Orbita/OBT 2042MJ.png', '/our-products/orbita/obt-2042mj-hotel-room'),
(240, 'Orbita', 'Hotel Security Systems', 'OBT-2042MG Hotel Room Safe', 'Versatile and scratch-resistant safe that can be fixated to walls or tight spaces, featuring an integrated LCD display.', '/assets/image/Orbita/OBT 2042MG.png', '/our-products/orbita/obt-2042mg-hotel-room-safe'),
(241, 'Orbita', 'Hotel Security Systems', 'S4432G LCD Luxury Design Hotel Lock', 'A sleek electronic door lock featuring an integrated LCD screen to communicate lock status and room information.', '/assets/image/Orbita/S4432G.png', '/our-products/orbita/s4432g-lcd-luxury-design'),
(242, 'Orbita', 'Hotel Security Systems', 'S3076 Hotel RFID Lock', 'Fashionable, streamlined design with a hidden keyhole for emergency access. Fully compatible with RFID/Keycard systems.', '/assets/image/Orbita/S3076.png', '/our-products/orbita/s3076-hotel-frid-lock'),
(243, 'Orbita', 'Hotel Security Systems', 'P8030 Fully Automatic Smart Lock', 'High-strength zinc alloy smart lock that supports multiple entry methods including fingerprints and passwords.', '/assets/image/Orbita/P8030.png', '/our-products/orbita/p8030-fully-automatic-smart-lock'),
(244, 'Orbita', 'Hotel Security Systems', 'P8010 Fingerprint Smart Lock', 'A high-end 304 stainless steel smart lock featuring advanced fingerprint recognition for secure and efficient entry.', '/assets/image/Orbita/P8010.png', '/our-products/orbita/p8010-fingerprint-smart-lock'),
(245, 'Orbita', 'Hotel Security Systems', 'E4041 LCD Smart Electronic Hotel Lock', 'An elegant hotel lock solution featuring an LED screen, specifically designed for hotels, resorts, and high-end apartments.', '/assets/image/Orbita/E4041.png', '/our-products/orbita/e4041-lcd-smart'),
(246, 'Orbita', 'Hotel Security Systems', 'ER3092 Hotel Lock', 'Waterproof, 304 stainless steel RFID lock designed for durability in high-traffic hotel environments.', '/assets/image/Orbita/ER3092.png', '/our-products/orbita/er3092-hotel-lock'),
(247, 'Orbita', 'Hotel Security Systems', 'E3041 Hotel RFID Lock', 'A grade 304 stainless steel lock with PVC coating, offering high resistance to water and frequent usage.', '/assets/image/Orbita/E3041.png', '/our-products/orbita/e3041-hotel-rfid-lock'),
(248, 'Paradox', 'Intrusion Alarm Systems', 'SP7000 Controller | 16 to 32-Zone Control Panel', 'Paradox Spectra SP7000 is a flexible security alarm control panel with 16 hardwired zones, expandable to 32.', '/assets/image/Paradox/SP7000.png', '/our-products/paradox/sp7000-controller'),
(249, 'Paradox', 'Intrusion Alarm Systems', 'SP6000 Controller | 8 to 32-Zone Control Panel', 'A flexible security alarm control panel with 8 hardwired zones, ideal for comprehensive residential or commercial protection.', '/assets/image/Paradox/SP6000.png', '/our-products/paradox/sp6000-controller'),
(250, 'Paradox', 'Intrusion Alarm Systems', 'SP5500+ Controller | 5 to 32-Zone Control Panel', 'Scalable security solution for larger homes featuring high zone capacity and advanced programming options.', '/assets/image/Paradox/SP5500.png', '/our-products/paradox/sp5500-controller'),
(251, 'Paradox', 'Intrusion Alarm Systems', 'SP4000 Controller | 4 to 32-Zone Control Panel', 'Powerful and affordable alarm system control panel providing comprehensive management for small to medium premises.', '/assets/image/Paradox/SP4000.png', '/our-products/paradox/sp4000-controller'),
(252, 'Paradox', 'Intrusion Alarm Systems', 'SP65 | Expandable to 32-Zone Control Panel', 'Offers a combination of innovative features and expandable zones to form the core of a robust Paradox security system.', '/assets/image/Paradox/SP65.png', '/our-products/paradox/expandable-32-zone-control-panel'),
(253, 'Paradox', 'Intrusion Alarm Systems', 'ZX82 8-Zone Expansion Module', 'Provides up to eight additional hardwired zone inputs and features an on-board anti-tamper switch.', '/assets/image/Paradox/ZX82.png', '/our-products/paradox/zx82-expansion-module'),
(254, 'Paradox', 'Intrusion Alarm Systems', 'ZX8 8-Zone Expansion Module', 'An interface module that connects detection devices to the keypad bus of EVO, Spectra, or MG Panels.', '/assets/image/Paradox/ZX8.png', '/our-products/paradox/zx8-expansion-module'),
(255, 'Paradox', 'Intrusion Alarm Systems', 'PGM82 8-PGM Expansion Module', 'Includes eight programmable relay outputs to expand the automated capabilities of your security system.', '/assets/image/Paradox/PGM82.png', '/our-products/paradox/pgm82-expansion-module'),
(256, 'Paradox', 'Intrusion Alarm Systems', 'PGM4 4-Output Expansion Module', 'An expansion module featuring four fully programmable relay outputs for customizable system responses.', '/assets/image/Paradox/PGM4.png', '/our-products/paradox/pgm4-expansion-module'),
(257, 'Paradox', 'Intrusion Alarm Systems', 'RX1 Wireless Receiver', 'Seamlessly integrates wireless devices with hardwired Paradox systems, offering flexible protection without extensive wiring.', '/assets/image/Paradox/RX1.png', '/our-products/paradox/rx1-wireless-receiver'),
(258, 'Paradox', 'Intrusion Alarm Systems', 'PS45 Supervised Power Supply', 'A 75W supervised backup battery multi-purpose power supply designed to power up to 10 system modules.', '/assets/image/Paradox/PS45.jpg', '/our-products/paradox/ps45-supervised-power-supply'),
(259, 'Paradox', 'Intrusion Alarm Systems', 'NV780MR Digital Outdoor Dual Side-View Detector', 'Provides a pre-entry perimeter protection solution with dual side-view detection to catch breaches before they occur.', '/assets/image/Paradox/NV780MR.png', '/our-products/paradox/nv780mr-digital-outdoor-dual-size-view'),
(260, 'Paradox', 'Intrusion Alarm Systems', 'DM70 High-Security Motion Detector Module', 'Dual optic motion detector module featuring pet immunity for animals up to 40kg, compatible with Digiplex systems.', '/assets/image/Paradox/DM70.png', '/our-products/paradox/dm70-high-security-motion-detector'),
(261, 'Paradox', 'Intrusion Alarm Systems', 'DG467 360 Ceiling Mounted Motion Detector', 'Compact digital motion detector with a 360-degree range, optimized for high-ceiling installations.', '/assets/image/Paradox/DG467.png', '/our-products/paradox/dg467-ceiling-mounted-digital'),
(262, 'Paradox', 'Intrusion Alarm Systems', 'TM70 Touch Intuitive Touchscreen', 'Experience enhanced control with a vivid 7-inch touchscreen keypad designed for intuitive system management.', '/assets/image/Paradox/TM70.png', '/our-products/paradox/tm70-touch-intuitive-touchscreen'),
(263, 'Paradox', 'Intrusion Alarm Systems', 'K32LX 32-zone Hardwired LCD Keypad', 'Feature-rich hardwired keypad with a built-in transceiver and a blue LCD display for advanced monitoring.', '/assets/image/Paradox/K32LX.png', '/our-products/paradox/k32lx-hardwired-lcd-keypad'),
(264, 'Cass', 'Parking Management Systems', 'CP-020X Gate Barrier', 'A heavy-duty gate barrier designed to secure access and control vehicle entry/exit for commercial and residential properties.', '/assets/image/Cass/CO-020X.jpg', '/our-products/cass/gate-barrier'),
(265, 'Cass', 'Parking Management Systems', 'CP-555 Gen 2 Entry / CP-655 Gen 2 Exit', 'A chipcoin-based parking management system that provides a streamlined solution for traffic control and motorist experience.', '/assets/image/Cass/CP-555.png', '/our-products/cass/token-acceptor'),
(266, 'Cass', 'Parking Management Systems', 'CP-505 Gen 2 Entry / CP-605 Gen 2 Exit', 'A high-efficiency parking management system utilizing ticket printing and scanning for automated entry and exit logs.', '/assets/image/Cass/CP-505.png', '/our-products/cass/ticket-scanner'),
(267, 'Magnetic', 'Vehicle and Pedestrian Control', 'Terminal-MS, -MH -ML', 'Optimum functional and design supplements for Magnetic barriers, providing ticket processing for entering or exiting vehicles.', '/assets/image/Magnetic/Terminal.jpg', '/our-products/magnetic/terminal-ms'),
(268, 'Magnetic', 'Vehicle and Pedestrian Control', 'Toll Barrier', 'Rapid, reliable, and economical processing for road users at bridges, tunnels, and motorways. Designed for high-frequency toll collection.', '/assets/image/Magnetic/Toll Barrier.jpg', '/our-products/magnetic/toll-barrier'),
(269, 'Magnetic', 'Vehicle and Pedestrian Control', 'Access XL2/ XXL Barriers', 'High-security parking control for wide lanes up to 10m, featuring optional security gratings and boom skirts.', '/assets/image/Magnetic/Access XL2.jpg', '/our-products/magnetic/barriers-for-wide-lanes'),
(270, 'Magnetic', 'Vehicle and Pedestrian Control', 'Access Pro-L/ Pro-H', 'Specialized access control for building sites, port facilities, and secured areas requiring high-security boom skirts.', '/assets/image/Magnetic/Access.jpg', '/our-products/magnetic/access-pro-l'),
(271, 'Magnetic', 'Vehicle and Pedestrian Control', 'Access Pro/ Pro-M', 'Cost-optimized solutions for access control at car parks and company grounds, featuring an efficient L-shaped boom design.', '/assets/image/Magnetic/Access-Pro.jpg', '/our-products/magnetic/access-pro'),
(272, 'Magnetic', 'Vehicle and Pedestrian Control', 'Magnetic Parking/ Parking-M', 'Ideal for heavily frequented multi-storey car parks and underground garages, featuring optional folding booms for low-clearance areas.', '/assets/image/Magnetic/Magnetic.jpg', '/our-products/magnetic/magnetic-parking'),
(273, 'Magnetic', 'Vehicle and Pedestrian Control', 'MPS Wing Gate', 'Swing doors with a timeless, minimalist design suited for high-quality environments with low to medium visitor frequency.', '/assets/image/Magnetic/MPS Wing.jpg', '/our-products/magnetic/wing-gate'),
(274, 'Magnetic', 'Vehicle and Pedestrian Control', 'MPP Turnstiles', 'Versatile passageway management designed for large crowds at public pools, sports stadiums, and public facilities.', '/assets/image/Magnetic/MPP.jpg', '/our-products/magnetic/mpp-turnstiles'),
(275, 'Magnetic', 'Vehicle and Pedestrian Control', 'MPW Swing Gates', 'Enlarged width swing gates designed for rapid separation of visitors and the convenient transport of materials and wheelchairs.', '/assets/image/Magnetic/MPW Swing.jpg', '/our-products/magnetic/mpw-swing-gates'),
(276, 'Magnetic', 'Vehicle and Pedestrian Control', 'MPR Retractable Gates', 'High-speed retractable gates for rapid visitor separation in low-to-medium security areas, ensuring smooth pedestrian flow.', '/assets/image/Magnetic/MPR Retractable.jpg', '/our-products/magnetic/retractable-gates'),
(277, 'Magnetic', 'Vehicle and Pedestrian Control', 'MWing Pedestrian Passageway', 'An elegant, non-contact wing gate solution designed for high visitor numbers, wheelchair accessibility, and emergency escape routes.', '/assets/image/Magnetic/MWING.png', '/our-products/magnetic/pedestrian-passageway-with-wing-gates'),
(278, 'Leda', 'Perimeter Security & Bollards', 'SecuraPost Slimline Lighting Bollard: Urban Square Light', 'A sleek lighting bollard designed to provide nighttime illumination while blending seamlessly with modern urban landscapes.', '/assets/image/Leda/Urban Square Light.jpg', '/our-products/leda/urban-square-light'),
(279, 'Leda', 'Perimeter Security & Bollards', 'SecuraPost Slimline Lighting Bollards', 'Modern stainless steel bollards featuring integrated lighting, designed to complement architectural environments.', '/assets/image/Leda/Slimline Lighting Bollards.jpg', '/our-products/leda/slimline-lighting-bollards'),
(280, 'Leda', 'Perimeter Security & Bollards', 'SecuraPost Ambassador Aluminum Bollard', 'Corrosion-resistant high-security bollards ideal for traffic control, suitable for both traditional and modern casting shapes.', '/assets/image/Leda/Ambassador Aluminum Bollard.jpg', '/our-products/leda/ambassador-aluminum-bollard'),
(281, 'Leda', 'Perimeter Security & Bollards', 'SecuraPost Slimline Bollard', 'An aesthetically attractive removable bollard manufactured from high-grade stainless steel for architectural appeal.', '/assets/image/Leda/Slimline Bollard.jpg', '/our-products/leda/slimline-bollard'),
(282, 'Leda', 'Perimeter Security & Bollards', 'SecuraPost Sentinel Bollard', 'A removable and lockable bollard designed specifically to protect warehouses and shopfronts from ram-raid style attacks.', '/assets/image/Leda/Sentinel Bollard.jpg', '/our-products/leda/sentinel-bollard'),
(283, 'Faac', 'Automated Traffic & Security Bollards', 'JS80 High Security Steel Bollards', 'Crash-rated high-strength steel bollards featuring mDure® protective covers, certified to stop heavy vehicle intrusions.', '/assets/image/Faac/JS80.jpg', '/our-products/faac/js80'),
(284, 'Faac', 'Automated Traffic & Security Bollards', 'JS48 High Security Bollards', 'High-strength steel security bollards with a specialized protective finish, designed for high-impact resistance in sensitive areas.', '/assets/image/Faac/JS48.jpg', '/our-products/faac/js48'),
(285, 'Faac', 'Automated Traffic & Security Bollards', 'J275 Automatic Bollards', 'Retractable traffic bollards recommended for urban restricted areas with high daily transit frequencies.', '/assets/image/Faac/J275.jpg', '/our-products/faac/j275'),
(286, 'Faac', 'Automated Traffic & Security Bollards', 'J200 Automatic Traffic Bollards', 'Automated retractable bollards specifically designed for regulating vehicle traffic in high-end residential and commercial zones.', '/assets/image/Faac/J200.jpg', '/our-products/faac/j200'),
(287, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC HD300 Wedge Barricade', 'Designed to stop large vehicles at high speeds, available with fully electric or hydraulic control units.', '/assets/image/Delta/DSC HD300.jpg', '/our-products/delta/dsc-hd300-wedge-barricade'),
(288, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 2000 Modular Wedge Barricade', 'A portable, high-security modular barricade designed for quick installation in remote or temporary locations.', '/assets/image/Delta/DSC 2000.jpeg', '/our-products/delta/dsc-2000-modular-wedge-barricade'),
(289, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 550 Open Frame Wedge Barricade', 'An innovative open-frame design ideal for sites with underground utilities or buried pipe obstructions.', '/assets/image/Delta/DSC 550.jpg', '/our-products/delta/dsc-550-open-frame-wedge-barricade'),
(290, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 501 Wedge Barricade', 'Originally designed for the U.S. Navy, this barricade excels in high water table locations and corrosive soils.', '/assets/image/Delta/DSC 501.jpg', '/our-products/delta/dsc-501-wedge-barricade'),
(291, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 800 High Security Bollard', 'Crash-rated bollards available in hydraulic, pneumatic, or manual configurations to suit various high-security environments.', '/assets/image/Delta/DSC 800.jpg', '/our-products/delta/dsc-800-high-seurity-bollard'),
(292, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 720 High Security Bollard', 'Delta’s highest crash-rated bollard, tested to stop and destroy 15,000 lb vehicles traveling at high velocities.', '/assets/image/Delta/DSC 720.png', '/our-products/delta/dsc-720-high-security-bollard'),
(293, 'Delta', 'High-Security Vehicle Barricades & Bollards', 'DSC 305 Medium Security Chrome Bollard', 'A stylish yet robust steel bollard system designed for positive vehicle control in restricted areas.', '/assets/image/Delta/DSC 305.jpg', '/our-products/delta/dsc-305-medium-security'),
(294, 'Vesda', 'Aspirating Smoke Detection', 'VESDA-E VES: VES-A00-P & VES-A10-P', 'An advanced aspirating smoke detector that divides a single zone into four sectors for precise source location. Features four individually configurable alarm levels for enhanced monitoring.', '/assets/image/Vesda/VESDA Family.jpg', '/our-products/vesda/vesda-eves');

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
-- Table structure for table `contact_inquiries`
--

CREATE TABLE `contact_inquiries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `status` enum('new','read','replied') DEFAULT 'new',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_inquiries`
--

INSERT INTO `contact_inquiries` (`id`, `name`, `email`, `subject`, `message`, `status`, `created_at`) VALUES
(1, 'Zhanne Mariano', 'zhane.mariano@guardall.com.ph', 'Products CCTV', 'Products INQUIRY', 'new', '2026-03-27 02:24:54'),
(2, 'Rovic ', 'rovicloterte@gmail.com', 'test', 'test', 'new', '2026-03-27 02:51:11');

-- --------------------------------------------------------

--
-- Table structure for table `department_intros`
--

CREATE TABLE `department_intros` (
  `id` int(11) NOT NULL,
  `dept_name` varchar(100) DEFAULT 'Engineering Department',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department_intros`
--

INSERT INTO `department_intros` (`id`, `dept_name`, `description`) VALUES
(1, 'Engineering Department', 'Our Engineers are committed to deliver tailor-fit solutions for your security needs. From basic integration to complex access control systems, we offer services which anticipate the future needs of companies.');

-- --------------------------------------------------------

--
-- Table structure for table `founders`
--

CREATE TABLE `founders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(100) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `sort_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `founders`
--

INSERT INTO `founders` (`id`, `name`, `position`, `image_path`, `sort_order`) VALUES
(1, 'Derek A. Ramsay', 'General Manager', '/assets/image/Who Page/Founders/derek.png', 0),
(2, 'Remedios P. Ramsay', 'President', '/assets/image/Who Page/Founders/remedios.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `founders_message`
--

CREATE TABLE `founders_message` (
  `id` int(11) NOT NULL,
  `short_quote` text NOT NULL,
  `long_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `founders_message`
--

INSERT INTO `founders_message` (`id`, `short_quote`, `long_message`) VALUES
(1, 'At Guard-All, we believe that a secured life is one’s greatest asset.', 'In our 40 years of experience, we take pride in the fact that we do not just integrate security solutions to our partners, but we also help protect the lives of people. We continue to strive today because we only work with the best.');

-- --------------------------------------------------------

--
-- Table structure for table `home_banners`
--

CREATE TABLE `home_banners` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `cta_text` varchar(50) DEFAULT 'LEARN MORE',
  `image_path` varchar(255) NOT NULL,
  `has_badge` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_banners`
--

INSERT INTO `home_banners` (`id`, `title`, `cta_text`, `image_path`, `has_badge`) VALUES
(1, 'Protecting Lives, Securing Properties.', 'LEARN MORE', '/assets/image/Homepage/Group-46.png', 1),
(2, 'Ready to Level Up Your Security?', 'CONTACT US', '/assets/image/Homepage/Group-52.png', 0),
(3, 'Your Security Needs, All in One Place', 'BROWSE PRODUCTS', '/assets/image/Homepage/Group-53.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `home_cta`
--

CREATE TABLE `home_cta` (
  `id` int(11) NOT NULL,
  `section_name` varchar(50) DEFAULT 'secure_life',
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `button_text` varchar(50) DEFAULT 'Contact Us Today',
  `image_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_cta`
--

INSERT INTO `home_cta` (`id`, `section_name`, `title`, `description`, `button_text`, `image_path`) VALUES
(1, 'secure_life', 'Secure Your Life Today', 'Contact Guard-All now for a customized security solution to protect what matters most.', 'Contact Us Today', '/assets/image/Homepage/secure.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `home_featured_products`
--

CREATE TABLE `home_featured_products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `sort_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_featured_products`
--

INSERT INTO `home_featured_products` (`id`, `title`, `image_path`, `sort_order`) VALUES
(1, 'Quick Alert', '/assets/image/Our Products/quickalert.jpg', 0),
(2, 'Vehicle Barrier System and Pedestrian Barriers', '/assets/image/Our Products/vehicle.png', 0),
(3, 'Vesda System (Aspirating Smoke Detection)', '/assets/image/Our Products/vesda.jpg', 0),
(4, 'Access Control System', '/assets/image/Our Products/access.jpg', 0),
(5, 'Forensic Examination', '/assets/image/Our Products/forensic.png', 0),
(6, 'Guard Tour Systems', '/assets/image/Our Products/guard.jpg', 0),
(7, 'Hotel Locking', '/assets/image/Our Products/hotel.jpg', 0),
(8, 'Intrusion /Burglary Alarm Systems', '/assets/image/Our Products/intrusion.jpeg', 0),
(9, 'Parking Management / Parking Guiding System', '/assets/image/Our Products/parking.jpeg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `our_clients`
--

CREATE TABLE `our_clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sector` varchar(100) NOT NULL,
  `logo_path` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_clients`
--

INSERT INTO `our_clients` (`id`, `name`, `sector`, `logo_path`, `created_at`) VALUES
(1, 'Embassy of Singapore', 'Agencies & Embassies', '/assets/image/agencies img/singapore.png', '2026-03-27 01:14:02'),
(2, 'British Embassy Manila', 'Agencies & Embassies', '/assets/image/agencies img/british.png', '2026-03-27 01:14:02'),
(3, 'CAA Philippines', 'Agencies & Embassies', '/assets/image/agencies img/caa.png', '2026-03-27 01:14:02'),
(4, 'Australian Embassy', 'Agencies & Embassies', '/assets/image/agencies img/australian.png', '2026-03-27 01:14:02'),
(5, 'Ambassade de France', 'Agencies & Embassies', '/assets/image/agencies img/ambassade.png', '2026-03-27 01:14:02'),
(6, 'Manila Int. Airport Authority', 'Agencies & Embassies', '/assets/image/agencies img/manila.png', '2026-03-27 01:14:02'),
(7, 'Presidential Security Group', 'Agencies & Embassies', '/assets/image/agencies img/presidential.png', '2026-03-27 01:14:02'),
(8, 'GSIS', 'Agencies & Embassies', '/assets/image/agencies img/gsis.png', '2026-03-27 01:14:02'),
(9, 'Samsung Electro Mechanics', 'Corporations', '/assets/image/corporations img/samsung.png', '2026-03-27 01:14:02'),
(10, 'Coca-Cola Philippines', 'Corporations', '/assets/image/corporations img/coca-cola.png', '2026-03-27 01:14:02'),
(11, 'Marubeni', 'Corporations', '/assets/image/corporations img/marubeni.png', '2026-03-27 01:14:02'),
(12, 'Nestle', 'Corporations', '/assets/image/corporations img/nestle.png', '2026-03-27 01:14:02'),
(13, 'PLDT', 'Corporations', '/assets/image/corporations img/pldt.png', '2026-03-27 01:14:02'),
(14, 'Smart', 'Corporations', '/assets/image/corporations img/smart.png', '2026-03-27 01:14:02'),
(15, 'NGCP', 'Corporations', '/assets/image/corporations img/ngcp.png', '2026-03-27 01:14:02'),
(16, 'San Miguel Corporation', 'Corporations', '/assets/image/corporations img/san miguel.png', '2026-03-27 01:14:02'),
(17, 'Egis', 'Engineering, Construction & Logistics', '/assets/image/ecl img/egis.png', '2026-03-27 01:14:02'),
(18, 'Hanjin Heavy Industries', 'Engineering, Construction & Logistics', '/assets/image/ecl img/hanjin.png', '2026-03-27 01:14:02'),
(19, 'ICTS', 'Engineering, Construction & Logistics', '/assets/image/ecl img/icts.png', '2026-03-27 01:14:02'),
(20, 'Negros Navigation', 'Engineering, Construction & Logistics', '/assets/image/ecl img/negros.png', '2026-03-27 01:14:02'),
(21, 'Holcim', 'Engineering, Construction & Logistics', '/assets/image/ecl img/holcim.png', '2026-03-27 01:14:02'),
(22, 'DHL', 'Engineering, Construction & Logistics', '/assets/image/ecl img/dhl.png', '2026-03-27 01:14:02'),
(23, 'Sun Life Financial', 'Finance', '/assets/image/finance img/sunlife.png', '2026-03-27 01:14:02'),
(24, 'HSBC', 'Finance', '/assets/image/finance img/hsbc.png', '2026-03-27 01:14:02'),
(25, 'Standard Chartered', 'Finance', '/assets/image/finance img/standard.png', '2026-03-27 01:14:02'),
(26, 'Security Bank', 'Finance', '/assets/image/finance img/security-bank.png', '2026-03-27 01:14:02'),
(27, 'Unilab', 'Health & Research', '/assets/image/h&r img/unilab.png', '2026-03-27 01:14:02'),
(28, 'Zuellig Pharma', 'Health & Research', '/assets/image/h&r img/zuellig.png', '2026-03-27 01:14:02'),
(29, 'DOH - RITM', 'Health & Research', '/assets/image/h&r img/doh.png', '2026-03-27 01:14:02'),
(30, 'Oak Ridge National Laboratory', 'Health & Research', '/assets/image/h&r img/oak-ridge.png', '2026-03-27 01:14:02'),
(31, 'Pacific Northwest National Lab', 'Health & Research', '/assets/image/h&r img/pacific-northwest.png', '2026-03-27 01:14:02'),
(32, 'PICC', 'Properties', '/assets/image/properties img/picc.png', '2026-03-27 01:14:02'),
(33, 'Solaire Resort Manila', 'Properties', '/assets/image/properties img/solaire.png', '2026-03-27 01:14:02'),
(34, 'Tata Consultancy Services', 'Properties', '/assets/image/properties img/consultance.png', '2026-03-27 01:14:02'),
(35, 'The Peninsula Manila', 'Properties', '/assets/image/properties img/peninsula-manila.png', '2026-03-27 01:14:02'),
(36, 'APMC', 'Properties', '/assets/image/properties img/apmc.png', '2026-03-27 01:14:02'),
(37, 'FIVE | NEO', 'Properties', '/assets/image/properties img/five-neo.png', '2026-03-27 01:14:02');

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

-- --------------------------------------------------------

--
-- Table structure for table `security_experts`
--

CREATE TABLE `security_experts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `sort_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `security_experts`
--

INSERT INTO `security_experts` (`id`, `name`, `position`, `image_path`, `sort_order`) VALUES
(1, 'Marlon V. Ramos', 'Engineering Manager', '/assets/image/Who Page/Security Experts/Marlon.png', 1),
(2, 'Prince John Lizardo', 'Service Department Manager', '/assets/image/Who Page/Security Experts/Prince.png', 2),
(3, 'Ramir Aguilar', 'MIS/IT Department Manager', '/assets/image/Who Page/Security Experts/Ramir.png', 3),
(4, 'Benedick Santiago', 'Alarm Department Manager', '/assets/image/Who Page/Security Experts/Benedick.png', 4),
(5, 'Veronica T. Reyes', 'Asset Protection Manager', '/assets/image/Who Page/Security Experts/Veronica.png', 7),
(6, 'Liza E. Cabral', 'HR Officer/Collection Officer', '/assets/image/Who Page/Security Experts/Liza.png', 8),
(7, 'Norman R. Pacia', 'Warehouse Officer', '/assets/image/Who Page/Security Experts/Norman.png', 9),
(8, 'Rosendel T. Siason', 'Purchasing Officer', '/assets/image/Who Page/Security Experts/Rosendel.png', 10),
(9, 'Marife P. Bufete T. Reyes', 'Logistic Supervisor', '/assets/image/Who Page/Security Experts/Marife.png', 11),
(10, 'Marie R. Cleofas', 'Import Supervisor', '/assets/image/Who Page/Security Experts/Marie.png', 12),
(11, 'Jane D. Naval', 'Sales and Marketing Associate', '/assets/image/Who Page/Security Experts/Jane.png', 13),
(12, 'Dennis Ballag', 'CCTV Manager', '/assets/image/Who Page/Security Experts/Dennis B.png', 5);

-- --------------------------------------------------------

--
-- Table structure for table `trusted_clients`
--

CREATE TABLE `trusted_clients` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trusted_clients`
--

INSERT INTO `trusted_clients` (`id`, `name`, `logo_path`) VALUES
(1, 'Smart', '/assets/image/Homepage/Logo2-1-2.png'),
(2, 'Decathlon', '/assets/image/Homepage/Logo4-1-1.png'),
(3, 'CAA', '/assets/image/Homepage/Logo3-1-1.png'),
(4, 'Egis', '/assets/image/Homepage/Logo1-1.png'),
(5, 'PLDT', '/assets/image/Homepage/Logo5-1-2.png');

-- --------------------------------------------------------

--
-- Table structure for table `who_we_are`
--

CREATE TABLE `who_we_are` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT 'Who We Are',
  `main_image` varchar(255) NOT NULL,
  `mission_text` text NOT NULL,
  `vision_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `who_we_are`
--

INSERT INTO `who_we_are` (`id`, `title`, `main_image`, `mission_text`, `vision_text`) VALUES
(1, 'Who We Are', '/assets/image/Who Page/Who.jpg', 'To be your trusted partner in providing high quality and expert-backed security systems.', 'To be the most reliable security systems integrator in the Philippines.');

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
-- Indexes for table `brand_products`
--
ALTER TABLE `brand_products`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department_intros`
--
ALTER TABLE `department_intros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `founders`
--
ALTER TABLE `founders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `founders_message`
--
ALTER TABLE `founders_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_banners`
--
ALTER TABLE `home_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_cta`
--
ALTER TABLE `home_cta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_featured_products`
--
ALTER TABLE `home_featured_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our_clients`
--
ALTER TABLE `our_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `security_experts`
--
ALTER TABLE `security_experts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trusted_clients`
--
ALTER TABLE `trusted_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `who_we_are`
--
ALTER TABLE `who_we_are`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `brand_products`
--
ALTER TABLE `brand_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=295;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `contact_inquiries`
--
ALTER TABLE `contact_inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `department_intros`
--
ALTER TABLE `department_intros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `founders`
--
ALTER TABLE `founders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `founders_message`
--
ALTER TABLE `founders_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_banners`
--
ALTER TABLE `home_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `home_cta`
--
ALTER TABLE `home_cta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_featured_products`
--
ALTER TABLE `home_featured_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `our_clients`
--
ALTER TABLE `our_clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `security_experts`
--
ALTER TABLE `security_experts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `trusted_clients`
--
ALTER TABLE `trusted_clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `who_we_are`
--
ALTER TABLE `who_we_are`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
