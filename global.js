/*
var name = 'Edwin Diaz'
undefined
name
"Edwin Diaz"
window.name
"Edwin Diaz"
*****************************8
let house = 'your house'
// "let" => undefined
undefined
house
"your house"
window.house
undefined
*/

// console.log('global object') : global object
// in terminal, type "node global"
// vanila java script's window = "global" in node
console.log('hello world'); 
console.log('bad experience'); 
global.console.log('bad experience'); //same as above

// In node DOM, "variable"********** is not global object
const ddd = 'ddd';

// ******** variable is not a global object
console.log(global.ddd) 

global.console.log(ddd);

// not global object in node
// window object in javascript
var kkk = 'kkk';

// ******* variable is not a global object
console.log(global.kkk);
global.console.log(kkk);

let iii = 'iii'

// *******variable is not a global object
console.log(global.iii);
global.console.log(iii);

/***********************************************************************
	
	So the reason to import and export variables
		and fucntions is because they are not global object
		which means that they are not shared with different files
		and must be imported and exported as objects

************************************************************************/


// pwd
// until the file name
console.log(__dirname); 

// path is not a global object
const path = require('path');

// present file name only
console.log(path.basename(__filename));

// by directory and file name
console.log(__filename);