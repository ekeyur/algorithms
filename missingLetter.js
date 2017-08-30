function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var string_for_comparison = alphabet.slice(alphabet.indexOf(str[0]),str.length);
  return string_for_comparison.split('').filter(function(letter,i){
    if(str[i] !== letter){
        return letter;
    };
  })[0];

}

console.log(fearNotLetter("abce"));
