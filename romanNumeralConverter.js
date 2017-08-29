// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
 //an array of roman numerals in order from largest to smallest
 var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 //an array of decimals values that match the index of the roman numerals
 var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 //creates an empty string call romanized
 var romanized='';

 romanNumerals.map(function(value,index){
   while(decimals[index]<=num){
     romanized += romanNumerals[index];
     num -= decimals[index];
   }
 });
 return romanized;
}

console.log(convertToRoman(36));
