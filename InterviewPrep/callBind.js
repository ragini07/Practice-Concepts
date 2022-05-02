const Obj = {
    name : "ragini",
    city : "kolkata",
    getData : (age=12,profession="doctor") =>{
        console.log(this === window)
        console.log(this.name + " " + this.city + " " +age+ " " +profession)
    }
}
const obj1 = {
    name : "kunal",
    city : "banglore"
}


//implicit binding
Obj.getData()

//explicit binding
// Obj.getData.call(obj1,20,"engineer")
// Obj.getData.apply(obj1,[20,"engineer"])

// let myFunct = Obj.getData.bind(obj1)


