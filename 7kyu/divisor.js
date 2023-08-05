/**
 Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
 */

//My solution
function divisors(integer) {
  //check for prime number
  //Create an empty array
  //loop
  //If the number is a divisor of the input, add to the array
  const divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length > 0 ? divisors : `${integer} is prime`;
}

console.log(divisors(13));
