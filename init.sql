CREATE DATABASE IF NOT EXISTS subscribers;
USE subscribers;

DROP TABLE IF EXISTS `subscriber`;

CREATE TABLE subscriber (  
`name` varchar(100) DEFAULT NULL,
  `orderId` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `lastModifiedTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB;

-- INSERT INTO subscriber (name, orderId, status, lastModifiedTime) VALUES ('SubscriberA', '123', 'ACTIVE
-- ', '2020-01-01 00:00:00');