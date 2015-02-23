angular.module('appServices', []).factory('flickrService', function($http, lodash){
	return{
		get : function(){
			//var flickrVar = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=db74013332d5c9c32faca757c080e6be&user_id=7718810@N02&per_page=10&format=json';
           return $http.get('/api/flickr_data')
		}
	}
})