const Obj = {
    name : "ragini",
    city : "kolkata",
    getData : function(age=12,profession="doctor"){
        console.log(this.name + " " + this.city + " " +age+ " " +profession)
    }
}
const obj1 = {
    name : "kunal",
    city : "banglore"
}

myFunct1()
//implicit binding
Obj.getData()

//explicit binding
Obj.getData.call(obj1,20,"engineer")
Obj.getData.apply(obj1,[20,"engineer"])

let myFunct = Obj.getData.bind(obj1)
myFunct()

