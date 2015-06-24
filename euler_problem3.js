// Project Euler Problem 3: Largest Prime Factor

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

var toPrime = 1000;

for (var j=2; j < toPrime; j++){
  if (toPrime % j === 0 && isPrime(j)){
    x = j;
  }
}

console.log(x);
// $ 5