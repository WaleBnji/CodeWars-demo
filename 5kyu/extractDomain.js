/**
 Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */
//My solution
function domainName(url) {
  const arr = url.slice(7).split('.');
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 3) {
      return arr[1];
    } else if (arr[i] !== 'www') {
      return arr[0];
    }
  }
}

console.log(domainName('https://google.co.jp'));
