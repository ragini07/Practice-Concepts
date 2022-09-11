//Map
const arr = [1,2,3,4];

const output = arr.map((e,i,arr) => {
    return e*2
})
console.log(output)

Array.prototype.myMap =  function(cb){
    let result = [];
    let arr = this;
    for(let i=0;i<arr.length;i++){
        result.push(cb(arr[i]))
    }
   return result
}
const output1 = arr.myMap((e) => {
    return e*2
})
console.log(output1)

//Filter
console.log(arr.filter(e => e>2));

Array.prototype.myfilter = function(cb){
    let result = [];
    let arr = this;
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i]))
            result.push(arr[i])
    }
    return result
}

console.log(arr.myfilter(e => e>2));


//Reduce
console.log(arr.reduce((acc,curr) => {
    return acc+curr;
},0))

Array.prototype.myReduce = function(cb,initialValue) {
    let arr = this;
    let result = initialValue;
    for(let i=0;i<arr.length;i++){
       result = cb(result,arr[i])
    }
    return result

}

console.log(arr.myReduce((acc,curr) => {
    return acc+curr;
},0))

//ForEach

arr.forEach(e => {
    console.log(e*2)
})

Array.prototype.myForEach = function(cb){
    let arr = this;
    for(let i=0;i<arr.length;i++){
        cb(arr[i])
    }
}

arr.myForEach(e => {
    console.log(e*2)
})

//Find
console.log(arr.find(e => e>2))

Array.prototype.myFind = function(cb){
    let arr = this;
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i]))
            return arr[i]
    }
  
}

console.log("myFind",arr.myFind(e => e>2))

//bind

const Obj = {
    name : "ragini",
    city : "kolkata",
    getData : function(age,profession){
        console.log(this.name + " " + this.city + " " +age + " " + profession)
    }
}
const Obj1 = {
    name : "shanky",
    city : "mumbai"
}
const getDetails = Obj.getData.bind(Obj1,21,'engineer');
getDetails();

Function.prototype.myBind = function(){
    
}


const getDetails1= Obj.getData.myBind(Obj1,21,'engineer');




//promise.all

const promise1 = new Promise((resolve,reject) => {
    resolve(3);
})

const promise2 = Promise.resolve('hey');
const promise3 = 5;

Promise.all([promise1,promise2,promise3])
    .then(res => console.log(res))
    .catch(err => console.error(err))

Promise.myAll = function(arr){
    return new Promise((resolve,reject) => {
        let result = [];
        let allCompleted = 0;
        for(let i=0; i<arr.length; i++){
            Promise.resolve(arr[i]).then(res => {
                allCompleted++;
                result[i] = res;
                if(allCompleted === arr.length)
                    resolve(result)         
            }).catch(err => reject(err))

        }
    })
}

Promise.myAll([promise1,promise2,promise3])
    .then(res => console.log(res))
    .catch(err => console.error(err))