/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

//My solution
function correct(string) {
  // your code here
  const arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.replace(0, 'O');
      console.log(typeof arr[i]);
    } else if (arr[i] === 1) {
      arr[i] = 'I';
    } else if (arr[i] === 5) {
      arr[i] === 'S';
    }
  }
  return arr;
}

console.log(correct('015'));
