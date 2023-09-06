//8. Write a function that takes an array of objects with a name and salary property and returns the total salary of all the employees. Use the reduce method to accomplish this.

a = [{
    'uid' : 1,
    'name' : "Divakar",
    'age' : 25,
    'gender' : 'm',
    'salary' : 25000
    },
    {
    'uid' : 18,
    'name' : "Darshini",
    'age' : 20,
    'gender' : 'f',
    'salary' : 20000
    },
    {
    'uid' : 234,
    'name' : "jeeva",
    'age' : 19,
    'gender' : 'm',
    'salary' : 15000
    },
    {
    'uid' : 342,
    'name' : "sandhiya",
    'age' : 21,
    'gender' : 'f',
    'salary' : 25000
    }
]

totalsalry = a.reduce((e,i) => e + i.salary,0)
console.log("the total salary is",totalsalry)