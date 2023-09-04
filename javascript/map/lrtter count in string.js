a=["sathish"]
d=[]
a.map(e=>{
    c=[]
    z=0
    for(i=0;i<e.length;i++){
        y=e[i];
        count=1;
        for(j=i+1;j<e.length;j++){
            if(e[i]==e[j]){
                count++;
            }
        }
        for(j=0;j<d.length;j++){
            if(y==d[j]){
                z++;
                break;
            }
        }
        if(z==0){
            c[y]=count;
            d.push(y);
        }
       
    } 
    console.log(c)   
})
// console.log(count)