//Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized. Use the Map object to accomplish this. 
a=[{'name':'sathish','age':22},{'name':'jeeva','age':19},{'name':'kiruba','age':21}]
s=a.map(e=>{
    v={};
    x="";
    x+=String.fromCharCode(e.name.charCodeAt(0)-32);
    for(i=1;i<e.name.length;i++){
        x+=e.name[i];
    }
    v.name=x;
    v.age=e.age;
    return v;})
console.log(s)