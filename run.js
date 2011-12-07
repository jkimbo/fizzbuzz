/*
 * Run fizzbuzz
 */
var fizzbuzz = require('./lib/fizzbuzz.js');

for(var i = 1; i <= 100; i++) {
    var output = fizzbuzz.check(i);
    if(!output) {
        output = i;
    }
    console.log(output);
}
