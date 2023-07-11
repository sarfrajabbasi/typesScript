function sar(a, b) {
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
var a = 9;
// a = "sadasdas";
var b = 6;
// Implicit any and type annotations:---
var randomWaitTime = Math.round(Math.random() * 500) + 500;
var startTime = new Date();
var endTime; //any
setTimeout(function () {
    // endTime = 0;
    endTime = new Date();
}, randomWaitTime);
var random_wait_time = Math.round(Math.random() * 500) + 500;
setTimeout(function () {
    // endTime=0;
    endTime = new Date();
}, random_wait_time);
// Function arguments and return values:-----
