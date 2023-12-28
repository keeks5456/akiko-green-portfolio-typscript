var message = "Hello world";
console.log(message);
function greet(person, date) {
    // console.log("Hello " + person.toUpperCase() + " today is " + date + "!" )
}
greet("andrew", Date());
var myName = "Alice";
function getFavNum() {
    return 23;
}
var names = ["alice", "greg", "jane"];
names.forEach(function (s) {
    // console.log(s.toLocaleUpperCase())
});
names.forEach(function (name) {
    // console.log(name.toUpperCase())
});
function printName(obj) {
    // console.log(obj.first + obj.last);
}
printName({ first: "greg" });
printName({ first: "greg", last: "bobo" });
//union type
function printId(id) {
    console.log("Your id is ".concat(id));
}
printId(292);
printId("sadad/sdna");
