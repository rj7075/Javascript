// function function_name(){
//     statements
// }

// function_name();// function calling

// function addtwonumber( number1,number2){ // when we define the function passed value called parameter
                                        
//     console.log(number1+number2);
// }

// function addtwonumber( number1,number2){ // when we define the function passed value called parameter
                                        
//     console.log(number1+number2);
// }

//const result1=addtwonumber(3,4);// since function is not return anything so result will be undefined
//console.log(result1);
// addtwonumber(4,5);//when we calling a function passed value called argument
// addtwonumber("3",3);
// addtwonumber(3,"3");

// function addtwonumber( number1,number2){ // when we define the function passed value called parameter
//       let result=number1 + number1;                                  
//     return result;
// }
// const result=addtwonumber(5,4);
// console.log(result);

function loginusermessage(username="chuitya"){
    if(username===undefined){
        console.log("Please Enter a username");
    }
    else{
  return `${username} just logged in `
    }
  
}

console.log(loginusermessage("Ranjeet"));



function calculatecartprice(val1,val2, ...num1){ // ... called rest operator here it will push element into array
  return num1;
}

console.log(calculatecartprice(200,300,200,8,9,6));

const user={
    username:"Ranjeet",
    price:650,
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user);// you can pass object in the function as argumnet
handleobject({ // you can pass direct object in the function
    username:"Rahul",
    price:"chutiya"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ /// you also pass a array in the function and can accessed them
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));// you can pass array as variable or direct array