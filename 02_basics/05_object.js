// Destructuring of array of object
// how to extract the value from object directly 
const course={
    course:"javascript",
    price:"10",
    instructure:"hitesh"
}

const{instructure}=course;// by this method you no need to write course.instructure to access instructure property
                           // meaning of this line kya extract kerna hai kha se extract kerna hai
                           // intructure extract kerna hai course se extract kerna hai
console.log(instructure);
const {instructure:abc}=course;// you can also give the name of property according to you
console.log(abc);

// const navbar= ({company}) =>{   //company passed as array destructuring direct name not course.company useful in react

// }

// { // if you write without giving name it treated as json not object
// "name":"Ranjeet",
// "add":"Basti",
// "classs":"ug"

// }
// sometimes api comes in array format json
// [
//     {}
//     {},
//     {},
// ]
