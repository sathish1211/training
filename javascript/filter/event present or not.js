a=[{ event:1,date:"12-11-2023"},
    { event:2,date:"11-12-2023"},
    { event:3,date:"01-01-2024"},
    { event:4,date:"20-2-2024"}]
y="20-2-2024"
event_is=a.filter(e=>e.date==y)
console.log(event_is)