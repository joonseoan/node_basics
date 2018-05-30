// process.readline
// "readline" module is not global moudle.
// It implements global object "process"

const readline = require('readline'); //*******************
const util = require('util'); // **********************

const qa = readline.createInterface(process.stdin, process.stdout);

qa.question('What is your name?', (answer) => {

	console.log(answer);

	// setup
	qa.setPrompt(`Hey, ${answer}. How old are you?`);

	// display by using std out
	qa.prompt();

	// listen by using stdin
	qa.on('line', (age) => {

		age < 18 ? util.log(`${answer.trim()}, you are not permitted because you are ${age} years old`)
		: util.log(`Ok. ${answer.trim()}, you are permitted`);
		
	})

});

