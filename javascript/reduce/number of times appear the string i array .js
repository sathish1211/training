//5. Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

arr =['Apple','Aerospace','aeroplane','Badminton','Aerospace']
// mapa = arr.map(e => 
//     {
//         x = []
//         x[e] = e;
//         return x;
//     })
 newar = arr.reduce((e,i)=> 
    {
        count = 0;
        if(e == i)
        {
            count++;
        }
        console.log(e,count);
        console.log(e)
        console.log(i);
        // z=[];
        // count = 0;
        // for(j=0;j<x.length;j++)
        // {
        // if(e == x)
        // {
        //     count++;
        // }
        // z[e] = count;
        // //console.log(count);
        //}
    });
console.log(newar); //Incomplete