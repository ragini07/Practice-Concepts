const time = document.getElementById("time");

time.innerHTML = getTime();

const getTime = () => {

    let currentTime = new Date();
    
    let timer = {
        ext : '',
        hr : currentTime.getHours(),
        min : currentTime.getMinutes(),
        sec : currentTime.getSeconds()
    }
    if(timer.hr > 12){
        timer.hr -= 12;
        timer.ext = 'PM'
    }else{
        timer.ext = 'AM'
    }
    if(timer.hr < 10)
        timer.hr = '0'+timer.hr;
    if(timer.min < 10)
        timer.min = '0'+timer.min;
    if(timer.sec < 10)
        timer.sec = '0'+timer.sec;
   
    return timer.hr + ":" + timer.min + ":" + timer.sec + " " + timer.ext;
}

var intervalId  = setInterval(() => {
   time.innerHTML = getTime();
},1000)

