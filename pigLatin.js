function translatePigLatin(str) {
  var regex = /[aeiou]/gi
  var i = 0;
  var temp_string ='';
    if(str[0].match(regex)) {
      str += 'way';
    } else {
      while(!str[i].match(regex)){
        temp_string += str[i];
        i++;
      }
      str = str.slice(i,str.length) + temp_string + 'ay';
    }
  return str;
}

console.log(translatePigLatin("paragraphs"));
