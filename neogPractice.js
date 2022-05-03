// //1.
// const power =(a,b) =>  a**b
// console.log(power(2,3))

// //2.
// const arrayLength = arr => {
//     let length = 0;
//     for(let i of arr){
//         length ++
//     }
//    return length
// }
// console.log(arrayLength([2,3,5,6,8]))

// //3.
// const encodedString = (str , num) => {
//     let result = "";
//     num = num %26;
//     for(let i=0;i<str.length ; i++){
//         let newCode = str[i].charCodeAt() + num
//         if(newCode >=65 && newCode <=90 || newCode >=97 && newCode <=122)
//             result+=String.fromCharCode(newCode)
//         else
//             result+=String.fromCharCode(newCode - 26)
//     }
//     return result
// }

// console.log(encodedString('zeogCamp',2000))

// //day2
// //1.area of hexagon

// const areaOfHex = l =>  (3*Math.sqrt(3)*l*l/2).toFixed(2)

// console.log(areaOfHex(10))

// //2.index of item in array

// const indexOf = (arr , num) => {
//     let flag =0;
//     let index =0 ;
//     for(let i =0 ;i<arr.length ; i++){
//         if(arr[i] === num){
//             index = i
//             flag =1;
//             break;
//         }
//     }
//     if(flag)
//         return index
//     return "not found"
// }
// console.log(indexOf([1,6,5,4,3],6))

// //using inbuilt
// const indexOfInbuilt = (arr,num) => arr.findIndex(element => element === num)

// const index = indexOfInbuilt([1,6,5,4,3],12)
// if(index !== -1)
//     console.log(index)
// else
//     console.log("num not found in array")

// //2. all index of num in array

// //3.
// const toSentenceCase = str => {
//    let arr = str.split('')
//   return arr.map((element,index) => {
//         if(arr[index-1] === " " || index === 0)
//             return element.toUpperCase()
//         return element
//     }).join('')
// }

// console.log(toSentenceCase('we are neoGrammers'))

//day3
//1.
// const noOfWords = (str) =>{
//     let words = 0;
//     if(str.length)
//         words++;
//     for(let i=0;i< str.length;i++){
//         if(str[i] === " ")
//             words++
//     }
//     return words
// }

// console.log(noOfWords('we are neogrammers'))

// //alternate
// const noOfWord = (str) =>{
//     if(str.length)
//      return str.split(' ').length
//     else
//       return 0
//   }

//   console.log(noOfWord('we are neogrammers'))

// //2.
// const replace = (arr , num1 , num2) => arr.map(element => element === num1 ? num2 : element)

// console.log(replace([1,6,12,3,8],3,7))

// //3.bubble , insertion ,merge
// const arr = [1,6,12,3,8]

// const sortedAsc = arr => {
//     // return [...arr].sort((a,b) => a-b)

// let n = arr.length;

// for(let i =0 ;i < n-1 ; i++) {
//     let flag = false;
//     for(let j =0 ;j < n-i-1 ; j++){
//         if(arr[j] > arr[j+1])
//             {
//                 flag = true;
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//     }
//     if(!flag)
//         break;
// }

//     return arr;
// }
// console.log(sortedAsc([...arr]))

//day4
//1.

// const findMin = (...arr) => {
// //   return arr.reduce((acc,curr) => {
// //         if(curr < acc)
// //             return curr
// //         return acc
// //     },arr[0])
//     let min = arr[0]
//     for(let i =0; i<arr.length ; i++){
//         if(arr[i] < min)
//             min = arr[i]
//     }
//     return min

// }

// console.log(findMin(12,3,6,1,8))

// //2.

// const mergeArray = (arr1, arr2) => {
//     // let mergedArr = [...arr1,...arr2]

//     let mergedArr = [];
//     let n = arr1.length;
//     for(let i =0;i<arr1.length;i++)
//         mergedArr[i] = arr1[i]
//     for(let i =0;i<arr2.length;i++){
//         mergedArr[n] = arr2[i]
//         n++
//     }
//     return mergedArr
// }
// console.log(mergeArray([1,2,8],[7,6,1]))

// //3.
// //string are immutable in js we cant modify string in place
// // const reverseCharOfWords = str =>{
// //     let newStr = str.trim()
// //     let arr = newStr.split(" ")
// //     for(let i=0;i<arr.length;i++){
// //         let strToBeReversed = arr[i]
// //         let reverseStr = '';
// //         let k= strToBeReversed.length -1;
// //         while(k > -1){
// //             reverseStr +=strToBeReversed[k]
// //             k--;
// //         }
// //         arr[i] = reverseStr;
// //     }
// //    return arr.join(' ')

// // }

// // reverseCharOfWords('we are   neogrammars')

// const reverseCharOfWords1 = str =>{
//    let newStr = str.trim();
//    let k =0;
//    let reverseStr=''
//    for(let i =0 ; i < newStr.length ;i++){
//        if(newStr[i] === ' '){
//             for(let j =i-1; j>=k ;j--){
//                 reverseStr += newStr[j]
//             }
//             reverseStr+=newStr[i]
//             k=i+1;
//        }
//        if(i === newStr.length-1){
//             for(let j =i; j>=k ;j--){
//                 reverseStr += newStr[j]
//             }
//        }

//    }
//    console.log(reverseStr)
// }

// reverseCharOfWords1('we are neogrammars')

// //day5
// //1.
// const concateInBiggerStr = (str1 , str2) => {
//     let l1 = str1.length;
//     let l2 = str2.length;
//     if(l1 >  l2){
//         str1 += str2;
//         return str1
//     }
//     else{
//         str2 += str1;
//         return str2;
//     }
// }

// console.log(concateInBiggerStr("batch 2022","we are neoGrammars"))

// //2.

// const stringToUppercase = str => {
//     // return str.toUpperCase()
//     let result = ""
//     for(let i=0 ; i < str.length ; i++){
//         let charCode = str[i].charCodeAt()
//         if(charCode >= 97 && charCode <= 122){
//             result  += String.fromCharCode(charCode-32)
//         }
//         else{
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(stringToUppercase("we are neoGrammers"))

// //3.

// const replaceStr = (str , c1 ,c2) =>{
//     let result = ""
//     for(let i =0; i< str.length ;i++){
//         if(str[i] === c1)
//             result += c2;
//         else
//             result += str[i]
//     }
//     return result
// }

// console.log(replaceStr('we are neoGrammers','r','u'))

// //day 6
// //1.

// const getStrLength = str => {
//     let length = 0;
//     // while(str[length] !== undefined){
//     //     length++;
//     // }
//     let arr = [...str]
//     for(let i of arr){
//         length++
//     }
//     return length
// }

// console.log(getStrLength('we are neoGrammars'))

// //2.
// const removeTimeFromDate = str => {
//     let result = "";
//     for(let i =0 ;i< str.length ; i++){
//         if(str[i] === ","){
//             break;
//         }
//         result += str[i]
//     }
//     return result
// }

// console.log(removeTimeFromDate("Wed April 15, 7pm"))

// //3.

// const removeSpaceFromStr = str => {
//     let result = "";
//     for(let i =0 ;i< str.length ; i++){
//         if(str[i] !== " "){
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(removeSpaceFromStr('   we are   neoGrammars'))

//day7
// // //1.
// const maskStr = str => {
//     let result = "";
//     if(str.length<=4)
//         return str;
//     for(let i=0;i<str.length-4;i++){
//         result+='#'
//     }
//     return result + str.slice(str.length -4 , str.length)
// }

// console.log(maskStr("5237183912391fg54"))

// //2.
// const checkPalindrome = str => {
//     let i=0;
//     let j = str.length-1;
//     let isPalindrome = true;
//     while(i <= j){
//         if(str[i] !== str[j]){
//             isPalindrome = false;
//             break;
//         }
//         i++;
//         j--;
//     }
//     return isPalindrome
// }

// console.log(checkPalindrome('213affa312'))
// //3.

// const reverseStrWordWise = str => {
//     let arr = str.split(" ")
//     console.log(arr)
//     let i=0;
//     let j = arr.length-1;
//     while(i<=j)
//    {
//         //swap
//       [arr[i],arr[j]] =  [arr[j],arr[i]]
//         i++;
//         j--;
//     }
//     return arr.join(" ")
// }

// console.log(reverseStrWordWise('Welcome to neog camp'))

//day 8
//1.
// const findMax = (...arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// };

// console.log(findMax(3, 2, 12, 67, 1));
// //2.
// const charAtIndex = (str, index) => {
//   if (index >= str.length) return "index is not in the string";
//   return str[index];
// };

// console.log(charAtIndex("neogCamp", 4));

// //3.
// const checkWeekDay = (str) => {
//   if (str.toLowerCase() === "sunday" || str.toLowerCase() === "saturday")
//     return str + " is " + "weekend";
//   return str + " is " + "weekday";
// };
// console.log(checkWeekDay("sunDay"));

//np3 3--------------------------------Np3

// const insertString = (str1 , str2 , pos) => {
//   let result = "";
//   for(let i =0 ;i< str1.length;i++){
//     if(i === pos){
//         result += str2;
//     }
//     result += str1[i];
//   }
//   console.log(str1.slice(0,pos) + str2 + str1.slice(pos, str1.length))
//   console.log(result)
// }
// insertString('We are doing some problem solving.','JavaScript ',18);

// Expected Output:
// We are doing some JavaScript problem solving.

// const substring = str => {
//   let output =[]
//   let result = ""
//   for(let i=0;i<str.length;i++){
//      result = ""
//     for(let j=i;j<str.length;j++){
//       result += str[j]
//       output.push(result)
//     }
//   }
//   console.log(output)
// }

// substring("neog")

// const protectEmail = (str) => {
//   let newStr = "";
//   let pos = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "@") {
//       pos = i;
//       break;
//     }
//     newStr += str[i];
//   }
//   console.log(
//     newStr.slice(0, Math.trunc(newStr.length / 2)) +
//       "..." +
//       str.slice(pos, str.length)
//   );
// };

// protectEmail("akanq@neog.camp");
// protectEmail("akanksha@neog.camp");

//day 9
// //1.
// const typeOfTriangle = (a,b,c) => {
//     if(a+b+c ===  180){
//         if(a === b && b === c) return "equilateral triangle"
//         if(a === b || b===c || a===c) return "isosceles triangle"
//         return "scalene triangle"
//     }
//     return "Not a triangle"
// }

// console.log(typeOfTriangle(80,50,50))

// //2.
// const minDate = (date1 , date2) => {
//     const [day1 , month1 , year1] = date1.split("/")
//     const [day2 , month2 , year2] = date2.split("/")
//     if(year1 < year2) return date1
//     if(year2 < year1) return date2
//     // if year is same compare month
//     if(month1 < month2) return date1
//     if(month2 < month1) return date2
//     // if month is same compare day
//     if(day1 < day2) return date1
//     if(day2 < day1) return date2
//     //if same date return any
//     return date1
// }

// console.log(minDate('24/05/2021','14/01/2021'))

// //3. print highest frequency character
// //check prajwal solution   O(n)

// const highFreqChar = str => {
//     let arr = str.split("")
//     let count = 0,maxFreq = 0 , maxFreqChar = "",charCheck = "";

//    let arr1 =  str.split("").sort()
//    //0(n) complexity
//    for(let i =0 ;i<arr1.length ;i++){
//        if(arr1[i] !== arr1[i+1]){
//             if(count > maxFreq){
//                 maxFreq = count;
//                 maxFreqChar = charCheck;
//             }
//             count = 0;
//        }
//        else{
//            charCheck = arr1[i]
//            count++
//        }
//    }

//     //O(n2) complexity
//     // for(let i =0 ;i < arr.length ; i++){
//     //     for(let j = i+1;j<arr.length;j++){
//     //         if(arr[i] === arr[j]){
//     //             count++;
//     //             charCheck = arr[i]
//     //         }
//     //     }
//     //     if(count>maxFreq){
//     //         maxFreq = count
//     //         maxFreqChar = charCheck
//     //     }
//     //     count = 0;
//     // }
//     return maxFreqChar
// }

// console.log(highFreqChar('nmkeokgkcapknmiokigkg'))

//day 10
//1.
// const sumOfDigitInStr =  str => {
//     let sum = 0
//     for(let digit of str){
//         sum += Number(digit)
//     }
//     return sum
// }

// console.log(sumOfDigitInStr("123456"));

// //2.
// const decimalToBinary = num => {
//     let arr= []
//     while(num > 0){
//         arr.push(num%2)
//         num = Math.floor(num/2);
//     }
//     return arr.reverse().join("")
// }

// console.log(decimalToBinary(6));

// const binaryToDecimal = num => {
//     let decimalNo = 0;
//     100
//     let i =0;
//     while(num > 0){
//         decimalNo += num%10 * Math.pow(2,i);
//         i++;
//         num = Math.floor(num/10);
//     }
//     return decimalNo
// }

// console.log(binaryToDecimal(111));

// //3. cyclic rotation of string by k steps
// const cyclicRotation = (num,steps) => {
//     let str= num.toString()
//     let rotation = steps % str.length;
//     return str.slice(rotation) + str.slice(0,rotation)
// }
// console.log(cyclicRotation(1234, 5));

// //alternate brute force cyclic right rotation

// const cyclicRotation1 = (num,steps) => {
//     let arr= num.toString().split("")
//     let actualrotation = steps % arr.length;

//     for(let i =1;i<=actualrotation;i++){
//         let lastElement = arr[arr.length -1];
//         for(let j =arr.length-1 ; j>0;j--){
//             arr[j] = arr[j-1]
//         }
//         arr[0]= lastElement
//     }
//     return arr

// }
// console.log(cyclicRotation1(12345, 7));

// //alternate optimized cyclic right rotation

// const cyclicRotation2 = (num,k) => {
//     let arr= num.toString().split("")
//     let n = arr.length,b = []
//     for(let i =0 ;i<n ;i++){
//         let rem = (i+k)%n;
//         b[rem] = arr[i]
//     }
//     console.log('optimized',b)

// }
// cyclicRotation2(12345, 8);

// //4.reverse a no
// const reverseNo = (num) => {
//     let reverseNum = 0;
//     while (num > 0) {
//       let rem = num % 10;
//       reverseNum = reverseNum * 10 + rem;
//       num = Math.floor(num / 10);
//     }
//     return reverseNum;
//   };
//   console.log(reverseNo(23456));

//day14
//1.
// const Obj = {
//     name: "ragini",
//     age: 23,
//     hairColor: "black"
//   };

//   const invertObj = (Obj) => {
//     let Obj1 = {};
//     for (let key in Obj) {
//       Obj1 = { ...Obj1, [Obj[key]]: key };
//     }
//     console.log(Obj1);
//   };

//   invertObj(Obj);

// //2.
// const lagrestDiff = (arr) => {
//     let maxDiff = 0;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         let diff = Math.abs(arr[i] - arr[j]);
//         if (diff > maxDiff) maxDiff = diff;
//       }
//     }
//     return maxDiff;
//   };

//   console.log(lagrestDiff([2, 3, 6, 8, 12, 2]));

//alternate

//  const lagrestDiff1 = (arr) => {

//     if(arr.length === 0) return 0;
//     let min = arr[0],max= arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min)
//             min = arr[i]
//         if(arr[i] > max)
//             max= arr[i]
//     }
//     return Math.abs(max - min)

//    };

//   console.log(lagrestDiff1([2, 3, 6, 8, 12, 2]));


// //day15
// //1.
// // 2 sum problem 
// const pairOfTarget = (arr,target) => {

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === target)
//                 return [arr[i],arr[j]]
//         }
//     }
// }

// console.log(pairOfTarget([2,5,8,1],6))
// //2.
// //given an arr and int.break array into k chunks and rteurn in an array

// const breakArrInChunks = (arr,k) => {
//     let result = [],arr1 =[]
//     for(let i=0;i<arr.length;i++){
//         if(i%k === 0 && i!=0){
//             result.push(arr1)
//             arr1 = []
//         }
//         arr1.push(arr[i])
//     }
//     result.push(arr1)
//     return result
// }

// console.log(breakArrInChunks([1,2,3,4,5,6,7,8,9,10],4))

// //3.
// //return num with least freq

// const leastFreqNo = arr => {

//     let freq = new Map();
//     let minNum =0,minCount = +Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(freq.has(arr[i])){
//             freq.set(arr[i],freq.get(arr[i])+1)
//         }else{
//             freq.set(arr[i],1)
//         }
//     }

//     for(let [key,value] of freq.entries()){
//         if(value<minCount || (value === minCount && key > minNum )){
//             minCount = value;
//             minNum = key
//         }
//     }
//     return minNum
// }

// console.log(leastFreqNo([1,2,3,4,4,6,8,8,9,9]))

//day 16
//1.
//move all 0's to end of array

// const moveZeroToEnd = (arr) => {
//   let newArr = [],
//     count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) newArr.push(arr[i]);
//     else count++;
//   }
//   for (let i = 1; i <= count; i++) {
//     newArr.push(0);
//   }
//   return newArr;
// };

// console.log(moveZeroToEnd([0, 2, 4, 6, 0, 1, 3, 0, 9]));

// //2.
// //return elemnt which occur n/2 times

// const getElement = (arr) => {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]]) freq[arr[i]]++;
//     else freq[arr[i]] = 1;
//   }
//   for (let [key, value] of Object.entries(freq)) {
//     if (value >= Math.floor(arr.length / 2)) return value;
//   }
// };

// console.log(getElement([1, 2, 3, 2, 3, 2, 1]));

// //3.
// //return first non repeating characrter from string

// const firstNonRepeatingChar = (str) => {
//   let arr = str.split(""),
//     freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]]) freq[arr[i]]++;
//     else freq[arr[i]] = 1;
//   }
//   for (let [key, value] of Object.entries(freq)) {
//     if (value === 1) return key;
//   }
//   return -1;
// };

// console.log(firstNonRepeatingChar("neogcamp"));


//day 17
//1. 

const defangledIP = (str) => {
  let arr = str.split("");
  const defangledIP = arr
    .map((element) => (element === "." ? "[.]" : element))
    .join("");
  return defangledIP;
};

console.log(defangledIP("255.100.00.01"));


//2.given a string.Reverse all vowels in it

const isVowel = char => "aeiou".includes(char.toLowerCase())

const reverseOnlyVowels = str => {

  let allVowels = [],result = "";
  for(let i = 0;i<str.length ;i++){
    if(isVowel(str[i]))
        allVowels.push(str[i])
  }
  for(let i = 0;i<str.length ;i++){
    if(isVowel(str[i]))
       result += allVowels.pop()
    else
      result += str[i]
  }
  console.log(result)
}

reverseOnlyVowels('neogCAmp')

//alternate 2 pointer approach

const reverseOnlyVowels1 = str => {

  let i = 0 ,j=str.length-1,arr= str.split("");
  while(i<j){
    if(isVowel(arr[i]) && isVowel(arr[j])){
      [arr[i],arr[j]] =  [arr[j],arr[i]];
      i++;
      j--;
    }
    if(!isVowel(arr[i]))
      i++;
    if(!isVowel(arr[j]))
      j--;
  }
  console.log(arr.join(""))
}

reverseOnlyVowels1('neogCAmp')

//3.
//find no of summerfruits in fruits.every character in summerfruit is unique

//0(n2)
const findFruits = (summerFruits, fruits) => {
  let count = 0;
  for (let j = 0; j < summerFruits.length; j++) {
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i] === summerFruits[j]) count++;
    }
  }
  console.log(count);
};

findFruits("aA", "aaAAbcfeej");

//0(n)

const findFruits1 = (summerFruits, fruits) => {
  let freq = {},
    count = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (freq[fruits[i]]) freq[fruits[i]]++;
    else freq[fruits[i]] = 1;
  }

  for (let i = 0; i < summerFruits.length; i++) {
    if (freq[summerFruits[i]]) count += freq[summerFruits[i]];
  }
  console.log(count);
};

findFruits1("aA", "aaAAbcfeej");

//    BINARY SEARCH

const binarySearch = (arr,num) => {
  let l =0,r = arr.length-1;

  while(l<=r){

    let mid = Math.floor(l+(r-l)/2);
    console.log(mid)
    if(arr[mid] === num)
      return mid
    if(num < arr[mid])
      r = mid-1;
    else
      l = mid+1;
  }
  return -1;
}

console.log(binarySearch([2,3,4,5,6,7,8,13,16,17],8))

//PEAK ELEMENT

//O(n) complexity
const findPeakElement = arr => {

  if(arr[0] > arr[1]){
      return 0;
  }
  if(arr[arr.length-1] > arr[arr.length-2] ){
      return arr.length-1
  }

  for(let i=1;i<arr.length-1;i++){
     if(arr[i]> arr[i+1] && arr[i] > arr[i-1])
      return i;
  }
}

console.log("peak",findPeakElement([2,10,20,30,35,38,39,40,30]))

//O(logn)

const findPeakElement1 = arr => {
  let start = 0,end= arr.length-1;

  if(arr[0] > arr[1]){
    return 0;
  }
  if(arr[arr.length-1] > arr[arr.length-2] ){
    return arr.length-1
  }
  while(start <= end){
    let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1])
        return mid;
      if(arr[mid+1] > arr[mid])
        start = mid+1;
      else
        end = mid-1;
  }
  

}

console.log("peakbs",findPeakElement1([2,10,20,30,35,38,39,40,30,20]))

//day 18
//1.return length of last word

const lastWordLength = str => {
  let arr = str.trim().split(" ");
  return arr[arr.length -1].length
}

console.log(lastWordLength('  hello neogrammars you guys rock  '))

//2. check if strings are anagram or not

const checkAnagramOfStrings = (str1,str2) => {
  if(str1.split("").sort().join("") === str2.split("").sort().join(""))
    return 1;
  return 0;

}

console.log(checkAnagramOfStrings('helzlo','lezloh'))

//alternate
const checkAnagramOfStrings1 = (str1,str2) => {
  let freq = {};
  for(let i=0;i<str1.length;i++){
    if(freq[str1[i]])
      freq[str1[i]]++;
    else
      freq[str1[i]] = 1;
  }
  for(let i=0;i<str2.length;i++){
    if(freq[str2[i]])
      freq[str2[i]]--;
  }
  console.log(freq)
  for(let [key,value] of Object.entries(freq)){
    if(value !== 0)
      return 'not anagram'
  }
  return 'anagram'

}

console.log(checkAnagramOfStrings1('helzlo','lezloh'))

//3.check if first string match second string with some number of shifts

const checkStrings = (str1,str2) =>{

  if(str1.length !== str2.length) return false;
  let j = str2.split("").findIndex((element) => element === str1[0]);

  for(let i=0;i< str1.length;i++){
    if(str1[i] !== str2[j])
      return false;
    j = (j+1)% str2.length;
  }
  return true;

}
console.log(checkStrings('hello','llohe')) 

//alternate
const checkStrings1 = (str1,str2) =>{

  if(str1.length !== str2.length) return false
  return (str1+str1).includes(str2);

}
console.log(checkStrings1('hello','llohe')) 