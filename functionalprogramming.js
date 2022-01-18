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






