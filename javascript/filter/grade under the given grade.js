grade = [{'name':'jeeva','grade': [81,82,83,84,85]},
{'name':'Arun','grade':[98,97,96,95,94]},
{'name':'Arbaz','grade':[50,56,78,89,90]},
{'name':'Akshay','grade':[80,90,95,60,50]}]
y=75
given_grade=grade.filter(e=>{
    sum=0;
    e.grade.filter(e=>sum+=e)
    average=sum/5;
    if(average>=y)
      return e;
})
console.log(given_grade)