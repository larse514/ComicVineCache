var client = require('../client/RedisClient.js');

//constructor
var cache =  function() {

};

cache.prototype.getCache = function(key, next){
	client.get(key, function(err, reply) {
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
	client.set(key, value, function(err, reply) {
		//if there was an error throw it
		if(err) throw err
		//otherwise continue processing 
		return next(reply)
	});
}

module.exports = cache;
