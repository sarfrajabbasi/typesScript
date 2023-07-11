function sar(a: number, b: number): number {
  return a + b;
}
console.log(sar(3, 4));

/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */

// function timeout(n:number){
//     return new Promise((res)=>{
//         setTimeout(res,n);
//     })
// }

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */

// export async function addNumbers(a:number,b:number){
//     await timeout(500)
//     return a + b
// }

// // == Run the program ==//
// (async ()=>{
//     console.log(await addNumbers(3,4));
// })();

// Variables and Values:---

let a = 9;
// a = "sadasdas";
const b = 6;

// Implicit any and type annotations:---

const randomWaitTime = Math.round(Math.random() * 500) + 500;

let startTime = new Date();

let endTime: Date; //any

setTimeout(() => {
  // endTime = 0;
  endTime = new Date();
}, randomWaitTime);

const random_wait_time = Math.round(Math.random() * 500) + 500;

setTimeout(() => {
  // endTime=0;
  endTime = new Date();
}, random_wait_time);

// Function Arguments and return values:-----

function add(a: number, b: number): number {
  return a + b;
}

add(add(5, 1), 2);
