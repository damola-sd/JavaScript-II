// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function logger(sth) {
  console.log(sth)
}

function getLength(arr, cb) {
  cb(arr.length);
  // getLength passes the length of the array into the callback.
}
getLength(items, logger);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let last_item = items[items.length - 1];
  cb(last_item);
}
last(items, logger);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}
sumNums(5, 6, logger);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiply = x * y;
  cb(multiply);
}

multiplyNums(3, 6, logger );

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
for (let i = 0; i < list.length; i++) {
  if (list[i] === item) {
    cb(true);
  }
  else { cb(false); } 
}
}

contains("yo-yo", items, logger);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
