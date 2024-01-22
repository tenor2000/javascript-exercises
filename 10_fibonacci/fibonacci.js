const fibonacci = function(num) {
    if (typeof num === "string") {
        num = parseInt(num);
    }
    if (num < 0) return "OOPS";
    if (num === 0) return 0; 

    function findFib(count, preVal, currVal) {
        if (count === 1) return currVal;
        newVal = preVal + currVal;
        return findFib(count-1,currVal, newVal);
    }
    return findFib(num, 0, 1)
};

// Do not edit below this line
module.exports = fibonacci;
