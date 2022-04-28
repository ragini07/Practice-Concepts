//check if string is panagram
//1.
const checkStrForPanagram = str => {
    let flag = false
    let strLower = str.toLowerCase()
    for(let i = 97 ;i<=122 ;i++){
        for(let j =0 ;j<strLower.length ;j++){
            if(strLower[j] === String.fromCharCode(i)){
              
                flag = true;
                break;
            }
        }
        if(flag === false)
            return "not panagram"
        flag = false
    }
    return "its pangram"
}
console.log(checkStrForPanagram('A ick brown fox jumps over the little lazy dog'))


//2. tokrennize string

const tokenizeStr = (str,token) => {
    console.log(str.split(token))
    let arr = []
    let str1 =""
    for(let i=0;i<str.length;i++){
        if(str[i] ===  token){
            arr = [...arr, str1]
            str1 = ""
        }
        else{
            str1 += str[i]
        }
    }
    arr = [...arr, str1]
    console.log(arr)
}


tokenizeStr('Banana and mango','a')

//6.
//Given a string count the number of time each word has occurred in the string

const freqOfWordsInStr = str => {
    let freq = new Map();
    let arr = str.trim().split(" ")
    for(let i =0 ;i<arr.length ;i++){
        if(freq.has(arr[i])){
             freq.set(arr[i],freq.get(arr[2])+1)
        }
        else
            freq.set(arr[i],1)
    }

    console.log(freq)
}

freqOfWordsInStr('Hello from hello to hello')