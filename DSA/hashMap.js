//Find whether an array is subset of another array

const checksubset = (arr1,arr2) => {
    let myMap = new Map()
    for(let i=0;i<arr1.length;i++){
        myMap.set(arr1[i],1)
    }
    for(let i=0;i<arr2.length;i++){
        if(!myMap.has(arr2[i])) return false
    }
    return true

}

console.log(checksubset([1, 3, 4, 2, 5, 6],[1,4,23,2]))