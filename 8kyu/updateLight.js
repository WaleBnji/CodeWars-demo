/**
 You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
 */
//My solution
function updateLight(current) {
  const trafficLight = ['green', 'yellow', 'red'];
  for (let i = 0; i < trafficLight.length; i++) {
    if (current === trafficLight[i]) {
      return trafficLight[i + 1];
    }
    if (current === trafficLight[2]) {
      return trafficLight[0];
    }
  }
}

console.log(updateLight('green'));
