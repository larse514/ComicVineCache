var express = require('express');
var router = express.Router();
var cache = require('../model/cache')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Health Check' });
});
//method to getCache value
router.get('/getCache', function(req, res) {
	cache.prototype.getCache(req.key, function(value){
	 	res.send(value);
	})
});
//can i send non-json?
router.post('/setCache', function(req, res) {
	var request = new Request(req.body)
	cache.prototype.setCache(request.get('key'), request.get('value'), function(reply){
		res.status(200).send({message:reply});

	})
});
module.exports = router;
