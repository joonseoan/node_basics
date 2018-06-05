console.log('working on integrating http server with fs')
const http = require('http');
const fs = require('fs');

// req from the client
http.createServer((req, res) => {

	console.log(req.method); // GET

	// When the client access to the server
	// 		default url is "/"
	console.log(req.url); // url of the server to "get"

	// It is a way to send whole html file to the browser.
	if(req.url === '/') {

		fs.readFile('./exportTest/global.html', 'utf8', (err, data) => {

			if (err) return err;

			// "https" can't write header info and save it.
			res.writeHead('200', { 'Content-Type': 'text.html' });
			
			// send contents in "global.html" file.			
			res.end(data);
	
		});
		
	} else {

		res.writeHead('404', { 'Content-Type' : 'text.plain' });
		res.end('404 Error occurred.');

	}
		
}).listen(5555);
