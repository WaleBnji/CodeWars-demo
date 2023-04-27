/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

//My solution
function solution(number) {
  if (number < 0) {
    return 0;
  }
  const arr = [];
  for (let i = 1; i < number; i++) {
    arr.push(i);
  }
  const filteredMultiplesThree = arr.filter((number) =>
    Number.isInteger(number / 3)
  );

  const filteredMultiplesOfFive = arr.filter((number) =>
    Number.isInteger(number / 5)
  );

  const merged = [
    ...new Set([...filteredMultiplesOfFive, ...filteredMultiplesThree]),
  ];
  return merged.reduce((a, b) => a + b, 0);
}

console.log(solution(200));
