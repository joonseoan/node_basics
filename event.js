// events module

const events = require('events');

let emitter = new events.EventEmitter();

// callback = () => {}
// Like this, callback function can be defined
//		in the function, itself
emitter.on('newEvents', (message, ddd) => {

	console.log(`Message: ${message}, ${ddd}`);

});

// This is not an invocation to 'emitter.on()'
// It is a separate method.
// Tow methods are formed here based on these method's sytax.
// There callback above (message, ddd) => { } does not executes
// 		based on this function down below
emitter.emit('newEvents', 'I am a programer', 'ddd');

module.exports.title = 'joon'; // into title object, a property of module
module.title = 'joon' // into path property of module

console.log('ddd', module);
