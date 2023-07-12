// union types:---
// user the pipe(|) for separate the types within the union.
var myVar;
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
var outcome = flipCoin();
console.log(outcome);
// use tuple on it
function maybeGetUserInfo() {
    if (flipCoin() === "heads") {
        return [
            "success",
            { name: "Mike North", email: "mike@example.com" }
        ];
    }
    else {
        return [
            "error",
            new Error('The coin landed on Tails :(')
        ];
    }
}
var outcome2 = maybeGetUserInfo();
var first = outcome2[0], second = outcome2[1];
console.log(first.split(''), "1");
console.log(second.name, "2");
function printCoordinate(coord) {
    if (coord.length === 2) {
        var x = coord[0], y = coord[1];
        console.log("2D Coordinate :(".concat(x, ",").concat(y, ")"));
    }
    else if (coord.length === 3) {
        var x = coord[0], y = coord[1], z = coord[2];
        console.log("3D Coordinate : (".concat(x, ",").concat(y, ",").concat(z, ")"));
    }
    else {
        console.log('Invaild coordinate');
    }
}
printCoordinate([10, 20]);
printCoordinate([10, 40, 50]);
//  printCoordinate([60]);//invlaid-error
