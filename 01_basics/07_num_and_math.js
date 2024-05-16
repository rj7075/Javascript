const score=400;
console.log(score);// auto matically detected data so its dynamically typed
const balance=new Number(400);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));//to fixed how many decimal number will need after decimal
const othernumber=456.7896;
console.log(othernumber.toPrecision(2));//to round off the value in given precisen

//++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.67));
// console.log(Math.ceil(4.67));
// console.log(Math.floor(4.67));
// console.log(Math.min(4,6,7,8,9,2));
// console.log(Math.max(2,3,4,5,6,8,9));
console.log(Math.random());// it provide random value in range 0 to 1;
console.log(Math.random()*3);// it will provide value between 0 to 3
console.log((Math.random()*10)+1);//it provide minimum value 1 and max value 11


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
