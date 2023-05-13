/**
 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */
//My solution
function moveZeros(arr) {
  //Create separate arrays for the normal elements and for the zeros
  //call the push method on the array that contains the normal elements
  const others = arr.filter((element) => element !== 0);
  const zeros = arr.filter((num) => num === 0);
  return others.concat(zeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
