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
    // console.log(s.toLocaleUpperCase())
})

names.forEach((name) =>{
    // console.log(name.toUpperCase())
})


function printName(obj: {first:string; last?:string }){ //? means optional
// console.log(obj.first + obj.last);
} 

printName({first: "greg"});
printName({first: "greg", last:"boob"});

//union type
function printId(id: number | string){
    console.log(`Your id is ${id}`)
}
printId(292);
printId("Sadat/Sana")


//type aliases
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });