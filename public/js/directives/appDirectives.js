//directives module
angular.module('appDirectives', [])
	.directive('galleryDirective', function(){
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				//console.log('scope',scope);
				//console.log('element',element[0]);
				//console.log('element',element);
				//console.log('pcontent',element[0].children[0].textContent);
				//console.log('attrs', attrs);
				//element[0].children[0].textContent='vegas is a turkey';
				console.log('galleryDirective',attrs.galleryDirective);
				console.log('galleryDirective type', typeof attrs.galleryDirective );
				console.log('galleryDirective JSON',JSON.parse(attrs.galleryDirective).type );
			}
		}
	});