# ComicVineCache
Service to cache 3rd party requests for performance and consumption purposes

Application uses AWS ElastiCache instance. Dashboard: https://us-west-2.console.aws.amazon.com/elasticache/home?region=us-west-2#cache-clusters:

Current configuration contains 3 nodes. 1 primary for writes and 2 as read only replicates

Initial estimates of size are ~5mbs per instance cache + 5mbs for snapshot backups * 3 nodes is 30mb .  Seems really low, but will have to run tests

Best practices:
http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/BestPractices.html

Setup tutorial:
http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/GettingStarted.ConnectToCacheNode.html

Currently can only connect to redis server from AWS EC2 server with command src/redis-cli -h comicvinecache-001.br0imq.0001.usw2.cache.amazonaws.com -p 6379
