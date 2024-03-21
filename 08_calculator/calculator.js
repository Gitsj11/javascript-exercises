const add = function(x, y) {
	  return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(arr) {
    let result = 0;
    if (arr.length === 0) {
      return result;
    }
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};

const multiply = function(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
};

const power = function(num, pow) {
    return num ** pow;
};

const factorial = function(num) {
    //let sum = 1;
    if (num < 0) return "Invalid Number";
    else if (num === 0) return 1;
    else return (num * factorial(num - 1));
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
