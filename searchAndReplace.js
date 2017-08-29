
function myReplace(str, before, after) {
  var index_of_before = str.indexOf(before);

  if(str[index_of_before] === str[index_of_before].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before,after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
