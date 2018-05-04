var redis = require('redis');
var client =');
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
