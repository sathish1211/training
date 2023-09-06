//9. Write a function that takes an array of numbers and returns the product of all the numbers. Use the reduce method to accomplish this.

a =[2,34,54,23,34,3]
productofNum = a.reduce((e,i) => e*i)
console.log("The product of all numbers in array is",productofNum)