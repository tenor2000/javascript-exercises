const reverseString = function(string) {
    const spltArr = string.split('');
    var newString = '';
    for (let i = string.length; i > 0; i--) {
        newString += spltArr.pop();
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
