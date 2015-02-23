//directives module
angular.module('appDirectives', [])
	.directive('galleryDirective', function(flickrService, lodash){
		return{
			scope: {
				flickrImg: '='
			},
			restrict: 'A',
			link: function(scope){
				flickrService.get()
				.success(function(data) {
    			// this callback will be called asynchronously
    			// when the response is available
    			//console.log(data);
    			var goodJson = JSON.parse(data.slice(14, data.length-1));
    			//console.log(goodJson.photos.photo);	
    			scope.pictures = lodash.reduce(goodJson.photos.photo, function(arrayImgs, img, id){
                    var imgLink = 'https://farm' + img.farm + '.static.flickr.com/' + img.server + '/' + img.id + '_' + img.secret + '_n.jpg';
    				var imgObj = {'id':id,'imageUrl':imgLink};
                    arrayImgs[id]=imgObj;
                    return arrayImgs;
    			}, []);
  			})

				/*scope.pictures =[ {'id':'1','imageUrl':'pictures/1.jpg'},
												{'id':'2','imageUrl':'pictures/2.jpg'},
												{'id':'3','imageUrl':'pictures/3.jpg'},
												{'id':'4','imageUrl':'pictures/4.jpg'},
												{'id':'5','imageUrl':'pictures/5.jpg'}
											];*/
			},
			template: function(){
				
				return [
				'<div ng-repeat="picture in pictures" ng-click="$parent.selected=$index">',
				'<img src="{{picture.imageUrl}}" ng-class="{embiggen: selected == $index}">',
				'</div>'
				].join("")
			}
		}
	});

	/*'<div ng-repeat="picture in pictures" ng-click="foo = !foo">',
				'<img src="{{picture.imageUrl}}" ng-class="{embiggen: foo}">',
				'</div>'*/