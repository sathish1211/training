a=["apple","orange","mango","lemon","apple","lemon"]
d=[]
unique=a.map((e,index,b)=>{
   count=0
   for(i=0;i<d.length;i++){
      if(e==a[i]){
            count++;
      }
   }
   if(count==0){
      d.push(e);
      return e;
   }
})
console.log(unique)