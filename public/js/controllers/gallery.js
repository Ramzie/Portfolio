angular.module('gallery',[]).controller('galleryController', function($scope, flickrService, lodash){
	/*flickrService.get()
				.success(function(data) {
    			// this callback will be called asynchronously
    			// when the response is available
    			//console.log(data);
    			var goodJson = JSON.parse(data.slice(14, data.length-1));
    			//console.log(goodJson.photos.photo);	
    			$scope.foobar = lodash.reduce(goodJson.photos.photo, function(arrayImgs, img, id){
                    var imgLink = 'https://farm' + img.farm + '.static.flickr.com/' + img.server + '/' + img.id + '_' + img.secret + '_n.jpg';
    				var imgObj = {'id':id,'imageUrl':imgLink};
                    arrayImgs[id]=imgObj;
                    return arrayImgs;
    			}, []);
  			})*/
	
	//$scope.foobar= flickrService.get();
	//$scope.foobar='vegas is super smart!!!111!!1eleventy one!!';
});
