//1. Write a function that takes an array of numbers and returns the sum of all the numbers. Use the reduce method to accomplish this.

a =[2,34,54,23,34,3]
sum = a.reduce((acc,val) => 
{
    return acc + val
}
);
console.log("The sum of array is",sum)