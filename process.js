// ***************** process object!!! : global object. Therefore it does not need to excute js file!!!!!!!
// node process will execute all the global object's property (methods and fuction)!!!
// ****************************

// Just bear in mind that node is built by C++ that computer side, low level language.
// It makes us possible to communicate with js and computer.!!!!!!!!!!!

// Using "process" object which defines communication with computer language,
//		we can get input (process.argv and so on) from computer and output (console.log) to computer.
//		**** So console.log can't show up in the browser!!!!!!!!!!!!!!!!!!!!!

// =========== input arguments from computer language  by using global object "process"=======
// ********* It returns an array!!!!

// global object => blue character!!!!
// process and argv here are global object and property.

// [result : array]
// The first : where process started from
// The second : where the process is
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Electronjs_Nodejs_Reactjs\\node\\newEx2\\process.js' ]
console.log('process.argv', process.argv);
console.log('global.process.argv', global.process.argv);

// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Electronjs_Nodejs_Reactjs\\node\\newEx2\\process',
//   '--user',
//   'Joon',
//   'An' ]
// Every single typing string, object, function, and variable after "node process" are going to be arguments
// In terminal : node process --user Joon An


// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Electronjs_Nodejs_Reactjs\\node\\newEx2\\process',
//   '--user',
//   'Joon',
//   'An' ]
//3 // => because it is an array
console.log(process.argv.indexOf('Joon'));
// type in Terminal node "process --user Joon An"

console.log(process.argv.indexOf('Joon') + 5);
// type in Terminal node "process --user Joon An"

console.log('process.argv[2]', process.argv[2]);

// ============= control from computer language by using global language ==========
process.stdout.write('Ask me a question: ');

// 'data': name of the listener
process.stdin.on('data', (data) => {

	const input = data.toString().trim();
	console.log(input);

	//
	process.exit();

});