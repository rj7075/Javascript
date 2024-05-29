const usermail=[];// it decide on the basis of truthy value 
if(usermail){
    console.log("Got usermail");
}
else {
    console.log("not get user mail");
}
// there some rules and regulations to decide truthy values in js

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// for array
 if(usermail.length==0){
    console.log("array is empty");
 }
 const emptyobject={};
 if(Object.keys(emptyobject).length === 0){
    console.log("Object is empty"); // empty object represent truty value
 }

 // Nullish coalescaling operator (??):
 let val1=5 ?? 10;
 let val2=null ?? 10;// it will assign first value to the variable
 console.log(val1);
 console.log(val2);

 // Ternary operator
 // condition ? true : false
 const iceprice= 100;
 iceprice>=100? console.log("greater than 100 or equal") : console.log("less than 100");



