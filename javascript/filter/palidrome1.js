a=["madam","sathish","jeeva","mam"]
b=a.filter(e=> {
    x=0;
    mid=e.length-1;
    for(i=0;i<e.length/2;i++){
        if(e[i]!=e[mid]){
          x++;
          break;
        }
        mid--;
    }
    if(x==0)
       return e;
});
console.log(b)