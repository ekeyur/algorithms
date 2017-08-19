// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  // copy all the values in workingArray
  var workingArray = arguments[0];

// Creating the array for arguments.
  var valuesToBeFiltered = [];
  for(var i=1;i<arguments.length;i++){
    valuesToBeFiltered.push(arguments[i]);
  }

//filtering all the arrays
  var filteredArray = workingArray.filter(function(value){
    return valuesToBeFiltered.indexOf(value) === -1;
  });

  return filteredArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
