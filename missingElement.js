var _ = require ('lodash');

function findMissing (arr1,arr2) {
    arr1.sort();
    arr2.sort();
    var arr = _.zip(arr1,arr2);
    for (var i=0;i<arr.length;i++) {
        if(arr[i][0] != arr[i][1]){
            return arr[i][0];
        }
    }
}



// function findMissing (arr1,arr2) {
//     var counter = {}

//     arr2.map((num) => {
//         if(!num in counter){
//             counter[num] = 1;
//         } else {
//             counter[num] += 1;
//         }
//     })
    
//     arr1.map((num)=> {
//         if (counter[num] == 0){
//             return num
//         } else {
//             counter[num] -= 1;
//         }
//     })
// }

console.log(findMissing([1,2,3,4,5,6,7],[3,7,2,1,4,6]));