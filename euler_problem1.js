// Project Euler: Problem 1- Multiples of 3 and 5
var solution1 = function(input){
    var sum = 0;
    for(var i = 1; i < input; i++){
        if(i % 3 === 0){
            sum += i;
        }
        else if(i % 5 === 0){
            sum += i;
        }
    }
    return sum;
};

console.log(solution1(1000));