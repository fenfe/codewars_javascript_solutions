// Find numbers which are divisible by a given number

// Input 1 = array of numbers [ 1,2,3,4,5,6,7,8,9]
// Input 2 = a divisor = 2
// Output = [2,4,,6,8]

// The solution is to use a filter method

function divisibleBy (numbers, divisor){
    let divisedNums = numbers.filter((num) => num % divisor === 0)
     console.log(divisedNums)
 }
 divisibleBy([1,2,3,4,5,6], 2)
 divisibleBy([1,2,3,4,22,34,12,46,55,73,234,31,89,678,46,34,], 2)
 