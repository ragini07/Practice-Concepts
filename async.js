//when a function returns some data after asynchronous operation..how its handled

const { reject } = require("async");

/************************callback function */
const geoCode =  (address,callbackFunct)=>{
    setTimeout(()=>{
        const data={
            name : "Ragini",
            place : "Jamshedpur"
        }
    //    return data;
        callbackFunct(data);
    },2000)
   
}

// const userData = geoCode("Kolkata");
// console.log(userData);

// geoCode("Kolkata",(data)=>{
//     console.log(data);});




// const add = (a,b,callback)=>{
//     setTimeout(()=>{
//         let c = a+b;
//         callback(c);
//     },2000)
// }
// add(2,4,(sum)=>{
//     console.log(sum)
// })


/*************comparing callback and promise ******/

// const doWorkCallback = (callback) => {

//     setTimeout(() => {
//         callback('This is error',undefined);
//         // callback(undefined,[1,2,3]);
//     },2000)
// }


// doWorkCallback((error,result) => {
//     if(error){
//         return console.log("Error",error)
//     }
//     console.log("result",result)
// })




// const doWorkPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // resolve([2,3,5])
//         reject("Oops Error")
//     },2000)
// })

// doWorkPromise.then((result) => {
//     console.log("Success",result);
// }).catch((error) => {
//     console.log("Error",error);
// })



/*******************Promise chaining***************** */
// const add = (a,b) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(a+b)
//         },2000)
      
//     })
// }

// //here we are making async operations using nested promise
// add(2,3).then((sum) => {
//     console.log(sum)
//         add(sum,5).then((sum2) => {
//             console.log(sum2)
//         }).catch((error) => {
//             console.log(error)
//         })
// }).catch((error) => {
//     console.log(error)
// })

// //better way to write same thing
// add(2,3).then(sum => {
//     console.log(sum)
//     //return a promise from here which goes to next then method
//     return add(sum,4)
// }).then( sum2 => {
//     console.log(sum2)
// })
// .catch(e => {
//     console.log(e)
// })


/********************async await ****************/

//undefined is returned from function if we explicitly do not return anything
// const doWork = () => {

// }
// console.log(doWork())

//promise is returned if function is made async
// const doWork = async () => {
//     throw new Error('Something went Wrong')
//     return "Ragini"
// }
// doWork().then(result => {
//     console.log("result",result)
// }).catch(e => {
//     console.log("error",e)
// })







// const add = (a,b) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(a<0 || b<0)
//                 return reject('use positive number')
//             resolve(a+b)
//         },2000)
      
//     })
// }
// const doWork = async () => {
//     //promise chaining
//    const sum1 = await add(2,-3)
//    const sum2 = await add(sum1,5)
//    const sum3 = await add(sum2,5)
//    return sum3
// }
// doWork().then(result => {
//     console.log("result",result)
// }).catch(e => {
//     console.log("error",e)
// })










// const strLength = (name,callback) => {
//     callback(name.length)
// }

// strLength("ragini",(length)=> {
//     console.log(`oh my god its ${length} characters`)
// })



// const willThanosKillMe = (name,cb1,cb2) =>{
//     const length = name.length;
//     if(length%2===0)
//        return cb1()
//     cb2()
// }

// willThanosKillMe("ragini",()=>{console.log("yey I am alive")},()=>{
//     console.log("ahh I died")
// })


// const delayFynction = (msg,delay) => {
//     setTimeout(() =>{
//         console.log(msg)
//     },delay)
// }
// delayFynction("ragini",2000)


// //why its coming undefined if I pass msg as parameter in setTimeout???

// const delayFynction = (msg,delay) => {
//     setTimeout((msg) =>{
//         console.log(msg)
//     },delay)
// }
// delayFynction("ragini",2000)


function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 3000);
    });
  }

  const getLength = async(msg) => {
 
    console.log(await fakeFetch(msg));
  }
 getLength("hello")

// fakeFetch("hurry its success",true)
// .then(data => {
//     console.log(data)
// }).catch(error => console.error(error))


//when we resolve a promise and return something from .then call,its a promise
//IMP
const getServerResponse = (msg) => {
        fakeFetch(msg).then(data =>  data.length)
}
console.log(getServerResponse("rags"))



// const syncCallToServer = (msg1,msg2) => {
//     fakeFetch(msg1).then(data => fakeFetch(msg2)).then(data => console.log(data))
// }
// syncCallToServer("first","second")


// const doWork = async (msg1,msg2) => {
//     try{
//         const data1 = await fakeFetch(msg1)
//         const data2 = await fakeFetch(msg2)
//         console.log(data1,data2)
//     }
//     catch(e){
//         console.error(e)
//     }
// }
// doWork(msg1,msg2)





function delay(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(resolve,ms)
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));


const strLength = (name, cb) => {
  cb(name.length);
  }
  
  strLength("ankur", console.log);


const willThanosKillMe = (name,cb1,cb2) =>  name.length %2 === 0 ? cb1() : cb2()
willThanosKillMe("rags",() => console.log('Yay! I am alive!'), () => console.log('Give my bose speakers and apple headphones to my sister'))

const willThanosKillMe = (name,cb1,cb2) =>  name.length %2 === 0 ? cb1('Yay! I am alive!') : cb2('Give my bose speakers and apple headphones to my sister')
willThanosKillMe("rags",console.log,console.log)

const printmsg = (msg,interval) => {
  setInterval(() => console.log(msg),interval)
}

printmsg("r",1000)


const printmsg = (num,interval) => {
  setInterval(() => console.log(msg),interval)
}

printmsg(5,1000)


for(let i=5;i<=0;i--){
  setInterval(()=>{
    i === 0 ? 'Bang' : console.log(i)},1000);
    
  }

  for(let i=5;i>=0;i--){
    setInterval(()=> i === 0 ? console.log('Bang') : console.log(i),1000);
        }


        
  let i = 1;
setInterval(function() {
  func(i++);
}, 100)