/**
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

//My solution
function toCamelCase(str) {
  const replaced = str.replaceAll('-', ' ').replaceAll('_', ' ');
  const arr = replaced.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const capital = arr.map((word) => {
      if (i > 0) {
        const wordArr = word.split('');
        const firstChar = wordArr[0].toUpperCase;
        const newWord = word.replace(wordArr[0], firstChar);
      }
    });
  }
}

console.log(toCamelCase('the-stealth-warrior'));
