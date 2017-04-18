var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection= mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'test1'
})
/* GET users listing. */
router.get('/getnews', function(req, res, next) {
 	connection.query('SELECT * FROM `newstest`',function(err,rows,fields){
 		res.json(rows);
 	})
});

/*insert*/
router.post('/insert',function(req, res){
	var newstype = req.body.newstype;
	var newsid = req.body.newsid;
	var newstitle = req.body.newstitle;
	var newscontent = req.body.newscontent;
	var newsdate = req.body.newsdate;
	var newsimg = req.body.newsimg;
	console.log(newsimg);
	connection.query('INSERT INTO `newstest` (`newstype`,`newstitle`,`newscontent`,`newsimg`,`newsdate`) VALUES (?,?,?,?,?)',[newstype,newstitle,newscontent,newsimg,newsdate],function(err,result){
 		if(!err){
			console.log(result);
			res.send({"message":"success"});
		}
		else{
			res.send({"message":"fail"});
		}
 	});
	
});

/*delete*/
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `newstest` WHERE `newstest`.`newsid` = ?',[newsid],function(err,result){
		res.send({"message":"success"});
	})
})

/*curnews*/
router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `newstest` WHERE `newsid` = ?',[newsid],function(err,rows){
		res.json(rows);
	})
})

/*update*/
router.post('/update',function(req,res){
	var newsid = req.body.newsid;
	var newstype = req.body.newstype;
	var newstitle = req.body.newstitle;
	var newsimg = req.body.newsimg;
	var newscontent = req.body.newscontent;
	var newsdate = req.body.newsdate;
	connection.query('UPDATE `newstest` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newscontent`=?,`newsdate`= ? WHERE newsid = ?',[newstype,newstitle,newsimg,newscontent,newsdate,newsid],function(err,result){
		console.log(result);
		if(err){
			res.send({"message":"fail"});
		}
		else{
			res.send({"message":"success"});
		}
		
	})
})
module.exports = router;
