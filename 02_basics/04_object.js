// const tinderuser=new Object()//second method of creting object singleten object
// console.log(tinderuser);
// const tinderuser={};// litral object
// console.log(tinderuser);

// tinderuser.id="123abc",
// tinderuser.name="rahul"
// tinderuser.isloggedin=false
// tinderuser.email="abc@gmail.com"

// console.log(tinderuser);

// const regularuser={          // Nested object creation you aceess it nestedlyusing dot operator
//     email:"rj9089@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname:"Ranjeet",
//             lastname:"Yadav"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname);//access the property nestedly

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};/// by this method object are nested itself
// console.log(obj3);

// const obj4=Object.assign({},obj1,obj2);// by this method object arrange in  sequential way
// console.log(obj4);// if you give the { } then all value goes in { } otherwise it will go in to the obj1 so giving this is 
// // a good practice

const obj3={...obj1,...obj2};// first spread then combine
console.log(obj3);

// when any data comes from database in form of array of object

const user=[
    {
        id:1,
        email:"rj@gmai;l.com"
    },
    {
        name:"ranjeet",
        profession:"Student"
    }

]

//how to access the object in array
user[1].email
console.log(Object.keys(obj3));//by this method you can access the all key of a object and apply loop on them
console.log(Object.values(obj3));// you access all value in array of object
console.log(Object.entries(obj3));//to check how many entries are gotted in database

console.log(obj3.hasOwnProperty(7));// to weather this property array of object contain or not