let myname="Ranjeet  ";
console.log(myname.truelength);

let myHeros=["thor","spiderman"];

const hero_power={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function (){
        console.log(`spider power is ${this.spiderman}`);
    }
}
Object.prototype.function1=function(){
     console.log(`ranjeet you are very smart person`)
}

Array.prototype.function2=function(){
    console.log(`congratulation you have fineshed advanced javascript`);
}

// hero_power.function1();
//  myHeros.function1();
// myHeros.function2();
// hero_power.function2();

///inheritance

const user= {
    name:"Ranjeet",
    email:"rj7075@gmail.com"
}

const teacher={
    makevideo:true
}

const teachingsupport={
    isavailable:false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
   __proto__:teachingsupport// __proto__ is used to inherit the property of other object.
}

// old syntax for inheritance
teacher__proto__=user
// modern method for inheritance
Object.setPrototypeOf(teachingsupport,teacher);//teachingsupport property ingerited by teacher

let anotherusername="Ranjeet Yadav    "
String.prototype.truelength=function(){
console.log(`${this}`);
console.log(`${this.name}`);
console.log(`the true length is:${this.trim().length}`);
}

anotherusername.truelength();
"ranjeet".truelength();
"Ranjeet   ".truelength();