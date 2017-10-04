// Without Let Keyword;

// for(var i=0;i<10;i++){
//     (function(currentValueOfI) {
//         setTimeout(function() {
//             console.log(currentValueOfI);
//         },1000 * i)
//     })(i);
// }

// With Let Keyword

for(let i=0;i<10;i++){
    
        setTimeout(function() {
            console.log(i);
        },1000 * i);
   
}