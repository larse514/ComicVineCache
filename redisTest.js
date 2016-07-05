var redis = require('redis');
var client = redis.createClient(6379, 'comicvinecache-001.br0imq.0001.usw2.cache.amazonaws.com');
client.on('connect', function() {
    console.log('connected');
});

client.set('test', 'Hello World', function(err, reply) {
	if(err) console.log(err)
	console.log(reply);
});

client.get('test', function(err, reply) {
	if(err) console.log(err)
	console.log(reply);
});