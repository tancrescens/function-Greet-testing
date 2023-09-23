const greet = require('./greet.js');

// test 1: testing output is correct
test('test greet() functioning if a valid string is input', () => {
    expect(greet('Elizabeth')
    ).toBe('Hello, Elizabeth');
})

// test 2: testing input for names that are not string
test('if name in greet(name) is not string, print "Hello there!"', () => {
    expect(greet(123)
    ).toBe('Hello there!')
})