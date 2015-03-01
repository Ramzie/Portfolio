angular.module('appServices', []).factory('flickrService', function($http){
	return{
		//keeping my api key private by using Node.JS to serve the flickr API data.
		get : function(){
           return $http.get('/api/flickr_data')
		}
	}
})