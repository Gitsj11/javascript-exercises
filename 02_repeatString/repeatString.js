const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return str = "";
    }

    for (i = 1; i < num; i++) {
        if (str === "") {
            return str;
        }
        else {
            str += "hey";
        } 
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
