const fs = require('fs');
const http = require('http');

const url = 'http://jsonplaceholder.typicode.com/posts';

http.get(url, res => {

	// just prevent the characters from cracking.!!!
	// If the server supports the utf-8, it is ok without it.
	res.setEncoding('utf8');

	let body ;

	// listen to data
	res.on('data', data => {

		body = data;

	});

	// save the data when it closes.
	
	res.on('end', () => {

		 // body = JSON.parse(body) // not working.
		 console.log(body);

		 console.log(`${body[0].title}`);

		// fs.writeFile('httpData.txt', body, (err) => {

		// 	if(err) throw err;

		// 	console.log('a new file about https is created.');

		// });
	
	});

});

