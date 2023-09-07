//5. Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

arr =['Apple','Aerospace','aeroplane','Apple','Badminton','Aerospace']

 newar = arr.reduce((e,i)=> 
    {
        if(!e[i]){
            e[i]=1;
        }
        else{
            e[i]=e[i]+1;
        }
        return e;
    }
  ,{});
console.log(newar);