const sumAll = function(num1, num2) {
    let finalSum = 0;
    function isPositive() {
        if (num1 >= 0 && num2 >= 0) return true;
    }
    function isNumber() {
        if (Number.isInteger(num1) && Number.isInteger(num2)) return true;
    }
    if (!isPositive() || !isNumber()) return "ERROR";

    if (num1 > num2) {
        finalSum = ((num1 + num2) * num1) / 2;
    }
    else {
        finalSum = ((num1 + num2) * num2) / 2;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
