const fs = require('fs');

// "." : current directory.

// Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory 
//		******excluding '.' and '..'.
// However, bear in mind that when we implement "readFile"
//		we need to type "extension".
fs.readdir('./', (err, content) => {
	
	// 1) 
	// if(err) return (console.log(err.toString());
	
	// 2)
	// throw can be used instead of err
	if(err) throw err;

	// [ '.git',
 //  'event.js',
 //  'execute.js',
 //  'exportTest',
 //  'file-reading.js',
 //  'global.js',
 //  'glogal.html',
 //  'process.js',
 //  'readLine.js' ]

 	// return arrays!!!
	console.log(content);

});

// Without UTF-8, it will get binary codes in buffer.
fs.readFile('./global.html', 'UTF-8', (err, contents) => {

	if (err) throw console.log(err);

	console.log(contents);

});