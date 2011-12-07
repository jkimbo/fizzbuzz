var fizzbuzz = require('./lib/fizzbuzz.js');

$(document).ready(function() {
    $('#start').click(function() {
        for(var i = 1; i <= 100; i++) {
            var output = fizzbuzz.check(i);
            if(!output) {
                output = i;    
            }
            $('#list').append($('<li>').text(output));
        }
        return false;
    });
});
