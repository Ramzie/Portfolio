//directives module
angular.module('appDirectives', [])
	.directive('galleryDirective', function(flickrService, lodash){
		return{
			
			restrict: 'A',
			link: function(scope){
				scope.selected = 4;
				flickrService.get()
				.success(function(data) {
    			// this parses the flickr API data
    			var parsedData = JSON.parse(data.slice(14, data.length-1));
    			//uses lodash to iterate through parsedData to create an image array
    			scope.pictures = lodash.reduce(parsedData.photos.photo, function(arrayImgs, img, id){
                    var imgLink = 'https://farm' + img.farm + '.static.flickr.com/' + img.server + '/' + img.id + '_' + img.secret + '_z.jpg';
    				var imgObj = {'id':id,'imageUrl':imgLink};
                    arrayImgs[id]=imgObj;
                    return arrayImgs;
    			}, []);
  			})
			},
			template: function(){
				//displays images from flickr
				return [
				'<div  ng-repeat="picture in pictures" ng-click="$parent.selected=$index">',
				'<img src="{{picture.imageUrl}}" ng-class="{embiggen: selected == $index}">',
				'</div>'
				].join("")
			}
		}
	});