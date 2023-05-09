/**
 Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */
//My solution
function disemvowel(str) {
  const arr = str.split(' ');
  const voweless = [];
  for (let i = 0; i < arr.length; i++) {
    voweless.push(
      arr[i]
        .replace('a', '')
        .replace('A', '')
        .replace('e', '')
        .replace('E', '')
        .replace('i', '')
        .replace('I', '')
        .replace('o', '')
        .replace('O', '')
        .replace('u', '')
        .replace('U', '')
    );
  }
  return voweless.join(' ');
}
console.log(disemvowel('This website is for losers LOL!'));
