let name = 'Elizabeth';

function greet(name) {
    let result = '';

    // when input is (2)null
    if(name === undefined || name === null || (typeof name !== "string" && !(Array.isArray(name)))) {
        result = 'Hello there!';
        return result;
    }
    // when input is in (3)ALL CAPS
    else if(/^[A-Z]+$/.test(name)) {
        result = 'HELLO ' + name;
        return result;
    }
    // when input (4) has names in array form
    else if (typeof name == "array") {
        result = 'Hello, ';
        name.forEach((item) => {
            result += item + ',';
        })
        result.trim();
        result.slice(0, -1);
        console.log(result);
        return result;
    }
    //when input is (1) valid string
    else {
        result = 'Hello, ' + name;
        return result;
    }
}

// greet(name);

module.exports = greet;