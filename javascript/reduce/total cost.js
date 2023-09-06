//2. Write a function that takes an array of objects with a price property and returns the total cost of all the objects. Use the reduce method to accomplish this.
a = [
    {
        'product':'Android',
        'cost':19000
    },
    {
        'Product':'Washing-Machine',
        'cost':31000
    },
    {
        'product':'Refrigerator',
        'cost':35000
    },
    {
        'product':'Smart-Tv',
        'cost':18000
    }
];

tcost=a.reduce((e,c) =>e+c.cost,0);
 console.log(tcost);