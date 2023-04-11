/**
 In this kata you will create a function that takes a list of non-negative 
 integers and strings and returns a new list with the strings filtered out.
 */

//My solution
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((char) => typeof char === 'number');
}

console.log(filter_list([1, 2, 3, 'a', 'b']));
