/**
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */
//My solution
function solution(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    arr.push(str[i] + str[i + 1]);
  }
  return arr;
}

console.log(solution('abcdef'));

