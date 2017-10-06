// Find the duplicate elements in an array


function findDups(arr){
    var obj = {};
    var dups = [];
    arr.map((val) => {
        if(!obj[val]) {
            obj[val] = 1;
        } else {
            dups.push(val);
        }
    });
    return dups;
}

console.log(findDups([1,4,2,4,5,3,2]));