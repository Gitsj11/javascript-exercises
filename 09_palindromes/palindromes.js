const palindromes = function (str) {
    var regex = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(regex, ''); //Removes all non-alphanumeric characters from the string
    let arr = lowRegStr.split(''); //Returns an array containing each element in the string
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) { //Loops from end of array to beginning
        newArr.push(arr[i]); //Adds each element from old array to the end of new array
    }
    let revString = newArr.join(''); //Returns the new array as String
    if (revString === lowRegStr) { //Compares new string and old string excluding alphanumeric characters
        return true;
    }
    else return false; 
};

// Do not edit below this line
module.exports = palindromes;
