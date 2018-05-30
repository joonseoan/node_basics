// sub processes of "process object"
const child_process = require('child_process');
const { exec } = require('child_process');

// 'ls' command
exec('ls', (err, stdout) => {

	// print out when "ls" executes
	if (err) return console.log(err);

	console.log(stdout);

});

// global object
console.log(process);

// not global object
// It is an object outside of node
console.log(child_process);

// function inside of "child_process"
console.log(typeof exec);
