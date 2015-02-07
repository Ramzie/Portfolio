//directives module
angular.module('appDirectives', [])
	.directive('galleryDirective', function(){
		return{
			restrict: 'A',
			link: function(scope){
				scope.pictures =[ {'id':'1','imageUrl':'pictures/1.jpg'},
												{'id':'2','imageUrl':'pictures/2.jpg'},
												{'id':'3','imageUrl':'pictures/3.jpg'},
												{'id':'4','imageUrl':'pictures/4.jpg'},
												{'id':'5','imageUrl':'pictures/5.jpg'}
											];
			},
			template: function(){
				
				return [
				'<div ng-repeat="picture in pictures" ng-click="foo = picture.imageUrl">',
					'<img class="thumb" src="{{picture.imageUrl}}">',
				'</div>'
				].join("")
			}

		}
	});








	/*return{
					<div ng-repeat='picture in pictures'>
						<img ng-class"thumbnail" src"{{/pictures/picture.id}}">
					</div>
				}*/
				/*link: function(scope, element, attrs){
				console.log('scope',scope);
				console.log('element',element[0]);
				console.log('element',element);
				console.log('pcontent',element[0].children[0].textContent);
				console.log('attrs', attrs);
				//element[0].children[0].textContent='vegas is a turkey';
				//console.log('galleryDirective',attrs.galleryDirective);
				//console.log('galleryDirective type', typeof attrs.galleryDirective );
				//console.log('galleryDirective JSON',JSON.parse(attrs.galleryDirective).type );
				}*/



						/*restrict: 'A',
		//template: function(){
				var pictures = [
								]*/