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
    console.log(s.toLocaleUpperCase());
});
names.forEach((name) => {
    console.log(name.toUpperCase());
});
