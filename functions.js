"use strict";
function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result: ' + num);
}
var combineValues;
combineValues = add;
console.log(combineValues(3, 2));
printResult(add(1, 5));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
;
console.log(addAndHandle(10, 20, function (a) { return (console.log(a)); }));
