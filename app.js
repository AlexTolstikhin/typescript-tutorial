"use strict";
var userInput;
var userName;
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var res = generateError('An error occured', 500);
console.log(res);
