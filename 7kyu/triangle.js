/**
 Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */

//My solution
function isTriangle(a, b, c) {
  //To ensure the triangle have a surface that is greater than 0
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  //Following the triangle inequality theorem
  else if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
