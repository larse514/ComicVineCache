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
				//need to run eval to make sure it's an object
		 		res.status(200).send({value:value});
		 	} else {
		 		res.status(404).send({message:"not found"})
		 	}
		})
	}else{
		res.status(400).send({message:"bad request"})
	}
});
//can i send non-json?
router.post('/setCache', function(req, res) {
	console.log(req.body)
	var request = new Request(req.body)
	console.log(request)
	if(request.isValid()){
		cache.prototype.setCache(request.get('key'), request.get('value'), function(reply){
			res.status(201).send({message:reply});

		})
	} else {
		res.status(400).send({message:"bad request"})

	}
});
module.exports = router;
