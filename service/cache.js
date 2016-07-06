var client = require('../client/RedisClient.js');

//constructor
var cache =  function() {

};

cache.prototype.getCache = function(key, next){
	client.get(key, function(err, reply) {
		//if there was an error throw it
		if(err) throw err
		//otherwise continue processing 
		next(reply)
	});
}

cache.prototype.setCache = function(key, value, next){
	client.set(key, value, function(err, reply) {
		//if there was an error throw it
		if(err) throw err
		//otherwise continue processing 
		next(reply)
	});
}

module.exports = cache;
