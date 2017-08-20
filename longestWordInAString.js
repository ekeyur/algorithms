function findLongestWord(str){
//Split the string in words and store it in array
wordArray = str.split(' ');
// Define a variable for word length;
wordLen = 0;

wordArray.map(word => {
  if (word.length > wordLen){
    wordLen = word.length;
  }
});
return wordLen;
}
console.log(findLongestWord("The quick brown fox jumpeded over the lazy dog"));
