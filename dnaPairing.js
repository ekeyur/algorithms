function pairElement(str) {
  var map = {'A' : 'T','T' : 'A','C' : 'G','G' : 'C'};
  return str.split('').map(function(letter){
    return [letter,map[letter]];
  })
}

console.log(pairElement("GCG"));
