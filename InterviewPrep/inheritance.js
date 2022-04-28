const person = {
    firstName : "Ragini",
    age : 20,
    getDate :  function(){
        console.log(this.firstName+" "+this.age+" "+this.lastName)
    }
  }
const person1 = {
    firstName : "Kunal",
    lastName : "kumar"
  }

//when key of obj is accessed which is not there in object then its created as own propety og object
console.log(person.color)
person.color = 'black'
console.log(person)

// person.__proto__ is an Object.prototype 
// person.__proto__.__proto__ is null 
// that is why everything jn JS is an object as in prototypical inheritance chaiing 
// evrything ends up as Object.prototype =>  null


                    /*       prototypical inheritance     */
person.getDate()
//never do this we shud not directly change prototype ,is cause perf issue
person.__proto__ = person1
console.log(person.lastName)
person.getDate()