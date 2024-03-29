/**
 Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */
//My solution
function removeUrlAnchor(url) {
  const arr = url.split('#');
  return arr[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));
