// Project Euler Problem 2: Even Fibonacci Numbers

// For numbers 1 to 4000000 in Fibonacci sequence 
// find the sum of the even values

var x = 1;
var y = 2;
var z = 0;
var sum = 0;

while (x < 4000000) {

	if (x % 2 === 0) {
		sum += x;
	}
	z = x + y;
	x = y;
	y = z;
}

console.log(sum);