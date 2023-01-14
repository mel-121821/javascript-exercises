// To run tests, use command in terminal below:
// npm test calculator.spec.js

// Resources: https://reqbin.com/code/javascript/m81eb1ms/javascript-sum-array-example#:~:text=To%20find%20the%20sum%20of%20array%20elements%20in%20JavaScript%2C%20you,removed%20or%20missing%20array%20elements.

//https://www.samanthaming.com/tidbits/48-passing-arrays-as-function-arguments/

// https://www.javascripttutorial.net/javascript-array-reduce/


const add = function(num1, num2) {
  let result = num1 + num2;
  return result;
};


const subtract = function(num1, num2) {
  let result = num1 - num2;
  return result;
};


const sum = function(array) {
  return array.reduce((previousValue, nextValue) => {
    return previousValue + nextValue;
  }, 0);	
};
// using 2 return statements here because the bottom return value is passing a result to the array.reduce, and then the array.reduce is passing the final result up to the level of the function itself

// the 0 at the end serves as our starting total
// removed the 0 at the end as it is not actually needed for this problem. For extra context on this, see WesBos video: https://www.youtube.com/watch?v=HB1ZC7czKRs&ab_channel=WesBos (skip to 7:45)


const multiply = function(array) {
  return array.reduce((total, nextValue) => {
    return total * nextValue;
  });
};
 

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

// Math.pow(a, b) finds the power of a by b

const factorial = function(num) {
  if (num === 0 || num === 1) 
    return 1;
  for (let i = num -1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// a factorial is calculated buy multiplying a number by itself minus one until you get to 1, and is shown by the exclamation (!) symbol
// example: 4! = 4x3x2x1 = 24
// the factorial of 0 is considered to be 1
// for more info: https://www.mathsisfun.com/numbers/factorial.html 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
