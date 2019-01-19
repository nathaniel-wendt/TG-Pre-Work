const Airplane = require('./1-airplane.js');

function displayAirplane() {
 console.log(Airplane.myAirplane);
}

console.log(displayAirplane());

// A common way to make use of the exported module is to import it with the require() function
