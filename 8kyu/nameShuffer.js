/**
 Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
 */
//My solution
function nameShuffler(str) {
  const arr = str.split(' ');
  console.log(arr);
  return `${arr[1]} ${arr[0]}`;
}
console.log(nameShuffler('john McClane'));
