/** Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */
//My solution
function pigIt(str) {
  //Create an array that contains all the words
  //Map through the array and store the first letter of each word in a variable
  //Store the remaining of the word in another variable
  //Concacnate the words
  //return the words with -ay added to the end
  const arr = str.split(' ');
  const abnormal = arr.map((word) => {
    const firstChar = word.split('')[0];
    const rest = word.slice(1);
    if (/[a-zA-Z]/.test(firstChar)) {
      word = `${rest}${firstChar}ay`;
    } else {
      word = `${firstChar}`;
    }
    return word;
  });
  return abnormal.join(' ');
}

console.log(pigIt('Pig latin is cool'));

// const test = 'ppppPL';

// function isCharacterALetter(char) {
//   return /[a-zA-Z]/.test(char);
// }
// console.log(isCharacterALetter(test));
