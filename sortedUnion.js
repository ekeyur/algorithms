
function uniteUnique(arr) {
  var array_of_arrays = [];
  var single_array = [];
  var uniqueArray = [];
  var index = 0;

  while(index < arguments.length){
    array_of_arrays.push(arguments[index]);
    index++;
  }

  array_of_arrays.map(function(array){
    array.map(function(value){
      single_array.push(value);
    })
  })

  single_array.map(function(value){
    if(uniqueArray.indexOf(value) === -1){
      uniqueArray.push(value);
    }
  })

  return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
