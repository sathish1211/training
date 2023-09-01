a=["madam","sathish","jeeva","mam"]
a.forEach(e=> {
    x=0;
    mid=e.length-1;
    for(i=0;i<e.length/2;i++){
        if(e[i]!=e[mid]){
          console.log("not palidrome");
          x++;
          break;
        }
        mid--;
    }
    if(x==0)
      console.log("palidrome")
});