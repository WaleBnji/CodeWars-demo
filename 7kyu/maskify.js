/**
 Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */

//My solution
// return masked string
function maskify(cc) {
  //Turn the string into an array
  //Loop over the array and use conditional statement to change the characters outside of the last four characters into the hashtag symbol
  const arr = cc.split('');
  const masked = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      masked.push('#');
    } else if (i >= arr.length - 4) {
      masked.push(arr[i]);
    }
  }
  return masked.join('');
}

console.log(maskify('11111'));
