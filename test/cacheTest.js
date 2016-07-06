var sinon = require('sinon'),
    rewire = require('rewire'),
	cache = rewire('../service/cache'),
    assert = require('chai').assert,
    expect = require('chai').expect

describe('Redis cache tests getCache', function () {
    it('error should be thrown', sinon.test(function (done) {
        var nextStub = sinon.stub(),
            redisClientMock = sinon.stub(),
            error = new Error("Error");

		redisClientMock.get = this.stub().
		callsArgWith(1,error, null)
    	cache.__set__({
	        'client': redisClientMock
	    });
		expect(function(){cache.prototype.getCache("bad request", nextStub)}).to.throw(error)
		assert(nextStub.called == false);
	
		done() 
    }))
        it('callback should be called', sinon.test(function (done) {
        var nextStub = sinon.stub(),
            redisClientMock = sinon.stub()
		redisClientMock.get = this.stub().
		callsArgWith(1,null, {})
    	cache.__set__({
	        'client': redisClientMock
	    });
		cache.prototype.getCache("key", nextStub)
		assert(nextStub.called == true);
	
		done() 
    }))
    })

describe('Redis cache tests setCache', function () {


    it('error should be thrown', sinon.test(function (done) {
        var nextStub = sinon.stub(),
            redisClientMock = sinon.stub(),
            error = new Error("Error");

		redisClientMock.set = this.stub().
		callsArgWith(2,error, null)
    	cache.__set__({
	        'client': redisClientMock
	    });
		expect(function(){cache.prototype.setCache("bad key", "bad value", nextStub)}).to.throw(error)
		assert(nextStub.called == false);
	
		done() 
    }))
    it('callback should be called', sinon.test(function (done) {
        var nextStub = sinon.stub(),
            redisClientMock = sinon.stub()
		redisClientMock.set = this.stub().
		callsArgWith(2,null, {})
    	cache.__set__({
	        'client': redisClientMock
	    });
		cache.prototype.setCache("key", "value", nextStub)
		assert(nextStub.called == true);
	
		done() 
    }))
})
