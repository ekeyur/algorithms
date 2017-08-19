var strToNumber = function(word){
  var number = 0;
  // for(var i=0;i<word.length;i++){
  //   number = number + ((parseInt(word.charAt(i))) * Math.pow(10,word.length-i-1));
  // }
  word.split('').map(function(character,i){
    number = number + ((parseInt(word.charAt(i))) * Math.pow(10,word.length-i-1));
  });
  
  console.log(number + 1);
  return number;
}

console.log(strToNumber('1010'));
