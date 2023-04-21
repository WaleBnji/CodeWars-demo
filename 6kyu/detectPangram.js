/**
 A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

//My solution
function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const givenString = string.toLowerCase().split('');
  const common = alphabet.filter((letter) => givenString.includes(letter));
  return common.length === 26 ? true : false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
