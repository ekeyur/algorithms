function compressString(s) {
    var compressedString = '';
    var counter = 1;
    var l = s.length;
    var i = 1;
    //AAAAB
    while(i<l) {
        if (s[i] === s[i-1]){
            counter++;
        } else {
            compressedString = compressedString + s[i-1] + String(counter);
            counter = 1;
        }
        i++;
    }
    compressedString = compressedString + s[i-1] + String(counter);
    return compressedString;
}

console.log(compressString('AABcc'));