/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

//My solution
function removeExclamationMarks(s) {
  const arr = s.split('');
  const noExclaim = arr.filter((letter) => letter !== '!');
  return noExclaim.join('');
}
console.log(removeExclamationMarks('Hello ! World!!'));
