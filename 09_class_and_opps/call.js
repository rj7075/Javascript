function Setusername(username){
    this.username=username;
    console.log("called");
}

function createusername (username,name,email){// .call hold the referance of value of current context
    Setusername.call(username) // call function is used to just telling the function current context where to initialize the varianle value
    this.name=name;
    this.email=email;
}
const ranjeet=new createusername("Ranjeet_1234","Ranjeet Yadav","rj7075yadav@gmail.com");
console.log(ranjeet);