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
	console.log(key)
	if(key){
		cache.prototype.getCache(key, function(value){
		 	res.send(value);
		})
	}
	throw(new Error("Bad Request"))
});
//can i send non-json?
router.post('/setCache', function(req, res) {
	var request = new Request(req.body)
	cache.prototype.setCache(request.get('key'), request.get('value'), function(reply){
		res.status(200).send({message:reply});

	})
});
module.exports = router;
