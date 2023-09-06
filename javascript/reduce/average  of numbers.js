//3. Write a function that takes an array of numbers and returns the average of all the numbers. Use the reduce method to accomplish this

a =[2,4,5,332,3,232]
newa = a.reduce((acc,val) => 
    {
        return acc + val;
    });
console.log(newa/a.length);