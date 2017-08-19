
var mutation = function(array){
  var string1 = array[0].toLowerCase();
  var string2 = array[1].toLowerCase();

  return string2.split('').every(function(character){
    return string1.indexOf(character) !== -1;
  });
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
