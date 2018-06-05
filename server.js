console.log('this is not an express Server. It is a server creted by node');

const http = require('http');

// create node server
const server = http.createServer((req, res) => {

	// 1)
	// - (1) manipulate header
	// res.writeHead(200, {'Content-Type': 'text/plain'});

	// - (2) sending responding message
	// res.end('Hi and Hello!');

//	=================================
	
	// 2)
	// text.html 
	res.writeHead(200, {'Content-Type': 'text.html'})

	res.end('<h1>Hi and Hello</h1>');

}); 

server.listen(4500);
