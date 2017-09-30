function uni_char(s) {
    // return new Set(s).size === s.length;
    var isUnique = true;
    var mySet = new Set();

    s.split('').map(function(letter){
        if(mySet.has(letter)) {
            isUnique = false;
        } else {
            mySet.add(letter);
        }
    })

    return isUnique;

}
console.log(uni_char('abcdef'));