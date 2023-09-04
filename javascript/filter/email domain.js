arr = [{'name' : 'jeeva','email':'jeevad807@gmail.com'},
{'name' : 'arun','email':'arun@yahoo.com'},
{'name' : 'arun babu','email':'arunbabu@gmail.com'},
{'name' : 'srikanth','email':'srikanth@yahoo.com'}];
email="@gmail.com"
email_domain=arr.filter(e=>{
    return e.email.slice(e.email.indexOf('@'))== email
})
console.log(email_domain)