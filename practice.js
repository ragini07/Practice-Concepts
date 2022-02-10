// const colorConfig={
//     red:true,
//     blue:false,
//     green:true
// }
// const color=["pink","red","blue"];
// console.log(colorConfig.color[1]);



/*********************************SCOPE FOR let,const and var******************* */


// console.log("a: ",a);    //a is in TDZ ---error
// console.log("b: ",b);
// let a = 10;
// var b = 10;
// // var b = 20;
// // let a =20;                  //'a' has already been declared
// console.log("a: ",a);       // a in script scope
// console.log("b: ",b);       //b in global scope

// function checkScope(){
//     let a = 30;
//     var b = 30;
//     console.log("in function")
//     console.log("a: ",a);   //a in local scope (block scoped)    
//     console.log("b: ",b);   //b in local scope of function
// }

// checkScope()

// {
//     let a= 20;
//     var b= 20;
//     console.log("in Block")
//     console.log("a: ",a);    //a is in block scope
//     console.log("b: ",b);     //b in global scope
// }
// console.log("a: ",a);       
// console.log("b: ",b); 


//A variable assigned but not declared will look for a scope to attach itself to. 
//That means it will traverse up the food-chain of scope until a variable with the same name is found. 
//If none is found, it will be attached to the top-level scope (which is commonly referred to as global).

// let a = 100
// function App() {
//   a = 42
//   console.log('1', a)
// }

// App()





// var x = 0; // Declares x within file scope, then assigns it a value of 0.

// console.log(typeof z); // "undefined", since z doesn't exist yet

// function a() {
//   var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

//   console.log(x, y); // 0 2

//   function b() {
//     x = 3; // Assigns 3 to existing file scoped x.
//     y = 4; // Assigns 4 to existing outer y.
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//            // (Throws a ReferenceError in strict mode.)
//     p = 8;
//     // var p= 8;
//   }

//   b(); // Creates z as a global variable.
//   console.log(x, y, z,p); // 3 4 5
// }

// a(); // Also calls b.
// console.log(x, z);     // 3 5
// console.log(typeof y); // "undefined", as y is local to function a


/*****************************Template Literals******************************* */

// const checkForOdd = n => n%2 !== 0
// console.log(`${checkForOdd(8) ? 'odd' : 'even'}`)


/**************************Build questions*************** */

//Operator,branching and loops
//1.

// const sum = (...arr) => {
//     return arr.reduce((acc,curr) => {
//         acc+=curr;
//         return acc
//     })
    
// }


// console.log(sum(5,13,7,2,3))
// //2.

// const findOddEven = num => num%2===0

// console.log(`${findOddEven(8) ? 'even' : 'odd'}`)

// //3.4.5.

// const minMax = (...arr) => {
//     console.log(`"Max " ${Math.max(...arr)}`)
//     console.log(`"Min " ${Math.min(...arr)}`)

// }
// minMax(2,4,8,9)

// //Intermediate
// //1.

// const filteredArr = () => {
//     const arr = []
//     for(let i = 1;i<=100;i++)
//         arr[i-1] = i
//     // console.log(arr)
//     return arr.map((item,index) => {
//         return (item%3 === 0 && item% 5 === 0 ? "fizzbuzz" : (item%3 ===0 ? "fizz" : (item% 5 === 0 ? "buzz" : item)))
//         // if(item%3 === 0 && item% 5 === 0)
//         //  return arr[index] = "fizzbuzz"
//         // else if(item%3 ===0) 
//         //    return arr[index] = "fizz"
//         // else if(item% 5 === 0)
//         //     return arr[index] = "buzz"
//         // else if(item%3 === 0 && item% 5 === 0)
//         //     return arr[index] = "fizzbuzz"
//         // else
//         //     return item
//     })



    
// }
// console.log(filteredArr())

// //2.

// const printStar = () =>{

//     for(let i=0;i<5;i++){
//         for(let j=0;j<i+1;j++)
//             console.log('*')
//         console.log("\n");
            
//     }
// }
// printStar()

// //3.

// const table = num => {
//     for(let i =1;i<=12;i++){
//         console.log(num*i)
//     }
// }


// table(5)

// //4.
// //iteration

// const fibo = n => {
//     const arr = []
//     let a = 0,b=1,c;
//     arr.push(0,1);

//     for(let i=2;i<n;i++)
//     {
//         c=a+b;
//         arr.push(c);
//         a=b;
//         b=c;
       
//     }
//     console.log(arr)
    
// }

// fibo(2)

// //recursion
// const fibonacci = n => {
//     if(n===0)
//         return 0
//     else if(n===1)
//         return 1
//     return fibonacci(n-1) + fibonacci(n-2)
       
// }

// const fibonacciSeries = n => {
//     const arr = []
//     for(let i=0;i<n;i++){
//        arr.push(fibonacci(i))
//     }
//     console.log(arr)
// }
// fibonacciSeries(7)

// //5.
// //iteration
// const factorial = num => {
//     let factorial=1;
//     if(num === 0)
//         return 1;
    
//     for(let i=1;i<=num;i++)
//         factorial*=i
//     return factorial
     
// }

// console.log(factorial(0))

// //recursion

// const factorialRecursion = n => {
//     //Base Case
//     if(n === 0)
//         return 1
//     return n*factorialRecursion(n-1)
// }

// console.log(factorialRecursion(6))

// //6.
// const prime = num => {
//     for(let i = 2;i<Math.sqrt(num);i++)
//     {
//         if(num%i === 0)
//             return "Not prime"
//     }
//     return "prime"
// }
// console.log(prime(5))

// //7.
// const checkDay = (day) => {
//     day = day.toLowerCase()
//     if(day === 'monday' || day === 'tuesday' || day === 'wednesday')
//           return `${day} is a weekday`
//     else
//        return `${day} is a weekend`
    

// }
// console.log(checkDay('Monday'))


/************************Functions********************** */
//1.
// const pow = (a,b) => Math.pow(a,b)
// console.log(pow(2,3))
// //2.
// const hexagonArea = (s) => 3*s*s*Math.sqrt(3)/2
// console.log(hexagonArea(10))
// //3.
// //method 1
// const noOfWords = (str) => {
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i] === ' ')
//             count++
//     }
//     return(count+1)

    
    
// }
// console.log(noOfWords('We are neo grds'))

// //method 2
// console.log("dsds")
// const noofwords = str => str.split(' ').length
// console.log(noofwords('my name is ragini singh'))

// //4.
// const minMax = (...arr) => {
//     // console.log(`"Max " ${Math.max(...arr)}`)
//     // console.log(`"Min " ${Math.min(...arr)}`)
//     arr.reduce((acc,curr) => {
//         if(curr<acc)
//             return curr
//         return acc
//     },arr[0])

// }
// minMax(2,4,8,9)

// //Medium
// //1.
// const arrayLength = arr => arr.length
// console.log(arrayLength([2,3,4,5,6]))

// //2.
// const findIndexOf = (arr,num) => arr.indexOf(num)
// console.log(findIndexOf([1,6,3,5,8,3], 3))

// const findLastIndexOf = (arr,num) => arr.lastIndexOf(num)
// console.log(findLastIndexOf([1,6,3,5,8,3], 3))

// const findAllIndexOf = (arr,num) => {
//     //can use forEach or for loop
//     const indexArray = arr.reduce((acc,curr,index) => {
//         // if(curr === num)
//         //     acc.push(index)
//         // return acc
//         return curr=== num ? [...acc,index] : acc
        
//     },[])
//     return indexArray.length > 0 ? indexArray : "Not found"
// }

// console.log(findAllIndexOf([1,6,3,5,8,3], 3))


// //3.
// const replace = (n1,n2,arr) => {
//    return arr.map((item) => {
//          return item === n1 ? n2 : item
       
//     })
// }

// console.log(replace(5, 10 ,[1,5,3,5,6,8]))

// //4.
// const mergeArray = (arr1,arr2) => {
//     // return [...arr1,...arr2]
//     return arr1.concat(arr2)

// }
// console.log(mergeArray([1,3,5], [2,4,6]))

// //5.

// const characterAt = (str,index) => {
//     return str.charAt(index)
// }
// console.log(characterAt("neoGcamp", 3))

// //6.

// const minDate = (date1,date2) => {
//     const date1Arr = date1.split('/')
//     const date2Arr = date2.split('/')
//     const Date1 = new Date(date1Arr[2],date1Arr[1],date1Arr[0])
//     const Date2 = new Date(date2Arr[2],date2Arr[1],date2Arr[0])
//     // const tryds = new Date('11/01/22')
//     // const [month1, day1, year1] = [Date1.getMonth(), Date1.getDate(), Date1.getFullYear()];
//     // const [month2, day2, year2] = [Date2.getMonth(), Date2.getDate(), Date2.getFullYear()];


//     //we can convert the Date into a numeric value by using the getTime() function. 
//     //By converting the given dates into numeric values we can directly compare them
//     if(Date1.getTime() < Date2.getTime() )
//         return date1
//     return date2

//     // if(year1<year2)
//     //    return date1
    
//     // else if(year2<year1)
//     //    return date2
//     // else{
//     //     if(month1<month2)
//     //         return date1
//     //     else if(month2<month1)
//     //         return date2
//     //     else{
//     //         if(day1<day2)
//     //             return date1
//     //         else 
//     //             return date2
            
//     //     }
//     // }
   
// }

// console.log(minDate('02/05/2021', '24/01/2021'))

//Advanced
//1.
// const encodeString = (str,n) => {
//     for(let i=0;i<str.length;i++){
//         console.log(String.fromCharCode(str.charCodeAt(i) + 2))
//     }
// }
// encodeString("neogcamp", 2)

//2.

// const toSentenceCase = (str) => {
//     // let arr = str.split(" ")
//     // for(let i=0 ; i<arr.length ; i++){
//     //     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
            
//     // }
//     // let convertedStr = arr.join(" ")
//     // console.log(convertedStr)

//     let str1 = ""
//     str = str[0].toUpperCase() + str.substr(1)
//     console.log(str)
//     for(let i=0;i<str.length;i++){
//             if(str[i] === " ")
//                 str = str.substr(0,i+1)+str[i+1].toUpperCase()+str.substr(i+2)
//     }
//     console.log(str)
// }
// toSentenceCase('we are neoGrammers')

// const toSentenceCase = (str) => {

//     var str1 = str
//      str1[0] = str[0].toUpperCase()
//     console.log(str[0])
//     for(let i=0;i<str.length;i++)
//         {
//             if(str[i] === " ")
//                 str1[i+1] = str[i+1].toUpperCase()
//             else
//                 str1[i] = str[i]
//         }
//     console.log(str1)
// }

// toSentenceCase('qe are neoGrammers')

//3.

// sortArray([100,83,32,9,45,61])

//4.

// reverseCharactersOfWord('we are neoGrammers')
//********************************interview questions akansha**********************//
//1.
// const sum = (a,b) => a+b;
// console.log(sum(1,'2'))

//2.
// function consoleNum(){
//     var isWorkShop = true;
//     var num =10;
//     if(isWorkShop){
//         let num =20;
//         console.log(num)
//     }
//     console.log(num)
// }
// consoleNum()

//3.
// let a=null;
// let b;

// console.log(a==b)
// console.log(a===b)
// console.log(0 == "")
// console.log(0 === "")
// console.log(typeof(b))
//why type of null is an object

//4.
// {
//     var x=2;
//     var x=3;
//     console.log(x)

// }
// {
//     let y=2;
//     let y=3;
//     console.log(y)
// }

//5.
// const obj = {name:"ragigi",place:"jsr"}
// obj.name="shashank"

// obj={}
// console.log(obj)

//6.
// let arr1 = [4, 5, 6];
// //Convert this array to [1, 2, 3, 4, 5, 6, 7, 8]
// let arr2 = [1,2,3,...arr1,7,8]
// console.log(arr2)

//7.
// let str = [..."apple"]
// console.log(str)

//8.
// var a=2,b=3;
// //swap using es6
// var [b,a] = [a,b]
// console.log(a,b)

//9.
// var arr1 = [1,2]
// var arr2 = [arr1 , [3,4]] //[[1,2] ,[3,4]]
// var arr3 = [...arr2,[7,8]]
// console.log(arr3)

// 10.

// const arr = [1,3,5,8,10,11,16]

// const getOddArray = x => x%2 === 0 ? x+1 : x;
// arr.map(getOddArray)


/*******************notion assigment****************** */
// 1
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const getOddArray = x => x%2 === 0 ? x+1 : x;

// console.log(arr.map(getOddArray))

// 2
// const family = [
//     {
//       name    : 'Tanay',
//       haveCycle : true
//     },
//     {
//       name     : 'Akanksha',
//       haveCycle : false
//     },
//     {
//       name     : 'Tanvi',
//       haveCycle : true
//     },
//       {
//       name     : 'Kanak',
//       haveCycle : false
//     }
//   ];


// console.log(family.filter(member => member.haveCycle).map(member => member.name))
// console.log(family.reduce((acc,curr) => curr.haveCycle ? [...acc,curr.name] : acc,[]))
// //doubt whats the differnnce here check in react notes
// //doubt in line 562 [...acc]
// const newarr = family.reduce((acc,curr) => {
//     if(curr.haveCycle)
//         acc.push(curr.name)
//     return acc

// },[])
// console.log(newarr)

// 3
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// const evenNoLessThenEight = arr => {
//     console.log(arr.filter(x => x%2 === 0 && x<=8))
//     console.log(arr.reduce((acc,curr) => curr%2 === 0 && curr<=8 ? [...acc,curr] : acc,[]))
// }

// evenNoLessThenEight(arr)

// 4
// const arr = ['eat', 'sleep', 'repeat', 'code'];

// const moreThen5Character = arr => {
//     console.log(arr.filter(x => x.length>5))
//     console.log(arr.reduce((acc,curr) => curr.length>5 ? [...acc,curr] : acc,[]))
// }
// moreThen5Character(arr)

// 5
// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// const sumGreaterThan50 = arr => arr.reduce((acc,curr) => curr>50 ? acc+curr : acc,0)

// console.log(sumGreaterThan50(arr))

// 6
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// const evenProduct = arr => arr.reduce((acc,curr) => curr%2 === 0 ? acc*curr : acc,1)
// console.log(evenProduct(arr))

// 7
// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ]

// const ageSum = arr => arr.reduce((acc,curr) => acc+curr.age,0)
// console.log(ageSum(arr))


// 8
// const arr = ["You", "all", "are", "rockstars"];

// console.log(arr.reduce((acc,curr,index) => ({...acc,[index] : curr}) ,{} ))

// 9
// const arr = [
// 	{
// 		name: "Apple"
// 	},
// 	{
// 		name: "Mango"
// 	},
// 	{
// 		name: "Potato"
// 	},
// 	{
// 		name: "Guava"
// 	},
// 	{
// 		name: "Capsicum"
// 	}
// ]
//can use map

// console.log(arr.reduce((acc,curr) => curr.name.length>5 ? [...acc,{...curr,type : 'vegetable'}]:[...acc,{...curr,type : 'fruit'}],[]))

// 10
// const inventory = [
//     {name: 'fans', quantity: 3},
//     {name: 'chimneys', quantity: 0},
//     {name: 'bulbs', quantity: 5},
//     {name: 'stove', quantity: 1}    
//   ];


// console.log(inventory.filter(x => x.quantity<2))
// console.log(inventory.reduce((acc,curr) => curr.quantity<2 ? [...acc,curr] : [...acc],[]))

// console.log(inventory.reduce((acc,curr) => acc+curr.quantity,0))

// // console.log(inventory.reduce((acc,curr) => curr.quantity === 0 ? {...acc,curr} : acc,{}))
// console.log(inventory.reduce((acc,curr) => curr.quantity === 0 ? curr : acc,{}))


//11
// str = "rags"
// const arr = [...str]

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

// arr.join('-')
// arr.reduce((acc,curr,index,array) => index === array.length-1?[...acc,curr]:[...acc,curr,'-'],[]).join('')

// arr.reduce((acc,curr,index,array) => {
//   if(index === array.length-1)
//     return acc+curr;
//   return acc+curr+'-';
// },'')


//12

// const str = '24345687'
// str.split('').reduce((acc,curr,index,array) => {
//   if(curr%2 ===0 && array[index+1]%2 ===0)
//     return acc+curr+'-'
//   return acc+curr
// },'')


// str.split('').reduce((acc,curr) => {
//   if(curr%2 ===0 && acc[acc.length-1]%2 ===0)
//     return acc+'-'+curr
//   return acc+curr
// },'')


//13
// const toUpperCase = (str) => str.toUpperCase()
// console.log(toUpperCase("neogrammer"))

//14
//use indexof to get vowel


// const isVowel = char => {
//   if(char === 'a' || char === 'e'||char === 'i'||char === 'o'||char === 'u')
//     return true;
//   return false
// }

// const vowelsToUpperCase = str =>  {
//   return [...str].reduce((acc,curr) => isVowel(curr) ? acc+curr.toUpperCase() : acc+curr.toLowerCase(),'')
// }

// console.log(vowelsToUpperCase('neoG'))

//15
// const input = [
//   ['a', 'b', 'c'],
//   ['c', 'd', 'e'],
//   ['e', 'd', 'f'],
// ];

// const flatten =  input.reduce((acc,curr) => [...acc,...curr],[])

//16
// flatten.reduce((acc,curr) => {
//   if(acc[curr])
//       return {...acc , [curr] : acc[curr]+1}
//   return {...acc , [curr] : 1}
// },{})













// const arr = ['eat', 'sleep','repeat', 'code'];

// const checkLength = arr => arr.filter(item => item.length>5)

// console.log(checkLength(arr))


const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

console.log(arr.reduce((acc,curr) => curr>50 ? acc+curr : acc,0))






















// const toggle=(str)=>{
//     let s=str.split('');
//     for(let i=0;i<s.length;i++){
//         if(i&1) s[i]=s[i].toUpperCase();
//     }
//     return s.join('');
// }
// console.log(toggle("weare"));