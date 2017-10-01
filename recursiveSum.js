function recursiveSum(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + recursiveSum(n-1);
    }
}

console.log(recursiveSum(5));