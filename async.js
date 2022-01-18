//when a function returns some data after asynchronous operation..how its handled


const geoCode =  (address,callbackFunct)=>{
    setTimeout(()=>{
        const data={
            name : "Ragini",
            place : "Jamshedpur"
        }
       // return data;
        callbackFunct(data);
    },2000)
   
}

// const userData = geoCode("Kolkata");
// console.log(userData);

geoCode("Kolkata",(data)=>{
    console.log(data);});


const add = (a,b,callback)=>{
    setTimeout(()=>{
        let c = a+b;
        callback(c);
    },2000)
}
add(2,4,(sum)=>{
    console.log(sum)
})