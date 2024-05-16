//Primitive DAta Types -7
// String, Boolean,  undefined, number, null, symbol, bigint

// Referance (Non primitive Datatypes)

//Array,object,function
//Javascript is Dynamically typed langauge we no need to define what kind of 
//data types we assign or store in variable
const id= Symbol("123");
const anotherid=Symbol("123");// symbol allways provide a unique id
console.log(id==anotherid);//false

const array=["Ranjeet","Yadav","Basti","wale","software","Engineer"];

let object ={
    name:"Ranjeet",
    Surname:"Yadav",
}

const myFunction=function(){
    console.log("Hello Ranjeet Bhai");

}
//all non primitive types are object 
// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory types-:Stack memory- Primitive Data stores(WE got ca copy of variable whenever a stack memory is created
//
 
// Heap memory-:Non-rimitive 
let myname="Ranjeetyadav";
 let anothername="ranjeet";
 anothername="yadav";
 console.log(myname);
 console.log(anothername); 

 let userone={
email:"rj7075yadav@gmail.com" ,
upi:"user1@ybl"
 }
  


     let usertwo=userone;
     usertwo.email="rjeet@gmail.com";
     console.log(usertwo);