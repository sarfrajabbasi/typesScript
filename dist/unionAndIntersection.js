"use strict";
// Union types:---------
let myVar;
// valid
myVar = "hello";
myVar = 32;
// Error
// myVar = true
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
const outcome = flipCoin();
console.log(outcome);
// use tuple on it
function maybeGetUserInfo() {
    if (flipCoin() === "heads") {
        return ["success", { name: "Mike North", email: "mike@example.com" }];
    }
    else {
        return ["error", new Error("The coin landed on Tails :(")];
    }
}
const outcome2 = maybeGetUserInfo();
const [first, second] = outcome2;
console.log(first);
// narrowing with type guards
if (second instanceof Error) {
    // In This branch of your code,second is an Error
    console.log(second);
}
else {
    // In This branch of your code,second is an user info
    console.log(second);
}
// Discriminated Unions:---
const outcome3 = maybeGetUserInfo();
if (outcome3[0] === "error") {
    // /second is an error
    console.log(outcome3);
}
else {
    // second is the user info
    console.log(outcome3);
}
function printCoordinate(coord) {
    if (coord.length === 2) {
        const [x, y] = coord;
        console.log(`2D Coordinate :(${x},${y})`);
    }
    else if (coord.length === 3) {
        const [x, y, z] = coord;
        console.log(`3D Coordinate : (${x},${y},${z})`);
    }
    else {
        console.log("Invaild coordinate");
    }
}
printCoordinate([10, 20]);
printCoordinate([10, 40, 50]);
const employee = {
    name: "sarfraj",
    age: 30,
    company: "420 Corporation",
    role: "Senior Chor",
};
function makeWeek() {
    //return type
    const ONE_WEEK = 7;
    const start = new Date();
    const end = new Date(start.valueOf() + ONE_WEEK);
    return { ...start, end };
}
const thisWeek = makeWeek();
console.log(thisWeek);
thisWeek.toISOString();
thisWeek.end.toISOString();
const order = {
    id: 24,
    customer: 'john Doe',
    total: 100,
    discount: 10,
};
console.log(order);
