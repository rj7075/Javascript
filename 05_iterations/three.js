// for of loop
//[" "," "," "]
//[{},{},{},{}]//  forof loop are used to  iterate arr or object  the array and object to find information or filter value

 const arr= [1,2,3,4,5];
for (const i of arr) {
    console.log(i);
}

const greeting="Ranjeet Yadav";
for (const greet of greeting) {
    console.log(` for each greet is ${ greet}`);
}

// maps
const map= new Map();// map will store only unique value
map.set("IN", "India")
map.set("US", "America")
map.set("JP", "Japan")
map.set("Ch", "China")
console.log(map);

for (const [i, value] of map) {
    console.log(i,value);
}


const myobj= {
    game1: "1",
    game2: "2",
    game3: "3",
    game4: "4",

}

for (const [key,value] of myobj) { // you can't iterate object through this way
    console.log(key ,":-",value);
    
}