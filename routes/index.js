var express = require('express');
var router = express.Router();
var cache = require('../service/cache')
var Request = require('../model/request')

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ title: 'Health Check' });
});
//method to getCache value
router.get('/getCache', function(req, res) {
	var key = req.query.key
	if(key){
		cache.prototype.getCache(key, function(value){
			if(value){
		 		res.status(200).send(value);
		 	} else {
		 		res.status(404).send("not found")
		 	}
		})
	}else{
		throw(new Error("Bad Request"))
	}
});
//can i send non-json?
router.post('/setCache', function(req, res) {
	var request = new Request(req.body)
	cache.prototype.setCache(request.get('key'), request.get('value'), function(reply){
		res.status(200).send({message:reply});

	})
});
module.exports = router;
