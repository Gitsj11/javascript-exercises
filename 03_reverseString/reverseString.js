const reverseString = function(str) {
    if (str === "") return str;
    let arr = Array.from(str);
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += arr[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
