/**
 Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
 */

//My solution
function expandedForm(num) {
  const arr = num.toString().split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const expanded = Number(arr[i]) * Math.pow(10, arr.length - 1 - i);
    newArr.push(expanded);
  }
  return newArr.filter((placeValue) => placeValue > 0).join(' + ');
}

console.log(expandedForm(70304));
