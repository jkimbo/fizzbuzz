var fizzbuzz = require('../lib/fizzbuzz.js');

exports['basic-inputs'] = function(test) {
    test.equal(fizzbuzz.check(3), 'Fizz'); // test multiple of 3
    test.equal(fizzbuzz.check(5), 'Buzz'); // test multiple of 5
    test.equal(fizzbuzz.check(15), 'FizzBuzz'); // test multiple of 3 and 5
    test.equal(fizzbuzz.check(0), ''); // test 0 case
    test.throws(function() { fizzbuzz.check() });
    test.throws(function() { fizzbuzz.check(null) });
    test.throws(function() { fizzbuzz.check(true) });
    test.throws(function() { fizzbuzz.check([]) });
    test.throws(function() { fizzbuzz.check({}) });
    test.throws(function() { fizzbuzz.check('asfl') });
    test.throws(function() { fizzbuzz.check('3') });
    test.throws(function() { fizzbuzz.check('1234') });
    test.done();
}

exports['random-inputs'] = function(test) {
    // give random number multiplied by 3
    test.expect(30);
    for(var i = 1; i <= 10; i++) {
        var rand = Math.floor(Math.random()*10)*3;
        var output = fizzbuzz.check(rand);
        if(output == 'Fizz' || output == 'FizzBuzz' || rand == 0) {
            test.ok(true);
        } else {
            test.ok(false);
        }
    }
    for(var i = 1; i <= 10; i++) {
        var rand = Math.floor(Math.random()*10)*5;
        var output = fizzbuzz.check(rand);
        if(output == 'Buzz' || output == 'FizzBuzz' || rand == 0) {
            test.ok(true);
        } else {
            test.ok(false);
        }
    }
    for(var i = 1; i <= 10; i++) {
        var rand = Math.floor(Math.random()*10)*15;
        var output = fizzbuzz.check(rand);
        if(output == 'FizzBuzz' || rand == 0) {
            test.ok(true);
        } else {
            test.ok(false);
        }
    }
    test.done()
}
