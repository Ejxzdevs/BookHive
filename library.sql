-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for library
CREATE DATABASE IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `library`;

-- Dumping structure for table library.account
CREATE TABLE IF NOT EXISTS `account` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` varchar(50) NOT NULL,
  `user_created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.account: ~3 rows (approximately)
REPLACE INTO `account` (`user_id`, `user_email`, `user_password`, `user_role`, `user_created_at`) VALUES
	(1, 'user@gmail.com', 'user', 'user', '2025-01-02 15:22:25'),
	(2, 'admin@gmail.com', 'admin', 'admin', '2025-01-02 15:22:25'),
	(3, 'charlie@example.com', 'mypassword789', 'user', '2025-01-02 15:22:25');

-- Dumping structure for table library.books
CREATE TABLE IF NOT EXISTS `books` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(50) DEFAULT '',
  `book_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `book_release` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image_url` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `genre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `book_status` varchar(50) DEFAULT 'Available',
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.books: ~7 rows (approximately)
REPLACE INTO `books` (`book_id`, `book_title`, `book_description`, `book_release`, `image_url`, `author`, `genre`, `book_status`) VALUES
	(1, 'The Night Circus', 'A magical and atmospheric tale set around a mysterious circus that arrives without warning. The circus is open only at night and is a battleground for two young illusionists, Celia and Marco, who have been trained from childhood to compete against each other. Their rivalry takes a toll on their lives, relationships, and the people they love, weaving a tale of love, intrigue, and magi', '2025-01-06 09:02:14', 'The Night Circus.png', 'Erin Morgenstern', 'Fantasy, Historical Fiction', 'Available'),
	(14, 'The Catcher in the Rye', 'Narrated by Holden Caulfield, a disillusioned teenage boy, the story reflects his journey of alienation and emotional turmoil as he wanders New York City after being expelled from his prep school. It explores themes of identity, mental health, and the struggles of adolescence', '2025-01-07 05:09:41', 'The Catcher in the Rye.png', 'J.D. Salinger', 'Literary Fiction, Coming-of-Age', 'Available'),
	(15, 'The Hunger Games', 'In a future society known as Panem, 16-year-old Katniss Everdeen volunteers to take her sister’s place in the annual Hunger Games, a televised fight to the death. As she fights to survive, Katniss becomes a symbol of rebellion against the oppressive Capitol', '2025-01-07 05:20:45', 'The Hunger Games.jfif', 'Suzanne Collins', 'Dystopian, Science Fiction', 'Available'),
	(16, 'Pride and Prejudice', 'This beloved classic follows the life of Elizabeth Bennet, whose sharp wit and strong sense of independence clash with the wealthy and seemingly arrogant Mr. Darcy. As their relationship develops, the novel explores themes of social class, marriage, and individual growth', '2025-01-07 05:26:34', 'Pride and Prejudice.jfif', 'Jane Austen', 'Romance, Classic', 'Not Available'),
	(18, 'The Kite Runner', 'The Alchemist by Paulo Coelho – A philosophical novel about a young shepherd\'s journey to find his personal legend and the true meaning of life', '2025-01-16 06:49:05', 'The Kite Runner.jpg', 'Khaled Hosseini', 'Drama', 'Available'),
	(19, 'Harry Potter and the Sorcerer’s Stone', 'Harry Potter and the Sorcerer’s Stone by J.K. Rowling – The first book in the series about a young wizard\'s journey at Hogwarts School of Witchcraft and Wizardry', '2025-01-16 06:52:06', 'Harry Potter and the Sorcererâs Stone.jpg', 'J.K. Rowling', 'Fantasy', 'Available'),
	(20, '1984', 'A dystopian novel that explores the dangers of totalitarianism and the surveillance state in a future society', '2025-01-16 06:56:11', '1984.jpg', 'George Orwell', 'Dystopian', 'Available');

-- Dumping structure for table library.inquiries
CREATE TABLE IF NOT EXISTS `inquiries` (
  `inquiry_id` int NOT NULL AUTO_INCREMENT,
  `inquiry_name` varchar(255) NOT NULL,
  `inquiry_email` varchar(255) NOT NULL,
  `inquiry_status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Pending',
  `inquiry_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `inquiry_message` text,
  PRIMARY KEY (`inquiry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.inquiries: ~8 rows (approximately)
REPLACE INTO `inquiries` (`inquiry_id`, `inquiry_name`, `inquiry_email`, `inquiry_status`, `inquiry_date`, `inquiry_message`) VALUES
	(22, 'Sarah Thompson', 'SarahThompson@gmail.com', 'Read', '2025-01-16 14:39:41', 'Hello, I would like to know if the book The Great Gatsby is available for checkout. Can you please check for me'),
	(23, 'James Roberts', 'Jamesroberts@gmail.com', 'Pending', '2025-01-16 14:41:04', 'Good afternoon! I’m looking for a copy of To Kill a Mockingbird. Do you have any copies available right now?'),
	(24, 'Emma Johnson', 'Emmajohnson@gmail.com', 'Pending', '2025-01-16 14:41:53', 'Hi, I’m wondering if 1984 by George Orwell is available in your library. Could you let me know if it’s on the shelf?'),
	(25, 'Daniel Lee', 'Daniellee@gmail.com', 'Pending', '2025-01-16 14:42:22', 'Hello, I’m trying to find the book The Catcher in the Rye. Can you confirm if it’s currently checked out or available'),
	(26, 'Olivia Martinez', 'Oliviamartinez@gmail.com', 'Read', '2025-01-16 14:42:52', 'Hi, I would like to inquire about the availability of The Hobbit. Do you have a copy I can borrow'),
	(27, 'Michael Harris', 'Michaelharris@gmail.com', 'Pending', '2025-01-16 14:43:14', 'Hello, I’m looking for the book Pride and Prejudice. Is it available in your library collection?'),
	(28, 'Lily Baker', 'Lilybaker@gmail.com', 'Pending', '2025-01-16 14:43:34', 'Good morning, I’d like to know if Moby Dick is in your catalog. Could you let me know if I can check it out?'),
	(29, 'Noah Carter', 'Noahcarter@gmail.com', 'Pending', '2025-01-16 14:44:00', 'Hi, I was hoping to check out The Lord of the Rings. Is it available for borrowing right now?');

-- Dumping structure for table library.news
CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `news_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `news_content` text,
  `news_image` varchar(500) DEFAULT NULL,
  `news_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.news: ~1 rows (approximately)
REPLACE INTO `news` (`news_id`, `news_title`, `news_content`, `news_image`, `news_date`) VALUES
	(6, 'Library System Maintenance Downtime Notification', 'Dear Library Users,\r\nPlease be informed that the library management system will undergo scheduled maintenance on Saturday, January 15, 2025, from 2:00 AM to 6:00 AM. During this time, the system will be temporarily unavailable for accessing accounts, borrowing/returning books, and placing holds. We apologize for any inconvenience this may cause and appreciate your understanding', 'Library System Maintenance Downtime Notification.png', '2025-01-11 23:26:44');

-- Dumping structure for table library.reports
CREATE TABLE IF NOT EXISTS `reports` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `report_name` varchar(50) DEFAULT NULL,
  `report_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.reports: ~4 rows (approximately)
REPLACE INTO `reports` (`report_id`, `report_name`, `report_date`) VALUES
	(1, 'Books', '2025-01-16 13:07:21');

-- Dumping structure for table library.requests
CREATE TABLE IF NOT EXISTS `requests` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `fullname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `request_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `request_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `request_message` varchar(500) DEFAULT NULL,
  `request_status` varchar(50) DEFAULT 'Pending',
  PRIMARY KEY (`request_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table library.requests: ~27 rows (approximately)
REPLACE INTO `requests` (`request_id`, `book_id`, `fullname`, `request_email`, `phone_number`, `request_date`, `request_message`, `request_status`) VALUES
	(10, 1, ' John Doe', ' johndoe@gmail.com', '0917-123-4567', '2025-02-16 15:08:23', 'I would like to borrow this book. Could you please let me know if it\'s available?', 'Approved'),
	(11, 1, 'Mary Smith', 'marysmith@gmail.com', '0917-123-4567', '2025-03-16 15:08:48', 'Could I please borrow this book? I’m interested in reading it', 'Approved'),
	(12, 1, ' James Brown', 'jamesbrown@gmail.com', '0917-123-4567', '2025-12-16 15:09:13', 'Is this book available to borrow? I’d love to check it out.', 'Approved'),
	(13, 1, 'Linda Taylor', 'lindataylor@gmail.com', '0917-123-4567', '2025-02-16 15:10:21', 'Would you mind if I borrowed this book? I\'d greatly appreciate it', 'Approved'),
	(14, 19, 'Emma Clark', 'emmaclark@gmail.com', '0917-123-4567', '2025-04-16 15:10:49', 'Is there any way I can borrow this book for a while?', 'Pending'),
	(15, 20, 'David Lee', 'davidle@gmail.com', '0917-123-4567', '2025-05-16 15:12:25', 'Could I possibly borrow this book for a few weeks?', 'Pending'),
	(16, 19, 'Olivia Martinez', 'oliviamartinez@gmail.com', '0917-123-4567', '2025-06-16 15:12:48', 'I’m interested in borrowing this book. Can you let me know if it\'s available?', 'Approved'),
	(17, 16, 'Brian Harris', 'brianharris@gmail.com', '0917-123-4567', '2025-07-16 15:13:10', 'I’m interested in reading this book. Could I borrow it for a while?', 'Approved'),
	(18, 15, 'Ethan Scott', 'ethanscott@gmail.com', '0917-123-4567', '2025-08-16 15:13:35', 'I’d like to borrow this book if it’s possible. Please let me know.', 'Approved'),
	(19, 15, 'Charlotte Adams', 'charlotteadams@gmail.com', '0917-123-4567', '2025-09-16 15:13:56', 'Would you be able to lend me this book? I’d be very grateful', 'Approved'),
	(20, 15, 'Daniel Nelson', 'danielnelson@gmail.com', '0917-123-4567', '2025-10-16 15:14:15', 'Could I borrow this book for a while? I’m looking forward to reading it.', 'Approved'),
	(21, 18, 'Sophia Carter', 'sophiacarter@gmail.com', '0917-123-4567', '2025-11-16 15:14:41', 'I’m hoping to borrow this book soon. Can you let me know if it\'s available?', 'Approved'),
	(22, 14, 'Jake Turner', 'jaketurner@gmail.com', '0927-765-4321', '2025-12-16 15:23:49', 'I’m interested in borrowing this book. Could you please let me know if it\'s available?', 'Approved'),
	(23, 20, 'Anna Green', 'annagreen@gmail.com', '0927-765-4321', '2025-12-16 15:24:19', 'Would it be possible to borrow this book for a short time?', 'Pending'),
	(24, 19, 'William Scott', 'williamscott@gmail.com', '0927-765-4321', '2025-06-16 15:24:40', 'Could I borrow this book for a few days? I would appreciate it', 'Approved'),
	(25, 18, 'Natalie Garcia', 'nataliegarcia@gmail.co', '0927-765-4321', '2025-05-16 15:25:02', 'Is this book available to borrow? I’d love to read it.', 'Approved'),
	(26, 19, 'Michael Davis', 'michaeldavis@gmail.com', ' 0927-765-432', '2025-04-16 15:25:20', 'I’d like to borrow this book. Could you let me know how to proceed?', 'Approved'),
	(27, 16, 'Ella Thomas', 'ellathomas@gmail.com', '0927-765-4321', '2025-06-16 15:25:43', 'Would it be alright if I borrow this book for a week?', 'Approved'),
	(28, 20, 'Jack White', 'jackwhite@gmail.com', '0927-765-4321', '2025-03-16 15:26:03', 'Is it possible to borrow this book? I\'d really like to read it', 'Approved'),
	(29, 20, 'Zoe Wilson', 'zoewilson@gmail.com', '0927-765-4321', '2025-05-16 15:26:25', 'Can I borrow this book for a short period? Let me know, please.', 'Approved'),
	(30, 18, 'Ethan Brown', 'ethanbrown@gmail.com', '0927-765-4321', '2025-07-16 15:26:47', 'Could you lend me this book? I would love to read it soon.', 'Approved'),
	(31, 16, 'Grace Miller', 'gracemiller@gmail.com', '0927-765-4321', '2025-04-16 15:27:09', 'I’m interested in borrowing this book. Is it available for lending?', 'Pending'),
	(32, 19, 'Leo Harris', 'leoharris@gmail.com', '0927-765-4321', '2025-08-16 15:27:30', 'Can I borrow this book for a little while? I’m eager to read it.', 'Pending'),
	(33, 15, 'Lily Robinson', 'lilyrobinson@gmail.com', '0927-765-4321', '2025-05-16 15:27:51', 'I would love to borrow this book. Could you confirm if it’s available?', 'Approved'),
	(34, 14, 'Oscar Martinez', 'oscarmartinez@gmail.com', '0927-765-4321', '2025-01-16 15:28:14', 'Is it okay for me to borrow this book? I’d really appreciate it', 'Approved'),
	(35, 1, 'Sophia Anderson', 'sophiaanderson@gmail.com', '0927-765-4321', '2025-08-16 15:28:33', 'I’m hoping to borrow this book. Could you let me know if it’s available?', 'Approved'),
	(36, 1, 'Samuel Roberts', ' samuelroberts@gmail.com', '0927-765-4321', '2025-01-16 15:28:56', 'Could you kindly let me borrow this book? I’d be very grateful', 'Approved');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
