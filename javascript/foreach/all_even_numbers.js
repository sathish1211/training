even=[50,20 ,100]
array=[]
even.forEach(e=>{
  for(i=1;i<=e;i++){
    if(i%2==0){
      array.push(i)
    }
}})
console.log(array);