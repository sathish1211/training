a= [
    { name: 'dinesh', hobbies: ['reading', 'teaching', 'traveling'] },
    { name: 'jeeva', hobbies: ['traveling', 'playing'] },
    { name: 'kiruba', hobbies: ['playing', 'traveling'] }
  ];
  x='playing'
  c=a.filter(e=>{
    count=0
     e.hobbies.filter(y=>{
        if(y == x){
            count=1
        }
     })
    if(count==1)
       return e;
  })
  console.log(c)