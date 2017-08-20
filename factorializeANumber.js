function factorialize(number){
  var i=1;
  var factorial=1;
  while(i<=number){
    factorial *= i;
    i++;
  }
  return factorial;
}

console.log(factorialize(5));
