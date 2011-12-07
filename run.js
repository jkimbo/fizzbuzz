/*
 * Run fizzbuzz
 */
var fizzbuzz = require('./lib/fizzbuzz.js'); // load in the fizzbuzz module

for(var i = 1; i <= 100; i++) {
    var output = fizzbuzz.check(i);
    if(!output) { // if no result from fizzbuzz
        output = i; // output current number
    }
    console.log(output);
}
