 //var c = 300
let a = 300// let and const are block scope and var is globle scope 
//default scope of varialble is globle
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one() { // this is called nested function
    const username="Ranjeet";// in this nested function only child function can access the variable of parent function
    // this callled closour in javascript
    function two(){
        const website="Guru.com";
        console.log(username);
    }
    two();
     //console.log(website);
}
one();


if (true) {
    const username = "Ranjeet"
    if (username === "Ranjeet") {
        const website = "Guru.com"
         console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))// you can access the function before declation due to hoisting but you cant acess variable 
//before intialization

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // you can't acess addtwo() before intialization but you can access the
    // function before intialization
    return num + 2
}
