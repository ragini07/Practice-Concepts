const Obj = {
    name : "ragini",
    city : "kolkata",
    getData : function (age,profession){
        console.log(this)
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
// Obj.getData.call(this,20,"engineer")

// Obj.getData.apply(obj1,[20,"engineer"])

// let myFunct = Obj.getData.bind(obj1,20)
// myFunct('doctor')


