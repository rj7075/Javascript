// IIFE imidiatly invoked function Expression
// narmal function
function chai(){
    console.log(`DB Connected`);
}
chai();

//iife function    
//()(), first bracket shows function declaration and second braket shows function execution
(function chai(){ // sometimes there is arise a problem due to globle scope polution to remove this problem we use iife function
    console.log(`DB Connected`);// named IIFE
})()
// you can also use parameter to pass in the function
// if you want to arite two iife then you need to put ; at last of execution fuction
( (name) => { // Un named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ranjeet')

