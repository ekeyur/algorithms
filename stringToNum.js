//convert a number represented as a string to actual number
// Assuming all the strings will be numbers

function stringToNumber(s){
    //'121'
    var number = 0;
    for (var i=0; i< s.length ; i++){
        number += parseInt(s[i]) * Math.pow(10,s.length-i-1);
    }
    return number;
}

console.log(stringToNumber('1234'));

