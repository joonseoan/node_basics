const fs = require('fs');

// writeFile : 4 args

fs.writeFile('./exportTest/global.html',
	'This is a new global.html file. ',
	'utf-8',
	(err) => {
	
		if(err) throw err;

		console.log("It is just saved.");

	});

fs.appendFile('./exportTest/global.html', 'Extra writing', 'utf8', (err) => {

	if (err) throw err;

	console.log('Appeding text is just added.');
	
});