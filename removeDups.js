// var removeDups = function(word){
//   let no_duplicates_word = '';
//
//   // for(var i=0;i<word.length;i++){
//   //   if(no_duplicates_word.indexOf(word[i]) === -1){
//   //     no_duplicates_word += word[i];
//   //   }
//   // }
//   /////////////////////////////////////////////////////////////////
//   ////////////////////////////////////////////////////////////////
//     word.split('').map(function(character){
//       //see if each charater is in the no_duplicates_word string.
//       if(no_duplicates_word.indexOf(character) === -1){
//         no_duplicates_word += character;
//       }
//     })
//   return no_duplicates_word;
// }
var removeDups = function(word){

  let no_duplicates_word = '';

  word.split('').map(letter => {
    if(!no_duplicates_word.includes(letter)){
      no_duplicates_word += letter;
    }
    
  })
  return no_duplicates_word;
}

console.log(removeDups('Atlanta'));
