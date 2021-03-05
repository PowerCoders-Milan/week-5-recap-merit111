formula(1, 3, 5) //=> 8
formula(3, 4, 6) //=> 18
formula(2, 4) //=> 9
formula(5, 6) //=> 31
formula(3) //=> 4
formula(5) //=> 6
formula() //=> 2

// review all the possible parameters
formula() //=> 2

// review all the possible parameters
function formula(num1 = 1, num2 = 1, num3 = 1){
    return num2 * num1 + num3
}
console.log(formula(1, 3, 5)) 
console.log(formula(3, 4, 6))
console.log(formula(2, 4)) 
console.log(formula(5, 6)) 
console.log(formula(3)) 
console.log(formula(5)) 
console.log(formula()) 