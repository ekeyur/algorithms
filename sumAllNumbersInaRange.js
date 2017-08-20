// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.
//

function sumAll(arr) {
  var max = arr.reduce((a,b) => {return Math.max(a,b)});
  var min = arr.reduce((a,b) => {return Math.min(a,b)});
  var sum = 0;
  for(var i=min;i<=max;i++){
    sum += i;
  }
  return sum
}

console.log(sumAll([1, 4]));
