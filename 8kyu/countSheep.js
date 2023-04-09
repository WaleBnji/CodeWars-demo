/* 
If you can't sleep, just count sheep!!
Task:Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  const arr = [];
  //Create a variable and give it the value of an empty string
  let murmur = '';
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  //Map through numbers in this array and on every iteration add to empty string created initially
  const rest = arr.filter((num) => num > 0);
  if (rest.length === 0) {
    murmur = '';
  }
  for (let i = 0; i < rest.length; i++) {
    murmur += `${rest[i]} sheep...`;
  }
  return murmur;
};
