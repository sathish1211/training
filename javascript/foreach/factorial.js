a=[5,6,9]
a.forEach(e => {
    fact=1;
    for(i=1;i<=e;i++){
        fact*=i;
    }
    console.log(fact);
})