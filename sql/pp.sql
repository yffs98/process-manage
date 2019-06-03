-- MySQL dump 10.13  Distrib 5.6.43, for Linux (x86_64)
--
-- Host: localhost    Database: project_process
-- ------------------------------------------------------
-- Server version	5.6.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(7) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `mid` varchar(30) NOT NULL,
  `member_name` varchar(100) NOT NULL,
  `member_gender` tinyint(4) NOT NULL,
  `identity` tinyint(4) NOT NULL,
  `member_age` int(11) DEFAULT NULL,
  `potriat` varchar(100) DEFAULT '',
  `team_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mid` (`mid`),
  UNIQUE KEY `team_id_member_name` (`team_id`,`member_name`),
  CONSTRAINT `members_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (0000175,'member_xu1vpsb6tk0000','张硕',0,1,0,'','team_asennzrqhw8000'),(0000176,'member_o4tq8v5hixc000','邓涢桐',0,2,0,'','team_asennzrqhw8000'),(0000177,'member_pw243zzi3q8000','康杰',0,2,0,'','team_asennzrqhw8000'),(0000180,'member_5quxeair3o0000','肖玉凤',0,2,0,'','team_16lgt78782xs000'),(0000181,'member_1gz3ik7vhz0g000','李晓凯',0,1,0,'','team_16lgt78782xs000'),(0000182,'member_1dqgoq3nxw3k000','王晓园',0,2,0,'','team_16lgt78782xs000'),(0000183,'member_1h8hwxzdsmlc000','唐宇',0,2,0,'','team_16lgt78782xs000'),(0000184,'member_17oiwwou0i74000','崔莉莉',0,1,0,'','team_a9lkxyhi2gg000'),(0000185,'member_1k9is5xpdh1c00','楚凤沛',0,2,0,'','team_a9lkxyhi2gg000'),(0000186,'member_ogxn0243wbk000','王猛',0,2,0,'','team_a9lkxyhi2gg000'),(0000188,'member_taaq5gb4ggw000','杨一帆',0,2,0,'','team_a9lkxyhi2gg000'),(0000189,'member_y7jl45q0iyo000','郑雷',0,2,0,'','team_asennzrqhw8000'),(0000190,'member_lckgdw75ef4000','侯瑞峰',0,1,0,'','team_tyyydlpm1r4000'),(0000191,'member_6lbotin4ld8000','张敏',0,2,0,'','team_tyyydlpm1r4000'),(0000192,'member_dtsjnuf3128000','郭小刚',0,2,0,'','team_tyyydlpm1r4000'),(0000193,'member_1cb0jzwtrj4w000','张健榜',0,2,0,'','team_1etwx75cncf4000'),(0000194,'member_ai9tzgplzyo000','董生',0,2,0,'','team_tyyydlpm1r4000'),(0000195,'member_wnc08uirurk000','李晓飞',0,1,0,'','team_1etwx75cncf4000'),(0000196,'member_ikwab1irwxs000','孙鹏辉',0,1,0,'','team_5oswpxl9yjo000'),(0000197,'member_1btj0lthduzk000','郎玲玲',0,2,0,'','team_1etwx75cncf4000'),(0000198,'member_1l71yqj8z15s000','李伟',0,2,0,'','team_5oswpxl9yjo000'),(0000199,'member_1aooo5nmxvds000','郭怡凯',0,2,0,'','team_1etwx75cncf4000'),(0000200,'member_oy1z0ilwdcg000','孟佳琦',0,2,0,'','team_5oswpxl9yjo000'),(0000201,'member_a6w4aydi8ao000','祁云凯',0,1,0,'','team_ho6cv2sueo8000'),(0000202,'member_i0nv0j7yyc8000','葛思辰',0,2,0,'','team_ho6cv2sueo8000'),(0000203,'member_dspsm2z6je8000','丁思羽',0,2,0,'','team_ho6cv2sueo8000'),(0000204,'member_anvxvqfn4ss000','郑伟浩',0,1,0,'','team_aq1x9atkwbk00'),(0000205,'member_tt3z52idkxs000','王君恩',0,2,0,'','team_aq1x9atkwbk00'),(0000206,'member_14yt1zfbrnmk00','杭一达',0,2,0,'','team_aq1x9atkwbk00'),(0000207,'member_aueorufd7ug000','张惠娟',0,2,0,'','team_aq1x9atkwbk00');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project_id` varchar(30) NOT NULL,
  `cid` varchar(30) NOT NULL,
  `class_name` varchar(30) NOT NULL DEFAULT '1610A',
  `project_name` varchar(100) NOT NULL,
  `project_discription` varchar(100) DEFAULT '',
  `create_time` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id` (`project_id`),
  UNIQUE KEY `project_name` (`project_name`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (74,'project_1em2fzip6i0w000','1610A','1610A','网站内部考试平台系统（教师端）','CMS系统；\n技术栈：vue及其生态圈','1557988639015');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `tid` int(8) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `task_name` varchar(100) NOT NULL,
  `task_status` tinyint(4) DEFAULT '0',
  `task_checked` tinyint(4) DEFAULT '0',
  `check_person` varchar(100) DEFAULT '',
  `mid` varchar(30) NOT NULL,
  `team_id` varchar(30) NOT NULL,
  `pid` varchar(30) NOT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `mid_task_name` (`mid`,`task_name`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`mid`) REFERENCES `members` (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=295 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (00000124,'登录页面',2,0,'','member_xu1vpsb6tk0000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000125,'Home页面',2,0,'','member_xu1vpsb6tk0000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000126,'班级管理',2,0,'','member_xu1vpsb6tk0000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000127,'教室管理',2,0,'','member_xu1vpsb6tk0000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000128,'学生管理',1,0,'','member_xu1vpsb6tk0000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000130,'学生管理',2,0,'','member_5quxeair3o0000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000131,'登录页面',2,0,'','member_1gz3ik7vhz0g000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000132,'添加考试',2,0,'','member_1gz3ik7vhz0g000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000133,'添加用户',1,0,'','member_1gz3ik7vhz0g000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000134,'展示用户',1,0,'','member_1gz3ik7vhz0g000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000135,'主页面',2,0,'','member_5quxeair3o0000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000136,'侧边栏',2,0,'','member_5quxeair3o0000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000137,'登陆实现',2,0,'','member_5quxeair3o0000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000138,'添加试题',2,1,'member_17oiwwou0i74000','member_17oiwwou0i74000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000140,'试题分类',1,0,'','member_17oiwwou0i74000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000141,'用户添加',2,0,'','member_taaq5gb4ggw000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000143,'班级管理',2,0,'','member_1k9is5xpdh1c00','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000144,'添加考试',2,0,'','member_ogxn0243wbk000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000145,'试卷列表',1,0,'','member_ogxn0243wbk000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000146,'学生管理',2,0,'','member_1k9is5xpdh1c00','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000147,'教室管理',1,0,'','member_1k9is5xpdh1c00','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000148,'展示用户',1,0,'','member_taaq5gb4ggw000','team_a9lkxyhi2gg000','project_1em2fzip6i0w000'),(00000149,'添加用户',2,0,'','member_pw243zzi3q8000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000150,'添加试题',2,0,'','member_y7jl45q0iyo000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000151,'用户展示, 分页待完成',1,0,'','member_pw243zzi3q8000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000152,'试题分类，查看试题',2,0,'','member_y7jl45q0iyo000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000153,'试题详情',2,0,'','member_y7jl45q0iyo000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000155,'添加用户',2,0,'','member_lckgdw75ef4000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000156,'试题分类',2,0,'','member_1h8hwxzdsmlc000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000158,'用户展示',2,0,'','member_lckgdw75ef4000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000159,'添加考试',2,0,'','member_o4tq8v5hixc000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000160,'试题列表',1,0,'','member_o4tq8v5hixc000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000162,'添加考试',2,0,'','member_6lbotin4ld8000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000163,'试题管理---添加试题',2,0,'','member_1cb0jzwtrj4w000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000164,'用户管理的业务处理',0,0,'','member_ikwab1irwxs000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000166,'试题列表',2,0,'','member_6lbotin4ld8000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000167,'添加试题',2,0,'','member_dtsjnuf3128000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000168,'试题管理---试题分类',2,0,'','member_1cb0jzwtrj4w000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000169,'路由配置',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000170,'教室管理页面排版',2,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000171,'试题管理--查看试题',1,0,'','member_1cb0jzwtrj4w000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000173,'学生管理',1,0,'','member_dtsjnuf3128000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000175,'cookie配置',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000176,'学生管理页面排版',2,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000177,'Loding配置',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000178,'用户展示',1,0,'','member_ikwab1irwxs000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000180,'登录页面排版及功能实现',2,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000183,'查看试题',1,0,'','member_6lbotin4ld8000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000185,'用户管理页面',2,0,'','member_ikwab1irwxs000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000187,'header头部配置',2,0,'','member_i0nv0j7yyc8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000188,'主页的用户信息和token',2,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000189,'用户管理--添加用户',1,0,'','member_1aooo5nmxvds000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000190,'用户展示',1,0,'','member_aueorufd7ug000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000191,'添加试题',1,0,'','member_1h8hwxzdsmlc000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000192,'用户管理--用户展示',1,0,'','member_1aooo5nmxvds000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000193,'查看试题',0,0,'','member_1h8hwxzdsmlc000','team_16lgt78782xs000','project_1em2fzip6i0w000'),(00000194,'待批班级',1,0,'','member_dtsjnuf3128000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000195,'查看试题',1,0,'','member_14yt1zfbrnmk00','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000199,'首页登陆',2,0,'','member_dspsm2z6je8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000200,'试题分类',1,0,'','member_tt3z52idkxs000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000201,'班级管理模块的布局(前两个页面接口没调)',2,1,'member_wnc08uirurk000','member_wnc08uirurk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000202,'考试管理--添加考试',2,0,'','member_1btj0lthduzk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000210,'haeader配置',2,0,'','member_i0nv0j7yyc8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000211,'首页框架排版，路由表配置，跳转路由',2,0,'','member_anvxvqfn4ss000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000212,'班级管理页面排版',2,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000213,'添加试题',2,0,'','member_anvxvqfn4ss000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000214,'封装server',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000215,'班级功能实现',0,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000216,'教室功能实现',1,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000217,'导航守卫',2,0,'','member_tt3z52idkxs000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000218,'VueX 改造',0,0,'','member_pw243zzi3q8000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000219,'学生管理功能实现',0,0,'','member_1l71yqj8z15s000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000220,'vuex的实现',0,0,'','member_ikwab1irwxs000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000221,'个人主页，修改样式',0,0,'','member_y7jl45q0iyo000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000222,'vuex的使用',0,0,'','member_y7jl45q0iyo000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000223,'试题分类',2,0,'','member_ai9tzgplzyo000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000224,'调试接口',0,0,'','member_o4tq8v5hixc000','team_asennzrqhw8000','project_1em2fzip6i0w000'),(00000225,'考试管理---添加考试---添加试题',1,0,'','member_1btj0lthduzk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000226,'检查人---祁云凯',0,0,'','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000227,'检查人---葛思辰',0,0,'','member_i0nv0j7yyc8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000228,'检查人---丁思羽',0,0,'','member_dspsm2z6je8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000235,'考试管理--添加考试--试卷列表',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000236,'考试管理--试卷列表',0,0,'','member_1btj0lthduzk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000237,'vuex分模块-优化modules',1,0,'','member_anvxvqfn4ss000','team_aq1x9atkwbk00','project_1em2fzip6i0w000'),(00000238,'教室管理',2,0,'','member_ai9tzgplzyo000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000249,'用户管理--用户提示',1,0,'','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000250,'班级管理',1,0,'','member_ai9tzgplzyo000','team_tyyydlpm1r4000','project_1em2fzip6i0w000'),(00000251,'试题管理，考试管理，页面布局',2,0,'','member_oy1z0ilwdcg000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000253,'添加试题页面数据接口的处理',1,0,'','member_oy1z0ilwdcg000','team_5oswpxl9yjo000','project_1em2fzip6i0w000'),(00000266,'班级管理--班级管理--教室管理--学生管理',2,0,'','member_i0nv0j7yyc8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000267,'阅卷管理--特批管理',1,0,'','member_i0nv0j7yyc8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000268,'试题管理--添加管理--试题分类--查看试题',2,0,'','member_dspsm2z6je8000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000269,'redux 数据管理',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000270,'检查人---李晓飞',0,0,'','member_wnc08uirurk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000271,'检查人---张健榜',0,0,'','member_1cb0jzwtrj4w000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000272,'检查人---郭怡凯',0,0,'','member_1aooo5nmxvds000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000275,'班级管理模块所有接口',1,0,'','member_wnc08uirurk000','team_1etwx75cncf4000','project_1em2fzip6i0w000'),(00000292,'试题管理--富文本--添加',2,1,'member_a6w4aydi8ao000','member_a6w4aydi8ao000','team_ho6cv2sueo8000','project_1em2fzip6i0w000'),(00000293,'调通路由',1,0,'','member_5quxeair3o0000','team_16lgt78782xs000','project_1em2fzip6i0w000');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teams` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `team_id` varchar(100) NOT NULL,
  `pid` varchar(30) NOT NULL,
  `team_name` varchar(100) NOT NULL,
  `team_gitadress` varchar(100) DEFAULT '',
  `create_time` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `team_id` (`team_id`),
  UNIQUE KEY `pid_tname_git` (`pid`,`team_name`),
  UNIQUE KEY `team_gitadress` (`team_gitadress`),
  CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `projects` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (51,'team_a9lkxyhi2gg000','project_1em2fzip6i0w000','一组','https://git.dev.tencent.com/dtid_b977bc3f4696bdd4/firstGroup.git','1557993959244'),(52,'team_16lgt78782xs000','project_1em2fzip6i0w000','七组','https://git.dev.tencent.com/lxk549426524/project_exam.git','1557993989488'),(53,'team_asennzrqhw8000','project_1em2fzip6i0w000','五组','https://git.dev.tencent.com/Z330121900/msg.git','1558061478979'),(54,'team_tyyydlpm1r4000','project_1em2fzip6i0w000','六组','https://git.dev.tencent.com/HouRF/kaoshiguanli.git','1558146184568'),(55,'team_1etwx75cncf4000','project_1em2fzip6i0w000','八组','https://git.dev.tencent.com/lixiaofei512/kaoshipingtai.git','1558146210565'),(56,'team_5oswpxl9yjo000','project_1em2fzip6i0w000','四组','git@git.dev.tencent.com:lw0917/ExamManagementPlatform.git','1558146236141'),(57,'team_ho6cv2sueo8000','project_1em2fzip6i0w000','三组','https://git.dev.tencent.com/dsy9926/exam.git','1558146268931'),(58,'team_aq1x9atkwbk00','project_1em2fzip6i0w000','二组','https://git.dev.tencent.com/zhengweihao/ExamManger.git','1558146343383');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-21 15:34:07
