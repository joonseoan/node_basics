const fs = require('fs');

// at the current directory

//console.log(fs.exists('./views3'));

if(!fs.existsSync('./views3')) {

	fs.mkdir('./views3', (err) => {

		if(err) throw err;

		console.log('a new folder was just created.');

		fs.writeFile('./views3/glogal.html',
				'I want to listen to another class',
				(err) => {

					if(err) throw err;

					console.log('a new file was just created.');
				
		});

	});

}

