// Javascript Arrays are resizable 
// const array=[0,1,2,3,4,5];
// console.log(array[3]);

// const arr=["Ranjeet","Yadav"];
// console.log(arr[0]);

// const arr1=new Array(1,2,3,4,5);
// console.log(arr1[2]);
// arr1.push(9);
// arr1.push(10);
// console.log(arr1);// to add element without shift at the start

// arr1.unshift(8);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.includes(7));
// console.log(arr1.indexOf(2));

// const myarr=arr1.join();//changfe the array in to the string 

// console.log(myarr);

// slice   and splice method
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
