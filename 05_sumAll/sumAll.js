const sumAll = function(startNum, stopNum) {
    let finalSum = 0;
    while (startNum < stopNum) {
        let sum = startNum + stopNum;
        startNum++;
        stopNum--;
        finalSum += sum;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
