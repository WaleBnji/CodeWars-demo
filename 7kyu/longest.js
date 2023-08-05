/**
 Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */
//My solution
function longest(s1, s2) {
  const arr = [...s1, ...s2].sort((a, b) => (a < b ? -1 : 1));
  return Array.from(new Set(arr)).join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'));
