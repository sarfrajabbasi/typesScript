// Foo :
let car :{
  make: string;
  model: string;
  year: number;
};
car = {
  make: "toyota",
  model: "yella",
  year: 2001,
};
console.log(car);

// Create function to print values of this type to the console.

/**
 * Print information about a car to the console
 * @param car - the car to print
 */

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
  // color?:string
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  if (typeof car.chargeVoltage !== "undefined") {
    str += `// ${car.chargeVoltage}v`;
  }

  console.log(str);
}
let myCar = {
  make: "toyota",
  model: "yella",
  year: 2002,
  chargeVoltage: 240,
  color: "red",
};
console.log(myCar.color);

printCar(myCar);

// index signatures:---

let phone = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
};

let phones: {
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined;
} = {};

phones.fax;

//  Arrays and tuples:---

const fileExtensions: string[] = ["js", "ts"];

// Declare an array of numbers

let numbers: number[] = [1, 2, 3, 4, 1, 6];

// Declare an array of booleans

let flags: boolean[] = [true, false, true];

// Declaring an array of custom obejcts

interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Jhon", age: 25 },
  { name: "Tina", age: 15 },
  { name: "Addy", age: 23 },
];


let numbers1:Array<number> = [1,2,3,4,5];
let fruits: Array<string> = ["apple","banana","orange","grapes"];


const cars = [
    {
        make:"toyota",
        model:"UNV-234",
        year:2002
    },
];

// Tuples:---

// Declaring a Tuple

let person:[string,number,boolean] = ["Sarfraj",23,true];

// Accessing elements of a tuple

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// Limitations:--

person.pop()
person.pop()
person.push(1)
person.push("str")
person.push(true)

console.log(person);


