const name="Ranjeet";
const repocount=50;

console.log(name+repocount+"value");

console.log(`hello friends my name ${ name} and my repocount is ${repocount}`);
const myname=new String('Ranjeet');// it work as object store the value as key vlaue pair start from 0 index;
console.log(myname[3]);
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(5));// what character has at position 5 th
console.log(myname.indexOf('t'));// to chaeck 't' at which position are situated

const newname=myname.substring(0,6);// Gives substring from start index to end index
console.log(newname);
const anothername=myname.slice(-4,4);
console.log(anothername);

const newstring="   Ranjeet    ";// extra spaces
console.log(newstring);
console.log(newstring.trim());// to Remove the useless spaces given in input use trim() function

const url="ranjeet7075yadav.com";
 console.log(url.replace('7075','_'));// replace the character ('kisko replace kerna hai', 'kisse replace kerna hai')
 console.log(url.includes("yadav"));// for checking weather it is have in the string or not
 console.log(myname.split(''));// to split the string on the basis of diffeent parameter
 
