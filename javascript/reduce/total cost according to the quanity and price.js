//4. Write a function that takes an array of objects with a quantity and price property and returns the total cost of all the objects, considering the quantity of each object. Use the reduce method to accomplish this.



a = [
    {
        'product':'Android',
        'cost':19000,
        'quantity' : 2
    },
    {
        'Product':'Washing-Machine',
        'cost':31000,
        'quantity' : 1
    },
    {
        'product':'Refrigerator',
        'cost':35000,
        'quantity' : 2
    },
    {
        'product':'Smart-Tv',
        'cost':18000,
        'quantity':3
    }
]

filted = a.reduce((c,e)=> {
    return c + e.cost * e.quantity
},0)
console.log(filted);