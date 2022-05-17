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


document.querySelector('#grandparent')
    .addEventListener('click',(e)=>{
       // e.stopPropagation();
        console.log("GrandParent clicked")
    },false); //bubbling

document.querySelector('#parent')
    .addEventListener('click',(e)=>{
      //  e.stopPropagation();
        console.log("Parent clicked")
    },false);

    document.querySelector('#child')
    .addEventListener('click',(e)=>{
       e.stopPropagation();
        console.log("child clicked")
    },false);


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

//@Hoisting concept

    // getName();
    // console.log(x);
    // console.log(getName);
    // var x = 5;


    // function getName(){
    //     console.log("javascript");
    // }   

    //IMP:Arrow function behaves like variable
    /*var getName = ()=>{
        console.log("javascript");
    }*/

    /*var getName = function(){
        console.log("javas");
    }*/ 
    
    //@Hoisting concept ends


//@how function works in JS
/*
    var x=1;
    a();
    b();
    //all same
    console.log(this.x);
    console.log(window.x);
    console.log(x);

    function a(){
        var x=10;
        console.log(x);
    }
    function b(){
        var x=100;
        console.log(this.x);
        //console.log(x);
    }
    */
//@function ends

//@scope chain concept
    // function x()
    // {   var b=10;
    //     y();
    //     function y(){
    //         //console.log(b);
    //     }
    // }
    // //var b=10;
    // x();
    // console.log(b);

//@scope chain concept ends