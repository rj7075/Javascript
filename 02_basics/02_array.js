const address=["Ramjeet","Yadav","Durgapur","Basti"];
const edu=["high","inter","ug","pg"];
// address.push(edu);
// console.log(address);
// console.log(address[1][2]);
  const onearr=address.concat(edu);// concat all element of different array to a single array

  console.log(onearr);

  const all_new_heros = [... address, ...edu];
  console.log(all_new_heros);

  const newarr=[1,2,3,[3,4,5,[0,9,8]],[5,6,7],[6,7,8],[2,3,5,5]];
  const realarr=newarr.flat(Infinity);// flat all array element in a single array
  console.log(realarr);

  console.log(Array.isArray("Ranjeet"));// to check weather it is array or not
console.log(Array.from("Hitesh"))// make the element in the form of array
console.log(Array.from({name: "hitesh"})) // interesting in this form input key value pair it return a empty 
// it not understand which is going to form an array key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//to make elment in the form of array