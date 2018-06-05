// events module

const events = require('events');

// const emitter = new events.EventEmitter();

const emitter = new events();
console.log('working????????????????????? right?????????????');

emitter.on('newEvents', (message, ddd) => {

	console.log(`Message: ${message}, ${ddd}`);

});

emitter.emit('newEvents', 'I am a programer', 'ddd');

module.exports.title = 'joon'; // into title object, a property of module
module.title = 'joon' // into path property of module

console.log('ddd', module);
