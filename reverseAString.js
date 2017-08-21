function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseAString(str){
  var reversedString = '';
  for(var i=str.length ; i>=0; i--){
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseAString("hello"));
