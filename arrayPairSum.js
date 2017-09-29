function pair_sum(arr,k) {
    // Edge Case
    if(arr.length < 2) {
        return 
    }

    var seen = new Set();
    var output = [];

    // Iterate over the arr using map
    arr.map(function(num) {
        const target = k - num;
    // if the target exist in seen object, we have found the compliment value    
        if(seen.has(target)) {
            output.push([target,num])
        } else {
            seen.add(num)
        }
    })
    return output
}

console.log(pair_sum([1, 3, 2, 2], 4));