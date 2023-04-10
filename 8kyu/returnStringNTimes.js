/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

//My solution
function repeatStr(n, s) {
  //Create an empty array
  const arr = [];
  // Use for loop to push the string into the array
  for (let i = 1; i <= n; i++) {
    arr.push(s);
  }
  //use .join to join the elements contained in the array into one string
  return arr.join('');
}

console.log(repeatStr(6, 'I'));
