const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

	let body;

	// GET : throw out "the input page" to the browser
	//		when the client acceesses to localhos 5555!
	//	"req.method"!!!! Don't forget
	if(req.method === 'GET') {

		console.log(req.method);

		// setup a header message with success and html type for the response
		res.writeHead(200, { 'Content-type' : 'text/html'});

		// read the html file in the same directory.
		fs.readFile('./http-form.html', 'UTF-8', (err, data) => {

			if (err) return err;

			console.log('GET data: ', data);

			// write the html page in header and then render it to the browser.
			res.write(data);

			res.end();

		});

	} else if (req.method === 'POST') {

		// Post from html page
		console.log(req.method);

		// Listen an event and then store it in the "eventEmitter"
		req.on('data', 'UTF-8', (data) => {

			// input data
			console.log('POST data: ', data);

			body += data;

		});

		req.on('end', () => {

			// setup the response header.
			res.writeHead(200, { 'Content-type' : 'text/html'});
			
			// write html page with body
			// "body" => render the contents in HTML body
			res.write(body, () => {

				res.end();
			
			});
		
		});

	} else {

		res.writeHead(404, { 'Content-type' : 'text/plain'});
		res.end('Can\'t find the requested page');

	}

}).listen(5555);

console.log('It is working');