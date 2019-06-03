drop table if exists `users`;
CREATE TABLE IF NOT EXISTS `users`(
    `mid` varchar(50) NOT NULL UNIQUE,
    `user_name` VARCHAR(30) NOT NULL UNIQUE,
    `user_pwd` VARCHAR(100) NOT NULL,
    `role` tinyint(2) DEFAULT 1,
    `create_time` DATETIME ,
    PRIMARY KEY (`mid`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- drop table if exists `users`;
-- CREATE TABLE IF NOT EXISTS `users`(
--    `mid` varchar(50) NOT NULL UNIQUE,
--    `user_name` VARCHAR(30) NOT NULL UNIQUE,
--    `user_pwd` VARCHAR(100) NOT NULL,
--    `role` tinyint(2) DEFAULT 1,
--    `create_time` DATETIME ,
--    PRIMARY KEY ( `mid` )
-- )ENGINE=InnoDB DEFAULT CHARSET=utf8;