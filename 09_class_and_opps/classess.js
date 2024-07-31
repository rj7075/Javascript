// classes in javascript all method are used after ES6 letest

//creation fo class in js
// class User{
//     //constructor initialization
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `this is your given password ${this.password}`;
//     }
//     changeuserName(){
//         return `this is your given password ${this.username.toUpperCase()}`;
//     }
// }
// const ranjeet= new User("Ranjeet Yadav","rj7075yadav@gmail.com",983869);
// console.log(ranjeet);
// console.log(ranjeet.encryptPassword());
// console.log(ranjeet.changeuserName());

// behind t]how it is working
 function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
 }

 User.prototype.encryptPassword=function(){
    return `this is ${this.password} your password`;
 }

 User.prototype.changeuserName=function(){
    return `this is ${this.username.toLowerCase()} your password`;
 }

 const ranjeet1= new User("Ranjeet Yadav","rj7075yadav@gmail.com",983869);
 console.log(ranjeet1.encryptPassword());
 console.log(ranjeet1.changeuserName());
 console.log(ranjeet1.username);