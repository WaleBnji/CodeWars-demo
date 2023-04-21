/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


*/

//My solution
// function alphabetPosition(text) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const textArray = text.split('');
//   let result = '';
//   for (let i = 0; i < alphabet.length; i++) {
//     textArray.map((char) => {
//       if (char === alphabet[i]) {
//         result += i + 1;
//         const final = result + ' ';
//       }
//     });
//   }
//   return final;
// }

// console.log(alphabetPosition('zzz'));
