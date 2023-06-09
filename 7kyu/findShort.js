/**
 Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */
//My solution
function findShort(s) {
  const arr = s.split(' ');
  const num = [];
  for (let i = 0; i < arr.length; i++) {
    num.push(arr[i].length);
  }
  num.map((item) => {
    Number(item);
  });
  return Math.min(...num);
}

console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);
