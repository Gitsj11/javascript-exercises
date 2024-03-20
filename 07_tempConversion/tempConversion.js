const convertToCelsius = function(x) {
    let y = (x - 32) * 5/9;
    let result = Math.round(y * 10) / 10;
    return result;
};

const convertToFahrenheit = function(y) {
    let x = (9/5 * y) + 32;
    let result = Math.round(x * 10) / 10;
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
