module.exports = function(app){


	app.get( '*', function(){
	console.log( 'all routes');
	};
	
	app.get( '/index/', funcion(){
	console.log( 'index');
	});

}
