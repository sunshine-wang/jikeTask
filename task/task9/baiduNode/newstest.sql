-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2016 �?11 �?16 �?11:21
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test1`
--

-- --------------------------------------------------------

--
-- 表的结构 `newstest`
--

CREATE TABLE IF NOT EXISTS `newstest` (
  `newstype` int(11) NOT NULL,
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) COLLATE utf8_bin NOT NULL,
  `newsimg` varchar(200) COLLATE utf8_bin NOT NULL,
  `newscontent` text COLLATE utf8_bin NOT NULL,
  `newsdate` datetime NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='百度' AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `newstest`
--

INSERT INTO `newstest` (`newstype`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsdate`) VALUES
(2, 1, '1231', 'http://a1.jikexueyuan.com/home/201604/25/92be/571dceefe7f02.jpg', '11123', '0000-00-00 00:00:00'),
(0, 2, '111', 'http://a1.jikexueyuan.com/home/201512/01/6652/565d1448d24a6.jpg', 'web', '0000-00-00 00:00:00'),
(2, 3, '今天', 'http://a1.jikexueyuan.com/home/201604/25/7737/571dcfa47bbb7.jpg', '12345', '2016-11-11 16:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
