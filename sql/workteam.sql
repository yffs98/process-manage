drop table if EXISTS `projects`;
drop table if EXISTS `teams`;
drop table if EXISTS `members`;
drop table if EXISTS `tasks`;
drop table if EXISTS `users`;
CREATE TABLE IF NOT EXISTS `projects`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `project_id` varchar(30) NOT NULL UNIQUE,
   `cid` varchar(30) NOT NULL,
   `class_name` VARCHAR(30) NOT NULL default '1610A',
   `project_name` VARCHAR(100) NOT NULL UNIQUE,
   `project_discription` VARCHAR(100) DEFAULT '',
   `create_time` VARCHAR(100) DEFAULT '',
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `user_id` varchar(30) NOT NULL UNIQUE,
   `identity` tinyint NOT NULL comment '0-管理员,1-teacher,2-student,3',
   `user_name` VARCHAR(30) NOT NULL '',
   `user_pwd` VARCHAR(20) NOT NULL,
   `user_class` VARCHAR(6) DEFAULT '',
   `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `teams`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `team_id` VARCHAR(100) NOT NULL UNIQUE,
   `pid` varchar(30) NOT NULL,
   `team_name` VARCHAR(100) NOT NULL,
   `team_gitadress` VARCHAR(100) DEFAULT '' UNIQUE,
   `create_time` VARCHAR(100) DEFAULT '',
   PRIMARY KEY ( `id` ),
   FOREIGN KEY (`pid`) REFERENCES projects(`project_id`),
   UNIQUE KEY `pid_tname_git`(`pid`,`team_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 0: teacher  1: 组长  2:组员

CREATE TABLE IF NOT EXISTS `members`(
   `id` INT(7) UNSIGNED zerofill AUTO_INCREMENT,
   `mid` varchar(30) NOT NULL UNIQUE,
   `member_name` VARCHAR(100) NOT NULL,
   `member_gender` tinyint NOT NULL,
   `identity` tinyint NOT NULL,
   `member_age` int,
   `potriat` VARCHAR(100) default '',
   `team_id` VARCHAR(100) NOT NULL,
   PRIMARY KEY ( `id` ),
   FOREIGN KEY (`team_id`) REFERENCES teams(`team_id`),
   UNIQUE KEY `team_id_member_name`(`team_id`,`member_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 0:todo 1:doing  2: done

CREATE TABLE IF NOT EXISTS `tasks`(
   `tid` INT(8) UNSIGNED zerofill AUTO_INCREMENT,
   `task_name` VARCHAR(100) NOT NULL,
   `task_status` tinyint default 0,
   `task_checked` tinyint default 0,
   `check_person` VARCHAR(100) default '',
   `mid` varchar(30) NOT NULL,
   `team_id` varchar(30) NOT NULL,
   `pid` varchar(30) NOT NULL,
   PRIMARY KEY ( `tid` ),
   FOREIGN KEY (`mid`) REFERENCES members(`mid`),
   UNIQUE KEY `mid_task_name`(`mid`,`task_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

