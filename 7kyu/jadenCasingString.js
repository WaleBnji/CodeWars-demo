/**
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

//My solution
const toJadenCase = (str) => {
  //Put the word in an array
  //Create an empty array and loop through the sentence array on each iteration, get the first letter of each word and then capitalise it.
  //Use slice to get the rest of the word and join them //Push the element into the empty array
  const words = str.split(' ');
  const jaden = [];
  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i].split('')[0].toUpperCase();
    const rest = words[i].slice(1);
    jaden.push(`${firstChar}${rest}`);
  }
  console.log(jaden);
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
const Wale = 'wale';
console.log(Wale.split('')[0].toUpperCase());
