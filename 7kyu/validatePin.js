/**
 ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

//My solution
function validatePIN(pin) {
  console.log(pin.length);
  const arr = pin.split('');
  for (const i of arr) {
    if (typeof i !== 'number') {
      return false;
    } else if (pin.length === 4) {
      return true;
    } else if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  }
}
//   if (num) {
//     return pin.length === 4 ? true : pin.length === 6 ? true : false;
//   } else {
//     return false;
//   }

console.log(validatePIN('1234'));
