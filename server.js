// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	); 
  	
}

// WEBSOCKET PORTION

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);

		socket.on('drawing', function(data){

		//console log to make sure we are recieivng the data from the client
		//console.log(data);

		//send this drawing data to everyone
		//dont need to send back to the client it came from

		socket.broadcast.emit('otherdrawing', data);

		});






		
		///MY SOCKET EVENTS HERE


		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);