let userName: string = 'Abdullah';
// lower case
console.log("lowercase:", userName.toLowerCase());

// upper case
console.log("uppercase:", userName.toUpperCase());

//title case
console.log("titlecase:", userName.replace(/\bw/g,c=> c.toUpperCase()));

//title case 
console.log("titlecase:",userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase());
