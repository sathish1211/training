a=[1,2,3,4]
b=[]
k=0
for(i=a.length-1;i>=0;i--){
     b[k]=a[i];
     k++;
}
b.forEach(e=>console.log(e))

