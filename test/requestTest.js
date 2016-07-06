var Request = require('../model/request');
var assert = require('chai').assert;
describe('#sanatize test', function () {
	var value = {"error":"OK","limit":1,"offset":0,"number_of_page_results":1,"number_of_total_results":741,"status_code":1,"results":[{"cover_date":"1952-12-01","deck":null,"description":"<ol><li>Cover by J. Winslow Mortimer.<\/li><li>\"<em>The Crazy Crime Clown!<\/em>\" written by Alvin Schwartz, penciled by Dick Sprang and inked by Charles Paris.<\/li><li>\"<em>The Movie That Killed Batman<\/em>\" written by Bill Finger, penciled and inked by Dick Sprang.<\/li><li>\"<em>The Water Crimes of Mr.Hydro<\/em>\" written by Bill Finger, penciled by Lew Schwartz and inked by Stan Kaye.<\/li><\/ol>","id":183,"image":{"icon_url":"http:\/\/static1.comicvine.com\/uploads\/square_avatar\/0\/4\/173-796-183-1-batman.jpg","medium_url":"http:\/\/static2.comicvine.com\/uploads\/scale_medium\/0\/4\/173-796-183-1-batman.jpg","screen_url":"http:\/\/static3.comicvine.com\/uploads\/screen_medium\/0\/4\/173-796-183-1-batman.jpg","small_url":"http:\/\/static4.comicvine.com\/uploads\/scale_small\/0\/4\/173-796-183-1-batman.jpg","super_url":"http:\/\/static5.comicvine.com\/uploads\/scale_large\/0\/4\/173-796-183-1-batman.jpg","thumb_url":"http:\/\/static6.comicvine.com\/uploads\/scale_avatar\/0\/4\/173-796-183-1-batman.jpg","tiny_url":"http:\/\/static7.comicvine.com\/uploads\/square_mini\/0\/4\/173-796-183-1-batman.jpg"},"request_number":"74","name":"The Crazy Crime Clown! \/ The Movie That Killed Batman \/ The Water Crimes of Mr.Hydro","volume":{"api_detail_url":"http:\/\/www.comicvine.gamespot.com\/api\/volume\/4050-796\/","id":796,"name":"Batman","site_detail_url":"http:\/\/comicvine.gamespot.com\/batman\/4050-796\/"}}],"version":"1.0"}
    var key = "v1/request/test"    
    var body = {key:key, value:value}
    var badBody = {badVal:"badVal"}

    it('value is still here', function () {
    	var request = new Request(body);
    	assert(request.data.value !== null)
    });
    it('key is still there', function () {
    	var request = new Request(body);

    	assert(request.data.key !== 1)
    });
    it('badVal is stripped off', function () {
        var request = new Request(badBody);

        assert(request.data.badVal === undefined)
        assert(request.isValid() === false)
    });
  });