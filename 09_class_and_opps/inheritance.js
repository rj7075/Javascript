class User{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`this is my username ${this.username}`);
    }
}
// Extend keyword are used to inherit the property of the other classess in JS.
// Wtih the help of super key word you can use the same name property of other class in current class.
class Teacher extends User{
     constructor(username,email,password){
        super(username);// super keyword will automatically set the property of otyher class even if the nae is same
        this.password=password;
        this.email=email;
     }
     addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const ranjeet=new Teacher("Ranjeet","rj7075yadav@gmail.com",2345);
const java=new User("javascript")
java.logme();
console.log(java instanceof User);

