//object property shorthand

const myName = "ragini";
const userAge = 25;

const obj = {
    myName,
    age : userAge,
    place : "Kolkata"
}

console.log(obj)

//object destructuring
const product = {
    label : "notebook",
    price : 5,
    stock : 20,
    salePrice : undefined,
   // rating : 5.2
}
// default property would be shadowed by normal property
// in order to change name of properties syntax is label : priceLabel
const {label : priceLabel , stock , rating = 4} = product;
console.log(priceLabel);
console.log(stock);
console.log(rating);

//destructuring in function parameter
const transaction = (type,{label,stock})=>{
    console.log(label,stock);
}
transaction('order',product)


//default function parameter
const greeter = (name = 'user',age)=>{
        console.log('Hello ' + name);
}

greeter();
greeter('Ragini')



//destructing
var arr=[2,3,4,5];

const [first,second,...rest] = arr;
console.log(rest)

var person = {
    name :"ragini",
    place : "Kolkata"
                }
var {name,place : city} = person;
console.log(city)


function multiply(x){
    return x*2;
}

multiply(3);

const value = (x) =>  x*2;
console.log(value(3))