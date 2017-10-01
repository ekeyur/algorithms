function reverseAString(s) {
    if(s.length === 1) {
        return s; // Terminating Condition
    } else {
        return s.substring(s.length-1,s.length) + reverseAString(s.substring(0,s.length-1));
    }

}
console.log(reverseAString('keyur'));