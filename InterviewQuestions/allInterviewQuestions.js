//*************** reliance jio *****************

//find missing no in array

const arr = [1,2,4,5,6];

const missingNum = arr => {
//   let count = 1;
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i] !== count)
  //     return count
  //   count++;
  // }
  let flag = 0;
  const missingN0 = arr.reduce((acc,curr,index) =>{
    if(curr !== index+1 && flag === 0){
      flag++;
      return index+1
    }
    return acc
  } ,0)
 return missingN0
}
console.log(missingNum(arr))

//flatten an array

const arr1 = [1, 2, 3, [5, 6, 7], { name: "ragini" }];

const result = arr1.reduce((acc, curr) => {
  if (typeof curr === Object) {
    acc = [...acc, { ...curr }];
    return acc;
  }
  if (curr.length) {
    acc = [...acc, ...curr];
    return acc;
  }
  acc = [...acc, curr];
  return acc;
}, []);

console.log(result);

//fetch a url and displau on screen also use custom hook
//https://codesandbox.io/s/gracious-cookies-1o2svk

//what and why to change to make it work
//https://codesandbox.io/s/gifted-kirch-nfb7i5?file=/src/App.js



//round 3

// let reversedStr = ""
// function reverse = str => {
//   //base
//   if(str.length === 0)
//     return;
//   // last character from incoming string
//   reversedStr += str.slice(str.length-1)
//   //make recursive call with left over character
//   reverse(str.slice(0,str.length-2))
  
// }

// // reversedStr = h
// //str = ragini sing


//     Group elements of an array based on their first occurrence
// Input:  {​​​ 1, 2, 3, 1, 2, 1 }​​​
// Output: {​​​ 1, 1, 1, 2, 2, 3 }​​​
// Input:  {​​​ 5, 4, 5, 5, 3, 1, 2, 2, 4 }​​​
// Output: {​​​ 5, 5, 5, 4, 4, 3, 1, 2, 2 }

// ​​​const groupOccurnece = arr =>{

//   const freq = {};
//   let result = [];
//   for( let i=0;i< arr.length;i++){
//     if(freq[arr[i]])
//       freq[arr[i]]++;
//     else
//       freq[arr[i]]=1;
//   }   // on
//   // freq = { 1 : 2 , 2 : 1 , 3:1}
//   // freq : { 1 : 3 , 2 : 2 , 3:1}
//   for( let [key,value] in Object.entries(freq)){
//     let count = value;
//       while(value > 0){
//         result.push(key);
//         value--;
//       }
//   }    // o(n* no which came max time in array)

// }

// groupOccurnece([1, 2, 3, 1, 2, 1])


// Check if a subarray with 0 sum exists or not
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Output: Subarray with zero-sum exists

// The subarrays with a sum of 0 are:

// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

// const generateSubArr = arr =>{
//   // [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
//   let subArr = [] , sum =0;
//   for(let i=0;i<arr.length;i++){  // i =0, 3 // sum = 0 // subArr = [3 , 4 ,-7 , 3 ,1 , 3 , 1 ,-4 , -2]
//     sum = arr[i]
//     subArr.push(arr[i])
//     for(let j=i+1;j< arr.length;j++){
//       sum += arr[j];
//       subArr.push(arr[j])
//       if(sum === 0){
//         console.log(subArr);
//       }
//     }
//     subArr = [];
//   }

// }




//****************AAPNA INFOTECH ***************/

var favouriteFood = "grapes";
var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);
  var favouriteFood = "orange";
  console.log("New favourite food: " + favouriteFood);
};
foodThoughts();


let originalArray = [37, 3700, { hello: "world" }];
let arrayCopy = [...originalArray];
arrayCopy[2].hello = "moon";
console.log(arrayCopy);
console.log(originalArray);