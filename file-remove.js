const fs = require('fs');

// fs.unlinkSync('./views3/glogal.html');

try {

	// delete directory!!! (Sync)
	fs.rmdirSync('./views2');

} catch (e) {

	console.log('Error Message: ', e);

}

// delete file
fs.unlink('./views3/glogal.html', function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');

}); 


