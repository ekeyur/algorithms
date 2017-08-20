// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays


function diffArray(arr1, arr2) {
  return arr2.filter(value => arr1.indexOf(value) === -1)
  .concat(arr1.filter(value => arr2.indexOf(value) === -1))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
