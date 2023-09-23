let name = 'Elizabeth';

function greet(name) {
    let result = '';

    if(typeof name !== "string") {
        result = 'Hello there!';
        return result;
    }else {
        result = 'Hello, ' + name;
        return result;
    }
}

// greet(name);

module.exports = greet;