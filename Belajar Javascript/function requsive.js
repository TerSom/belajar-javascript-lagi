faktorial = (value) => {
  result = 1;
  for (i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
};

console.log(faktorial(7))

FaktorialRecursive = (value) => {
    if(value === 1){
        return 1
    }else{
        return value * FaktorialRecursive(value - 1)
    }
}

console.log(FaktorialRecursive(7))