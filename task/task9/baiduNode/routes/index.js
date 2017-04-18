var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 主页面获取新闻时的请求 */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;
  console.log(req.query);
  var connection = mysql.createConnection({
  	host:'localhost',
  	port:3306,
  	user:'root',
  	password:'',
  	database:'test1'
  });
  connection.connect(function(err){
  	if(err){
  		console.log(err);
  		return
  	}
  });
  connection.query('SELECT * FROM `newstest` WHERE `newstype`=?',[newstype],function(err,rows,fields){
  	console.log(rows);
  	res.json(rows);
  })
});

module.exports = router;
