var redis = require('redis');
var client = redis.createClient(6379, 'comicvinecache-001.br0imq.0001.usw2.cache.amazonaws.com');
client.on('connect', function() {
    console.log('connected');
});
