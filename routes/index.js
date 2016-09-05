var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index-tpl');
  res.sendfile('app/main.html');
});


router.get('/test', function(req, res, next) {
  res.render('test');
});

router.get('/books',function(req,res,next){
	console.log(req.query);
  if(req.query.catalog=='history')
    res.json([{id:10,name:"h1",author:"au1",date:"2016",borrower:"xiaowang"},{id:11,name:"h2",author:"au2",date:"2016",borrower:"xiaowu"}]);
  else if(req.query.catalog=='technology')
  	 res.json([{id:20,name:"l1",author:"au1",date:"2016",borrower:"xiaowang"},{id:21,name:"l2",author:"au2",date:"2016",borrower:"xiaowu"},{id:22,name:"l3",author:"au3",date:"2016",borrower:"xiaowu"}]);
  else if(req.query.catalog=='philosophy')
  	 res.json([{id:30,name:"p1",author:"au1",date:"2016",borrower:"xiaowang"},{id:31,name:"p2",author:"au2",date:"2016",borrower:"xiaowu"},{id:32,name:"p3",author:"au3",date:"2016",borrower:"xiaowu"}]);
})

router.get('/detailPage',function(req,res,next){
	console.log(req.query);
	res.sendfile('app/views/tpl/detail.html')
})


router.get('/bookdetail',function(req,res,next){
	if(req.query.id==10)
	  res.json({id:10,name:"h1",author:"au1",date:"2016",borrower:"xiaowang"});
    else if(req.query.id!=10)
      res.json({id:20,name:"other",author:"other",date:"2016",borrower:"xiaowu"});
})

router.post('/home', function(req, res, next) {
  res.sendfile('app/views/tpl/home.html');
});

module.exports = router;
