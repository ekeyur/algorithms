function fizzBuzz() {
    var fizzOutput = [];
    for(var i=1;i<=100;i++){
        if(i%15 === 0) {
            fizzOutput.push([i,'fizzBuzz']);
        } else if ( i%5 === 0) {
            fizzOutput.push([i,'Buzz']);
        } else if (i%3 ===0){
            fizzOutput.push([i,'Fizz']);
        }
    }
    return fizzOutput;
}

console.log(fizzBuzz());