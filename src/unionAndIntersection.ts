// Union types:---------

// user the pipe(|) for separate the types within the union.

type MyUnion = string | number;

let myVar: MyUnion;

// valid
myVar = "hello";

myVar = 32;

// Error
// myVar = true

function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

const outcome = flipCoin();
console.log(outcome);

// use tuple on it

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Mike North", email: "mike@example.com" }];
  } else {
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
} else {
  // In This branch of your code,second is an user info
  console.log(second);
}

// Discriminated Unions:---

const outcome3 = maybeGetUserInfo();

if (outcome3[0] === "error") {
  // /second is an error
  console.log(outcome3);
} else {
  // second is the user info
  console.log(outcome3);
}

// In this example,the coordinate type id defined as a union of two possible tupe types coordinates and the printCoordinate function takes a coordinate parameter and checks its length to detemine whether it repsents a 2D and 3D cooridnate,it extracts the values accordingly and prints the coordinate information.

type coordinate = [number, number] | [number, number, number];

function printCoordinate(coord: coordinate) {
  if (coord.length === 2) {
    const [x, y] = coord;

    console.log(`2D Coordinate :(${x},${y})`);
  } else if (coord.length === 3) {
    const [x, y, z] = coord;
    console.log(`3D Coordinate : (${x},${y},${z})`);
  } else {
    console.log("Invaild coordinate");
  }
}

printCoordinate([10, 20]);
printCoordinate([10, 40, 50]);
//  printCoordinate([60]);//invlaid-error

// Intersection type:---------

// This can be described using the &(ampersand) operator.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  company: string;
  role: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "sarfraj",
  age: 30,
  company: "420 Corporation",
  role: "Senior Chor",
};

function makeWeek():Date & {end:Date}{
    //return type
    const ONE_WEEK =7
    const start = new Date();
    const end = new Date(start.valueOf()+ ONE_WEEK);

    return {...start,end};
}

const thisWeek = makeWeek();
console.log(thisWeek);
thisWeek.toISOString();

thisWeek.end.toISOString();


interface Order{
    id:number,
    customer:string,
    total:number;
}

interface DiscountedOrder{
    discount:number;
}

type DiscountedOrderDetails = Order & DiscountedOrder;

const order:DiscountedOrderDetails ={
    id:24,
    customer:'john Doe',
    total:100,
    discount:10,
}

console.log(order);
