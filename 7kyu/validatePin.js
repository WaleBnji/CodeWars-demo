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
  const length = pin.length;
  const correctPin = length === 4 || length === 6;
  const onlyNumbers = pin.match(/^\d+$/);
  if (correctPin && onlyNumbers) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN('1234'));
