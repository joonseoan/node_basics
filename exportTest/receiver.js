// need variable to be assigned to functions or object references over here.
const emitter = require('./sender');

emitter.on('newEvents', (message) => {

	console.log(`Message: ${message}`);

});

emitter.emit('newEvents', 'I am a programer');

module.exports.title = 'joon'; // into title object, a property of module
module.title = 'joon' // into path property of module

console.log(module);
