/*
*********The question is a leet code question***********
toLearn: The question is on closures upon calling the function multiple state the function should 
increment the number by one number the trick here is it should remember its last state


Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

*/

var createCounter = function(n) {
    return function() {
        return n++
    };
};

const counter = createCounter(10)
console.log([counter(),counter(),counter()]) // the call in the input implies this
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12