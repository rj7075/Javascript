const user = {
    username:"Ranjeet",
    price:999,
    welcome: function(){
        console.log(`${this.username}, welcome to this website`);// this keyword refer the current context
        // value of username
        console.log(this);//this keyword hold the value of current context variable
    }
}
// user.welcome();
// user.username="Rahul"
// user.welcome();

console.log(this);// empty object shows in node js browser
//in brower this will show you window object window object is globle object in browser

// function chai(){
//     const username="Ranjeet"
//     console.log(this.username);//this keyword is used only in the object you can't use this keyword in function to 
//     // stored the current context variable address;
// }
// chai();

// const chai=function(){
//     let username="Ranjeet"
//     console.log(this);// this did not stored the value of current context in decleared function or intialized function
// }
// chai();
const chai = () => { // arrrow function, in arrow function this keyword does not store all other globle object but in normal 
    // function it stored and show all method so that this keyword is not used in inside the arrow function because it indicating empty object
    let username="Ranjeet"
    console.log(this);// this did not stored the value of current context in decleared function or intialized function
}
// chai();
  const addtwo= (num1,num2)=> (num1+num2)// when you write curly braces you nedd to write return in parenthesis don't required
  console.log(addtwo(3,4));

  const object= (num1,num2)=>({username:"Ranjeet"});// for returning object youneed to wrap object in parenthesis
  console.log(object(2,3));

  // for handling array
   const myarr=[1,2,3,4,5];
   myarr.forEach(()=>{

   })// by this method we can write arraow function for array also