a=["beautiful","sathish"]
b=[]
a.forEach(e=>{
    c=[]
    for (let i = 0; i < e.length; i++) {
        if (i ==1) {
          c+=String.fromCharCode(e.charCodeAt(1)-32);
        } else {
          c += e[i];
        }
      }
      b.push(c)
    
});
console.log(b)