const user={
    username:"ranjeet",
    logincount:0,
    signedin:true,

    getuserdetails: function(){
        console.log("got user details")
        console.log(`username:${this.username}`);// this keyword are used to get current context details.
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.logincount);
// console.log(user.getuserdetails());
// console.log(this);

// const promiseOne=new Promise();// new keyword is kind of  constructor that is used to create new object intialization
// const date=new Date();

function User1(username,loginCount,isloggedin){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const userone=new User1("Ranjeet",12,true);// one empty object is created when you write new keyword,a constructor function is called by new keyword
const usertwo=new User1("Baljeet",23,true)// this keyword overwrite the value so use carefully
console.log(userone);
const user2={
    username:"ranjeet",
    logincount:0,
    signedin:true,

    getuserdetails: function(){
        console.log("got user details")
        console.log(`username:${this.username}`);// this keyword are used to get current context details.
        console.log(this);// new used avoid overwrite by this keyword
    }
}
