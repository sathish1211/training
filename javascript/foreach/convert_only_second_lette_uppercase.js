a=["beautiful","sathish"]
b=[]
a.forEach(e=>{
    c=[]
    for (let i = 0; i < e.length; i++) {
        if (i %2 ==1) {
          c+="Z";
        } else {
          c += e[i];
        }
      }
      b.push(c)
    
});
console.log(b)