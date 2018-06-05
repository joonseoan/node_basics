const fs = require('fs');

// renaming and moving the file.
// It is like "mv" in Linux. mv exportTest/global.html renamedFile.html
fs.renameSync('./exportTest/global.html', 'renamedFile.html');
