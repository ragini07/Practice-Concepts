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

//     let n = arr.length;
 
//     for(let i =0 ;i < n-1 ; i++) {
//         let flag = false;
//         for(let j =0 ;j < n-i-1 ; j++){
//             if(arr[j] > arr[j+1])
//                 {
//                     flag = true;
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//         }
//         if(!flag)
//             break;
//     }

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



//day5
//1.
const concateInBiggerStr = (str1 , str2) => {
    let l1 = str1.length;
    let l2 = str2.length;
    if(l1 >  l2){
        str1 += str2;
        return str1
    }
    else{
        str2 += str1;
        return str2;
    }
}

console.log(concateInBiggerStr("batch 2022","we are neoGrammars"))

//2.

const stringToUppercase = str => {
    // return str.toUpperCase()
    let result = ""
    for(let i=0 ; i < str.length ; i++){
        let charCode = str[i].charCodeAt()
        if(charCode >= 97 && charCode <= 122){
            result  += String.fromCharCode(charCode-32)     
        }
        else{
            result += str[i]
        }
    }
    return result
}

console.log(stringToUppercase("we are neoGrammers"))

//3.

const replaceStr = (str , c1 ,c2) =>{
    let result = ""
    for(let i =0; i< str.length ;i++){
        if(str[i] === c1)
            result += c2;
        else
            result += str[i]
    }
    return result
}

console.log(replaceStr('we are neoGrammers','r','u'))