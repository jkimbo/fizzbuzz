/*
 * Check number function
 */

exports.check = function(num) {
    if(typeof num == 'number') { // check num is a number
        var output = ''; // start building output
        if(num !== 0){ // zero case can trip us up
            if(num % 3 == 0) { // check for multiple of 3
                output += 'Fizz';
            }
            if(num % 5 == 0) { // check for multiple of 5
                output += 'Buzz';
            }
            return output;
        } else {
            return output
        }
    } else {
        throw new Error('Expected a number');
    }
}
