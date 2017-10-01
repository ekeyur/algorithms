function recursiveSumDigits(n){
    if ((String(n)).length === 1) {
        return n;
    } else {
        return ((n%10) + recursiveSumDigits(Math.floor(n/10)));
    }
}

console.log(recursiveSumDigits(121));