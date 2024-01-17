const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    result = ""
    for (let count = 0; count < num; count++) {
        result += string
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
