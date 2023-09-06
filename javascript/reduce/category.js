//10. Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are the total cost of all the objects with that category. Use the reduce method to accomplish this.

a = [
    {
        'product':'Android',
        'cost':19000,
        'category':'Electronics'
    },
    {
        'Product':'Washing-Machine',
        'cost':31000,
        'category':'Electronics'
    },
    {
        'product':'Cucumber',
        'cost':35,
        'category':'Vegetable'
    },
    {
        'product':'Apple',
        'cost':180,
        'category':'Fruits'
    },
    {
        'product':'Tomato',
        'cost':18,
        'category':'Vegetable'
    },
    {
        'product':'Mango',
        'cost':100,
        'category':'Fruits'
    }
];

totalcost = a.reduce(e =>{
    
   //console.log(e)
    x = { };
    x[e.category] = e.cost;
    return x;
});
console.log(totalcost); //Incomplete


