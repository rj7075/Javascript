// for loops
for (let i = 0; i <=10; i++) {

    const element = i;
    console.log(element);
    
}
for (let i = 0; i <=10; i++) {
    console.log(`outer loop value is ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`outer loop value ${i} and inner loop value ${j}`);
        console.log(i + "*" +j  +"= "+ i*j);
        
    }
    
}

let myarr= ["Ranjeet","Yadav" ,"Basti"]
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
    
}

// break and continue
for (let i = 0; i < 20; i++) {
    const element = i;
    console.log(element);
    if(i==5){
        break;
    }
    
}