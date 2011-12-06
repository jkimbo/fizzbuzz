exports.check = function(num) {
    if(typeof num == 'number') {
        if(num !== 0){
            var output = '';
            if(num % 3 == 0) {
                output += 'Fizz';
            }
            if(num % 5 == 0) {
                output += 'Buzz';
            }
            return output;
        } else {
            return '';
        }
    } else {
        throw new Error('Expected a number');
    }
}
