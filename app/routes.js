module.exports = function(app){


	app.get( '/index/', function(){
	console.log( 'index');
	});
	
	app.get( '*', function(){
	console.log( 'all routes');
	});

}
