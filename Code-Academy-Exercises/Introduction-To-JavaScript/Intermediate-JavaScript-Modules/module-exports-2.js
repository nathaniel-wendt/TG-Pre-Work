let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// Below is the content from 2-missionControl.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// We can also wrap any collection of data and functions in an object, and export the object using module.exports.
