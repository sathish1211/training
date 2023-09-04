a=["sathish","jeeva","kiruba","sathish","jeeva"]
d=[]
s=a.map((e,index,arr) => {
    c={}
    count=1
    for(i=index+1;i<arr.length;i++)
    {
         if(e==arr[i]){
            count++;
         }
    }
    z=0;
    for(j=0;j<d.length;j++){
        if(e==d[j]){
            z++;
            break;
        }
    }
    if(z==0){
        c[e]=count;
        d.push(e);
    }
    return c;
})
console.log(s)