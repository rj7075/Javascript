//singletan
//object.create

//object literals

const mysym=Symbol("key1");

const obj={

    "full name":"Ranjeet",// its key value is also treted as string
    post:"Student",
    add:"Ghaziabad",
    email:"rj7075yadav@gmail.com",
    [mysym]:"mykey1",// if you want to use mysym as symbol then you need to represent them in [mysym] otherwise it will treated s
    // string
    
}
console.log(obj.post);//you can't access full with this accessing method so that second method is also important
console.log(obj["full name"]);

console.log(obj.mysym);
console.log(obj[mysym]);


obj.email="rj7075yadav@gmail.com";
Object.freeze(obj);// no one can change if we freeze the obj value

obj.email="rj9899yadav@gmail.com";
console.log(obj.email);

obj.greeting=function(){
    console.log("Hello nmaste ji");
}
obj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());
console.log(obj.greeting());




