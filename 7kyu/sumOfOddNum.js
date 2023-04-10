/**
 * Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

//My solution
function rowSumOddNumbers(n) {
  // TODO
  //Put all odd numbers in array
  // The sum of any row is just the cube of n
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(3));
