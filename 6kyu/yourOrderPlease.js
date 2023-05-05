/**
 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */
//My solution
function order(words) {
  // Create an array that contains the word of the sentence
  // create an empty array
  //Loop through the words and check if the word contain the number of the current index and add in that order to the empty array
  if (words.length === 0) {
    return '';
  }
  const arr = words.split(' ');
  console.log(arr);
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log(order('is2 Thi1s T4est 3a'));

const word = 'Hello1';
console.log(word.includes('1'));
