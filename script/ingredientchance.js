/* A function that chooses a random pizza topping froma preset array using math.random. math.floor is used to round to the nearest int */
/* Used https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array as a guide*/

function ingArray() {
var myArray = ['beans', 'pickles', 'Soylent Green', 'moonrocks', 'caviar'];
var randIng = Math.floor(Math.random()*myArray.length);
var rand = myArray[randIng];
 alert("Well done! You've won free "+rand+" on your next Pizza!");

}