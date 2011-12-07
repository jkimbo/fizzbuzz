/*
 * Check function
 */

exports.check = function(num) {
    if(typeof num == 'number') {
        var output = '';
        if(num !== 0){
            if(num % 3 == 0) {
                output += 'Fizz';
            }
            if(num % 5 == 0) {
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
