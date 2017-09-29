function reverseSentence(s) {
    var reversedSentence = '';
    words_array = s.split(' ');
    for (var i = words_array.length -1 ; i>= 0; i--) {
        reversedSentence = reversedSentence + words_array[i] + ' ';
    }
    return reversedSentence;
}

// function reverseSentence(s) {
//     var word_start;
//     var s_length = s.length
//     var i = 0;
//     var tempword = '';
//     var words = [];

//     while(i < s_length) {
//         if(s[i] !== ' '){
//             word_start = i;
            
//         }
//         while(i < s_length & s[i] !== ' '){
//             tempword += s[i];
//             i+= 1;
//         }
//         words.push(tempword);
//     }
//     return words.reverse();
// }


console.log(reverseSentence('This is the best'))