/*
 * Run fizzbuzz
 */
var fizzbuzz = require('./lib/fizzbuzz.js');

for(var i = 0; i <= 100; i++) {
    var output = i+'. ';
    output += fizzbuzz.check(i);
    console.log(output);
}
