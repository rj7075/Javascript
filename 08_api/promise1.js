const promiseOne=new Promise(function(resolve,reject){
    //you can perform an ascyn await task
        //Db calls ,cryptography,network'
        setTimeout(function(){
            console.log('asyn task is completed');
            resolve();// if resolved is execute then ,.then method will execute or promise will consumed
        },1000);
    })
    promiseOne.then(function(){
        console.log("promise is consumed");
    })
    
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("asyn task 2 is resolved");
            resolve();
        },1000)
    }).then(function(){
        console.log("asyn task 2 is completed");
    })
    
    // 3rd promise
    const Promisethree=new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve({username:"Ranjeet",email:"rj7075yadav@gmail.com"})
        },1000)
    })
    Promisethree.then(function(user){
      console.log(user);
    })
    
    
    // promise four
    const promisefour=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=false;
            if(!error){
                resolve({username:"Ranjeet", email:"rj7075yav@gmail.com"})
            }
            else{
                reject('Error:something went wrong');
            }
        },1000 );
    })
    
    const username= promisefour
    .then((user)=>{
        console.log(user);
        return user.username;
    })
    .then((username)=>{
      console.log(username);
    })
    .catch(function(error){
        console.log(error);
    }).finally(()=>{
        console.log("the promise either resolved or rejected");
    })
    
    //promise 5 using asyn await
    const promisefive=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({username:"rj era", email:"rj7075yav@gmail.com",password:"12345"})
            }
            else{
                reject('Error:something went wrong');
            }
        },1000 );
    })
    
    async function consumepromisefive(){
         try {
            const response=await promisefive
            console.log(response);
            
         } catch (error) {
            console.log(error);
         }
    }
    consumepromisefive();
    
    async function getallusers(){
       try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        const data=response.json();
        console.log(data);
       } catch (error) {
         console.log(error);
       }
    }
    
    getallusers();
    
    
    // inm then and catch format above method
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    