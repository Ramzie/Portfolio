module.exports = function(app){

	app.get( '/api/user_timeline', function(req, res){
	res.send('you hit my api route');
	});
	
	app.get( '*', function(req, res){
	res.sendfile( './public/index.html');
	});
	
}
