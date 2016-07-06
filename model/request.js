var schema = require('./schema/schema.js').cache;
var _ = require('lodash');

//Define "constructor"
var request = function(data){

	this.data = this.sanitize(data);
};
//define data for easy saving into backend
request.prototype.data = {};

//Define generic setter and getter
request.prototype.set = function (name, value) {
	this.data[name] = value;
};

request.prototype.get = function (name){
	return this.data[name];
};

//helper methods
request.prototype.sanitize = function (data){
	//if data is invalid set to empty object so we don't pull 
	//bad errors, seems smrt
	data = data || {};
	//so let's see...
	//these are using lodash functions (more info found here: https://lodash.com/)
	//_.defaults will add any variables, from schema, that data doesn't contain
	//_.keys gets all the keys from schema and _.pick only keeps these values
	return _.pick(_.defaults(data, schema), _.keys(schema));
};
request.prototype.isValid = function(){
	//The Fancy way
//	 _.filter(this.data, function(n){return !_.isNull(n)}).length > 0 ? true : false
	//hand rolled way
	if(this.data){
		//lets just check key and value for now
		if(this.data.key && this.date.value){
			return true;
		}
	}
	return false;
};


module.exports = request;