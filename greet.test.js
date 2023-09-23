const greet = require('./greet.js')

// test 1: testing output is correct if valid string input
test('test greet() functioning if a valid string is input', () => {
    expect(greet('Elizabeth')
    ).toBe('Hello, Elizabeth')
})

// test 2: testing input for names that are not string
test('if name in greet(name) is not string, print "Hello there!"', () => {
    expect(greet(123)
    ).toBe('Hello there!')
})

// test 3: SHOUT BACK if input is all caps
test('if name in greet(name) is ALL CAPS, print "HELLO NAME!"', () => {
    expect(greet('JOSE')
    ).toBe('HELLO JOSE')
})

// test 4: testing to output appropriate number of names when names >=2
test('if name in greet(name) is in an array, print "Hello, name1, name2 ..."', () => {
    expect(greet(["Joash", "Job"])
    ).toBe('Hello, Joash,Job')
})