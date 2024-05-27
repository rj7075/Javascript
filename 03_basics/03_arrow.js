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
//in brower this will show you window object 

function chai(){
    const username="Ranjeet"
    console.log(this.username);//this keyword is used only in the object you can't use this keyword in function to 
    // stored the current context variable address;
}
chai();