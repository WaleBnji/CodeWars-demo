/**
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

//My solution
function toCamelCase(str) {
  //remove dash or underscore
  //return the first letter as it is
  //return subsequent letters with their first character capitalized
  //Join the words togethr
  const words = str.replaceAll('-', ' ').replaceAll('_', ' ').split(' ');
  const result = [];
  result.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    const firstChar = words[i].split('')[0].toUpperCase();
    const rest = words[i].slice(1);
    result.push(`${firstChar}${rest}`);
  }
  return result.join('');
}

console.log(toCamelCase('The_Stealth_Warrior'));
