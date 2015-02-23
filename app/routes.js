var apiKey = require('./apikey');
var http = require('http');
var requestify = require('requestify');
module.exports = function(app){
	app.get('/api/flickr_data', function(req, res){
		var flickrData = ['https://api.flickr.com/services/rest/',
											'?method=flickr.people.getPublicPhotos',
											'&api_key=',apiKey,
											'&user_id=130677698@N07',
											'&per_page=10',
											'&format=json'].join('');
		requestify.get(flickrData).then(function(response){
			res.send(response.body);
		});
	}),
	app.get( '*', function(req, res){
	res.sendfile( './public/index.html');
	});
	
}
