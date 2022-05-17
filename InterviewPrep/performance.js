/*************Memoization******************* */


const sum = (n) => {
    let total =0 ;
    for(i=1;i<=n;i++){
        total += n
    }
    return total
}

console.time()
console.log("First Call",sum(100))
console.timeEnd()

console.time()
console.log("Second Call",sum(100))
console.timeEnd()




// const memoize = (funct) => {
//     let cache = {}
    
//     return (n) => {
//         if(cache[n]){
    
//             return cache[n];
//         }

//         let result = funct(n);
//         cache[n] = result;
//         return result
//     }
// }

// console.time()
// const memoizedSum = memoize(sum);
// console.log("First Call",memoizedSum(100))
// console.timeEnd()

// console.time()
// console.log("Second Call",memoizedSum(100))
// console.timeEnd()







