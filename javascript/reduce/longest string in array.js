//7. Write a function that takes an array of strings and returns the longest string in the array. Use the reduce method to accomplish this.

a = ['jeeva','school','garden','nature','mountain','elephant','pneumonoultramicroscopicsilicovolcanoconiosis']
x = a.reduce((e,i) => e.length > i.length ? e : i)
console.log("The longest word is",x)
