let message: string = "Hello world";
console.log(message);


function greet(person: string, date: string){
    // console.log("Hello " + person.toUpperCase() + " today is " + date + "!" )

}

greet("andrew", Date())

let myName: string = "Alice"

function getFavNum(): number {
    return 23;
}

const names = ["alice", "greg", "jane"]
names.forEach(function(s){
    console.log(s.toLocaleUpperCase())
})

names.forEach((name) =>{
    console.log(name.toUpperCase())
})