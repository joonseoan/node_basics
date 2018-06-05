const fs = require('fs');
const http = require('http');

// ***** No res.header manipulation.!!!
const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/posts';

// Do not need to define directory.
http.createServer((req, serverRes) => {

	if(req.method === 'GET' && req.url === '/posts') {

		// this server requests to "jsonplaceholer.com" server
		https.get(url, (res) => {

			// this server listens to feedback from "jsonplaceholer" server
			// The, if the feedback is available, execute callbacked by https's defined function.
			res.on('data', data => {

				res.setEncoding('utf-8');

				// console.log(data);

				// sends data to the client and write it down to browser
				// **** can't use this.res when we are using res argument createServer()
				//		because it not an property of the function. It is just args.!!!!!!!
				serverRes.write(data);

			});

			res.on('end', () => {

				console.log('It is over');	

				// inside of (), thing which is stored before it ends, is defined.
				serverRes.end();

			});

		});

	} else {

		serverRes.writeHead(404, {'Content-Type' : 'text.plain'});
		serverRes.end('Error 404, Unable to get data');
	}

}).listen(4444);