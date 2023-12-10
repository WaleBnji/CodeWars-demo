/**
 Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, Worl
 */

//My solution
function hello(name) {
  if (name) {
    const lowerCase = name.toLowerCase().split('');
    const firstLetter = lowerCase[0].toUpperCase();
    const rest = lowerCase.slice(1).join('');
    return `Hello, ${firstLetter}${rest}!`;
  } else {
    return 'Hello, World!';
  }
}

console.log(hello());
