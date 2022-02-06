//Higher order function

//this code structure voliate DRY principle
// const radius = [3,4,6,7]
// const calculateArea = function (arr){
//     let output = []
//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(Math.PI*arr[i]*arr[i])
//     }
//     return output
// }
// console.log(calculateArea(radius))

// const calculateCircumference = function (arr){
//     let output = []
//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(2*Math.PI*arr[i])
//     }
//     return output
// }
// console.log(calculateCircumference(radius))

// const calculateDiameter = function (arr){
//     let output = []
//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(2*arr[i])
//     }
//     return output
// }
// console.log(calculateDiameter(radius))

// //modular code

// const area = function(radius){
//     return Math.PI*radius*radius
// }
// const circumference = function(radius){
//     return 2*Math.PI*radius
// }
// const calculate = function (arr,logic){
//     let output = []
//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(logic(arr[i]))
//     }
//     return output
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))

// console.log(radius.map(area))

// tanay class functional programming
// immutability
// 1.
const tanay = {
    mother :"kanak",
   age : 30
}
const tanvi = {
    ...tanay,age: tanay.age -4
}
// 2.
const arr = ['red','green','blue'];
const arr1 = [...arr,'white','black']

// pure function

const birthday = (person) => ({...person,age:person.age+1})

birthday({name:"rags",age:24})

// HOF
const arr = [7,11,12,13,8]

const lessThan10 = num => num<10
const result = arr.filter(lessThan10)

const incrementByTwo = (num) => num+2
arr.map(incrementByTwo)



// sun of odd no

[1,3,5,2,22,11,9].filter(num => num%2 !== 0).reduce((acc,curr) => acc+curr,0);

const oddSum = (acc,curr) => curr%2 === 0 ? acc :acc+curr
[1,3,5,2,22,11,9].reduce(oddSum,0)


// return object with sum of odd and even no
const returnObj = (acc,curr) => curr%2 === 0 ? {...acc, even : acc.even + curr} : {...acc, odd : acc.odd + curr}
console.log([1,3,5,2,22,11,9].reduce(returnObj,{even : 0 , odd: 0}))

// function currying
const giveYourName = (name) => (msg) => `${msg} ${name}`
giveYourName('tanay')('hello')

// composition
const giveYourName = (msg) => `${msg} Ragini`
const giveYourid = (msg) => `${msg} 231`

const give = (msg) => giveYourid(giveYourName('hey'))

/************************************Home Work functional programming************ */
// 1.
const arr= [1,3,5,2,22,11,9]

const oddSum = (acc,curr) => {
    if(curr%2 !== 0)
        acc = acc+curr
    return acc
}
arr.reduce(oddSum,0)

// 2.
const arr= [1,3,5,2,22,11,9]

const sumAtOddIndexes = (acc,curr,index) => {
    if(index%2 !== 0)
        acc+=curr;
    return acc;
}
arr.reduce(sumAtOddIndexes,0)

// 3
const arr= [1,3,5,2,22,11,9]

const MaxInArray = (max,curr) => {
    if(curr > max)
        max = curr;
    return max
}

arr.reduce(MaxInArray,arr[0])

// 4.
const arr= [1,3,50,2,22,40]
arr.filter(x => x%10 === 0)

// 5
const arr= [1,3,5,2,22,11,9]
const oddEvenOperation = x => x%2 === 0 ? x-1 : x+1
arr.map(oddEvenOperation)

// 6



// 7
const str = ['apple','orang','mango','papaya']

const noOfStringWithEqualCharacter = (acc,curr) => {
    if(acc[curr.length])
        acc[curr.length]+=1;
    else
        acc[curr.length] = 1;
    return acc;
}

const noOfStringWithEqualCharacter2 = (acc,curr) => {
    if(acc[curr.length]){
        let l = curr.length;
        return {...acc , l: acc.l +1}
    }
       
    else{
        let l = curr.length;
        return {...acc,l : 1}
    }
      
}
str.reduce(noOfStringWithEqualCharacter,{})


// 8
const str = ['apple','orng','mango','papaya']

str.reduce((acc,curr) => {
    let vowel = false
    for(let i=0 ; i< curr.length;i++){
        if(curr[i] == 'a'){
            vowel = true;
            break;
        }
    }
    if(vowel == true)
        acc.push(curr)
    return acc


},[])

//9
const str = ['apple','orang','mango','papaya']
str.reduce((acc,curr) => {
    acc[curr] = curr.length
    // return {...arr,curr : curr.length}
    return acc
},{})



//last question
const increment = num => num+1;
const square = num => num*num;
const reducer = (acc,curr) => curr(acc);

const compose = (...arr) => (num) => arr.reduce(reducer,num)

const incrementTheSquare = compose(increment,square,increment);
incrementTheSquare(2)
