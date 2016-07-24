var client = require('../client/RedisClient.js');
var crypto = require('crypto');

//constructor
var cache =  function() {

};

cache.prototype.getCache = function(key, next){
	console.log(key)
	var hash = crypto.createHash('md5').update(key).digest('hex');
	console.log(hash)
	client.get(hash, function(err, reply) {
		//if there was an error throw it
		if(err) throw err
		//otherwise continue processing
		try{
			reply = JSON.parse(reply)
		} 
		catch(e){
			new Error(500, "Internal Server Error")
		}
		return next(reply)
	});
}

cache.prototype.setCache = function(key, value, next){
	console.log(key)
	console.log(value)
	var hash = crypto.createHash('md5').update(key).digest('hex');
	console.log(hash)
	client.set(hash, value, function(err, reply) {
		//if there was an error throw it
		if(err) throw err
		//otherwise continue processing 
		return next(reply)
	});
}

module.exports = cache;
