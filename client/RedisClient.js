var redis = require('redis');
var config = require('config').get('REDIS_CONFIG');
var client = redis.createClient(config.PORT, config.HOST);

//connect to redis client
client.on('connect', function() {
    console.log('connected to Redis instance ');
});
//return it
module.exports= client;