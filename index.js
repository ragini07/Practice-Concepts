/******************************Namaste JS Season 1 **********************/
/******************************Hoisting **********************/
//show hositing through global and call stack

// console.log(x); 
// var x = 10;
// console.log(x);

// getName();
// getTitle();                 //typeerror

// function getName(){
//     console.log("ragini");
// }

// var getTitle = () => {
//     console.log("singh");
// }


/****************************** How function works **********************/
// var a = 10;
// console.log(a);
// x();
// y();

// function x(){
//     var a = 30;
//     console.log(a);
// }

// function y(){
//     var a = 40;
//     console.log(a);
// }


/****************************** Lexical env and scope chaining **********************/
// function a(){
//     function c(){
//         console.log(b)
//     }
//     c();
// }
// a(); // undefined
// var b =10;
// a(); //10

/****************************** let and const **********************/
//1.
// console.log(a); //ref error ( TDZ )
// let a =10;
// var b =20;

// console.log(a); //10

//2. synatx error - cannot redeclare a in same scope

// let a =10;
// // let a= 20;
// var a= 30;

//3. var can be re dclared
// var a =10;
// var a =20;

/****************************** let and const are block scoped **********************/
// {
//     var a=10;
//     let b = 20;
//     const c =30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

/****************************** shadowing **********************/

// Shadowing in block

// var a =10;
// let b = 20;
// const c =30;
// {
//     var a = 20;
//     let b = 30;
//     const c =40;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Shadowing in function

// var a =10;
// let b = 20;
// const c =30;
// function x(){
//     var a = 20;
//     let b = 30;
//     const c =40;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// x();
// console.log(a);
// console.log(b);
// console.log(c);

//illegal shadowing
//since let and var both are in global scope

// let a =10;
// {
//     var a =20;
// }
 
//to solve this

// let a =10;
// function x(){
//     var a =20;
// }


/****************************** closures **********************/

//function bundled with its lexical scope

// //1.
// function x(){
//     var a =10;
//     function y(){
//         console.log(a);     //y has closure of x
//     }
//     y();
// }
// x();

// //2.
// function x(){
//     var a =10;
//     return function y(){
//         console.log(a);     
//     }
// }
// const z = x();  //execution context of z is deleted
// z();     // lexical scope of y i.e x is sustained

// //3.
// function t(){
//     var b = 20;
//     function y(){
//         var c = 30;
//         return function x(){
//             console.log(b,c)
//         }
//     }
//     return y();
// }
// t()();

//4. adv of closure data hiding . Here count is not in global scape and cannot be modified from outside
// function counter(){
//     var count = 0;
//     return function increment(){
//         count++;
//         console.log(count)
//     }
// }
// counter()();

//better way to increment and decrement is using a constructor

// function counter1(){
//     var count =0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement = function(){
//         count--;
//         console.log(count);
//     }
// }
// var a = new counter1;
// a.increment();
// a.decrement();

//smart garbage collection in new browser/v8 engine

// function x(){
//     var a =10 , b =20; 
//     return function y(){
//         console.log(a); //add debug point here in closure only a is present.in console b gives ref error as it is garbage collected
//     }
// }
// x()();



/****************************** settimeout and closure **********************/

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("ragini")
// }
// x()

//issue

// function y(){
//     for(var i = 1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// }
// y()

//let solution

// function z(){
//     for(let i = 1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// }
// z()

//var solution

// function t(){
//     for(var i = 1;i<=5;i++){
//         function solve(i){
//              setTimeout(function(){
//                  console.log(i)
//              },i*1000)      
//         }
//     solve(i);
//     }
   
// }
// t()

/****************************** settimeout example **********************/
//1.
// console.log("start");

// setTimeout(function cb(){
//     console.log("callback");
// },0)

// console.log("end");

// //2. trust issue with setTimeout

// console.log("start");

// setTimeout(function cb(){
//     console.log("callback");
// },5000)

// let startDate =  new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
//     endDate = new Date().getTime();
// }

// console.log("end");

/****************************** map,filter and reduce **********************/

// const users = [
//     {firstname : "rags" , lastname : "singh" , age : 26},
//     {firstname : "shanky" , lastname : "sinha" , age : 57},
//     {firstname : "abhi" , lastname : "sharma" , age : 37},
//     {firstname : "ankit" , lastname : "gupta" , age : 26},
//     {firstname : "ankita" , lastname : "agarwal" , age : 26},
// ]
// //expected output {26 : 3 , 57 : 1 , 37:1}
// const result = users.reduce((obj , curr) => {
//     //key in obj 
//     //obj.hasOwnProperty(key)
//         if(obj[curr.age]){
//             obj[curr.age]++;
//             return obj
//         }      
//         else { 
//              obj[curr.age] = 1;
//             return obj;
//            }
// },{})
// console.log("result",result)

// //expected output ['rags', 'ankit', 'ankita']
// const output = users.filter(({age}) => age < 30).map(user => user.firstname)
// console.log(output)

// const output1 =  users.reduce((arr,curr) => {
//     if(curr.age < 30)
//         arr.push(curr.firstname);
//     return arr;
// },[])
// console.log(output1)

/****************************** first class function **********************/
//diff between statemnet and expression is in hositing.Function expression is hoisted but treated as variable hince its undefined
//1. function statement aka function declaration
// a();
// b(); 
// function a(){
//     console.log("a")
// }

// //2. function expression

// var b = function(){
//     console.log("b")
// }
// a();
// b(); 

//3.anonymous function - function without name.It cannot be used as statement.Can only be used as expression
//cannpt be used as below
// function () {

// }

//4.Named function expression - function with a name used as expression
var b = function xyz(){
    console.log("xyz", xyz) 
}
b();
xyz(); // ref error xyz is not defined ( as its not there in global space 

//5.First class function/citizens - ability of function to be used as value ,to be passed as arg from another function , to be returned from a function

/******************************call,bind,apply concept **********************/

// let printUser = function (profession,yr){
//     console.log(this.name+" from "+this.city + " is an " +profession+"since"+" "+yr+"years");
// }

// let user = {
//     name : "Ragini",
//     city : "Jamshedpur"
// }
// let user1 = {
//     name : "Rahul",
//     city : "Kolkata"
// }
// printUser.call(user,"enghineer",2);
// printUser.call(user1,"doctor",5);

// printUser.apply(user,["engineer","6"]);

// let copyfunction = printUser.bind(user,"engineer");
// console.log(copyfunction);
// copyfunction();


/*******************Polyfill for bind method************************* */

// let user={
//     firstname: "Ragini",
//     lastname: "singh"
// }
// function printName(city,town,state){
//     console.log(this.firstname+" "+this.lastname+" "+city+" "+town+" "+state);
// }

// printName.call(user,"jamshedpur","sakchi","jharkhand");



// Function.prototype.mybind = function (...args){
//     //this has printName in it
//     let func = this;
//     params = args.slice(1);
//     console.log(func);
//     return function(...args2){
//         func.apply(args[0],[...params,...args2]);
//         //why not this could be used
//         //user.func();
//     };

//         //return func;    
//  }


// let printUserName2 = printName.mybind(user,"kolkata","new town");
// console.log(printUserName2);
// printUserName2("west bengal");

/**************************Function currying******************************/
//1.using bind method

// let multiply = function(x,y){
//     return x*y;
// }

// let multiplyByTwo = multiply.bind(this,2);
// console.log(multiplyByTwo);
// console.log(multiplyByTwo(3));

// let multiplyByThree = multiply.bind(this,2);
// console.log(multiplyByThree);
// console.log(multiplyByThree(3));

//2.using closure

// let multiply = function(x,y){
//     return x*y;
// }
// console.log(multiply(2,5));

// let multiply2 = function(x){
//     return function(y){
//         return x*y;
//     }
// }
// console.log(multiply2(2)(5));

/******************************Event bubbling and capturing***************************/
//if false------Event bubbling
//if true-------Event capturing
//Event bubbling->Start at target element and move outwards
//Event capturing->start from outerwards and end at target element


// document.querySelector('#grandparent')
//     .addEventListener('click',(e)=>{
//        // e.stopPropagation();
//         console.log("GrandParent clicked")
//     },false); //bubbling

// document.querySelector('#parent')
//     .addEventListener('click',(e)=>{
//       //  e.stopPropagation();
//         console.log("Parent clicked")
//     },false);

//     document.querySelector('#child')
//     .addEventListener('click',(e)=>{
//        // e.stopPropagation();
//         console.log("child clicked")
//     },true);


    /*********************** Event Delegation************************/

    // document.querySelector('#category')
    //     .addEventListener('click',(e)=>{
    //         console.log(e.target.tagName);
    //         console.log(e.target.id);
    //         //console.log(e.target.value);
    //         if(e.target.tagName === 'LI'){
    //             window.location.href = "/"+e.target.id;
    //         }
    //     })

/*********************** Promise ************************/

// const GITHUB_API = 'https://api.github.com/users/ragin07';

// const data = fetch(GITHUB_API);
// console.log(data);
// data.then((res) => console.log(res))

/*********************** Promise Consumer Producer ************************/
//consumer

// const cart = ['shoe','pencil','book'];

// const promise = createCart(cart); //createCart will produce a promise

// promise.then((orderId) => console.log("orderID",orderId))
//         .catch(err => console.log(err.message));
      

// //producer

// function createCart(){
//     return new Promise(function(resolve,reject){
//         if(!validateCart()){
//            const err = new Error("cart is invalid");
//            reject(err)
//         }
//         const orderId = "7383"; //get from db
//         resolve(orderId);
//      })
// }

// function validateCart() {
//     return true
// }

/*********************** Promise Chaining************************/
//if a then method is written after catch it will definitely be executed

// const Cart = ['shoe','pencil','book'];

// createCart()
//     .then(orderId => {
//         console.log("orderId",orderId)
//         return paymentInfo(orderId)
//     })
//     .then(paymentInfo => {
//         console.log("paymentInfo",paymentInfo)
//        return orderSummary(paymentInfo)
//     })
//     .then(orderSummaryMsg => {
//         console.log("orderSummaryMsg",orderSummaryMsg)
//     })
//     .catch(err => console.log("Error",err.message));

// function createCart(){
//     return new Promise(function(resolve,reject) {
//         if(!validCart()){
//             const err = new Error("cart invalid");
//             reject(err);
//         }
//         let orderId ="1234"
//         resolve(orderId)
            
//     })
// }

// function paymentInfo(orderId){
//     return new Promise(function(resolve,reject) {
//         resolve(`payment successful for ${orderId}`)
//     })
// }

// function orderSummary(orderId){
//     return new Promise(function(resolve,reject) {
//         resolve(`order summary genearted where ${orderId}`)
//     })
// }

// function validCart(){
//     return true
// }


/*********************** Promise API************************/

// const P1 = new Promise(function(resolve,reject){
//     // setTimeout(() => resolve("P1 sucess"),3000);
//     setTimeout(() => reject("P1 fail"),3000);
// })

// const P2 = new Promise(function(resolve,reject){
//     //  setTimeout(() => resolve("P2 sucess"),2000);
//     setTimeout(() => reject("P2 fail"),2000);
// })

// const P3 = new Promise(function(resolve,reject){
//     // setTimeout(() => resolve("P3 sucess"),4000);
//     setTimeout(() => reject("P3 fail"),4000);
// })

//Promise.all returns the array of result if all success , else return the error of the promise rejected

// Promise.all([P1,P2,P3])
//     .then(result => console.log("result",result))
//     .catch(err => console.error("err",err))


//Promise.allSettled always returns the array of result of promise(resolve/reject)

// Promise.allSettled([P1,P2,P3])
//     .then((result) =>  console.log("result",result))
//     .catch(err => console.log("error",err))


//settle seeking race
//returns the result of first settled promise(resolved/rejected)

// Promise.race([P1,P2,P3])
//     .then(result => console.log("result",result))
//     .catch(err => console.log("err",err))


//success seeking promise
//returns first promise that is resolved , if non resolved returns aggregate error[e1,e2,e3]

// Promise.any([P1,P2,P3])
//     .then(result => console.log("result",result))
//     .catch(err => {
//         console.log("err",err)
//         console.log("err",err.errors) //aggregate error array
//     })

/*********************** async/await ************************/

//async function always returns a promise
//await can only be used inside an async function 
//await is always used before a promise

const P1 = new Promise(function(resolve,reject)  {
    setTimeout(() => {
        resolve("promise 1 resolved")
    },20000)
})

const P2 = new Promise(function(resolve,reject)  {
    setTimeout(() => {
        resolve("promise 2 resolved")
    },10000)
})

//when await line of code is reached , then function handlePromiseUsingAsyncAwait is suspended( move to microtask queue , removed from callStack)
//once promise is settled , handlePromiseUsingAsyncAwait will come back to call stack and executed from the line it left.
//it doesnt block the callstack

async function handlePromiseUsingAsyncAwait () {
    console.log("test 1")

    const promise1Res = await P1;
    console.log(promise1Res)
    console.log("test2")

    //time tickles from start of handlePromiseUsingAsyncAwait  function
    //by the concept of hoisting , the const variable are hoisted and reamin in script scope and promise starts settling
    const promise2Res = await P2;
    console.log(promise2Res)
    console.log("test3")
}
handlePromiseUsingAsyncAwait()

// function handleBasicPromise() {
//     P1.then(res => console.log(res))  //this promise will be registered and sent to microtask queue , rest handleBasicPromise method will remain in call stack and will keep on executing
//     console.log("test4")
// }
// handleBasicPromise();

//async await using actual promise

// fetch('')
//     .then(res => res.json())
//     .then(val => console.log(val))

// async function handleActualPromise() {
//    const res =  await fetch('');
//    const value = await res.json();

// }
// handleActualPromise

/*********************** this ************************/
