// To run tests, use command in terminal below:
// npm test fibonacci.spec.js

// create a function that builds an array, the test will request an array value (example [3]) and the function returns the result for that value

// the function must start with an array of [1, 1], get the sum and add that result as a new value in the array. With each new step, the function must take the last 2 values in the array and get the sum to create the latest value

// use a loop to cycle up to the array value ex: [6] the tester has chosen

// Resources https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/#:~:text=When%20you%20want%20to%20add,arrays%20together%20using%20concat().

// https://flexiple.com/javascript/get-last-array-element-javascript/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign


const fibonacci = function(num) {
    if (Math.sign(num) === -1) {
        return "OOPS"
    } else {
    let array = [1, 1];
    for (i=0; i <= num; i++) {
        let newValue = array[array.length-1] + array[array.length-2];
        array.push(newValue);
    }
    return array[num-1];
    }
};


// Do not edit below this line
module.exports = fibonacci;
