const fibonacci = function(numOfTerms) {
    let n = parseInt(numOfTerms);
    if (n < 0) return "OOPS";
    if (n === 0 || n === 1) return n;
    let f0 = 0; //First Fibonacci Number
    let f1 = 1; //Second Fibonacci Number
    let nextNum = 0;
    for (i = 1; i < n; i++) {
        nextNum = f0 + f1;
        f0 = f1;
        f1 = nextNum;
    }
    return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
