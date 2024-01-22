const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((total, currentVal) => total + currentVal, 0);
  
  /*
  let total = 0;
	numArray.forEach((num, index) => {
    total += num;
  });
  return total;
  */
};

const multiply = function(numArray) {
  return numArray.reduce((product, currentVal) => product * currentVal, 0);
  /*
  let product = 1;
	numArray.forEach((num, index) => {
    product *= num;
  });
  return product;
  */
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else if (num < 0) {
    return 'undefined'
  }
  result = 1
  for (i = num; i > 0; i--) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
