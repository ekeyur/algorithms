// Given an array of integers, ex: [1,2,2,3,2,1,4,3]
// Iterate over the array, Define a set and put the item in set if i come across them first time
// and assign that item to a variable called unique, If for sure there is one item in the list that
// is unique, I don't need to change the value of unique variable when i come across it again.

var unique_list = [1,2,5,3,2,5,3];
function uniqueInteger(list) {
    unique_list = unique_list.sort(function(a,b){
        return a-b;
    });
    var set = new Set();
    var unique;
    list.map(function(number) {
        if (!set.has(number)) {
            unique = number;
            set.add(number);
        } 
    });
    return unique;
}

console.log(uniqueInteger(unique_list));