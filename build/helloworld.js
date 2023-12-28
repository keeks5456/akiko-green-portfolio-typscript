"use strict";
let message = "Hello world";
console.log(message);
function greet(person, date) {
    // console.log("Hello " + person.toUpperCase() + " today is " + date + "!" )
}
greet("andrew", Date());
let myName = "Alice";
function getFavNum() {
    return 23;
}
const names = ["alice", "greg", "jane"];
names.forEach(function (s) {
    // console.log(s.toLocaleUpperCase())
});
names.forEach((name) => {
    // console.log(name.toUpperCase())
});
function printName(obj) {
    // console.log(obj.first + obj.last);
}
printName({ first: "greg" });
printName({ first: "greg", last: "boob" });
//union type
function printId(id) {
    console.log(`Your id is ${id}`);
}
printId(292);
printId("Sadat/Sana");
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
