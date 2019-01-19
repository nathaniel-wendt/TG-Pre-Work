let flightRequirements = {
  requiredStaff: 4,
};

let availableAirplanes = [
  {
  	name: 'AeroJet',
  	fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {
  	name: 'SkyJet',
  	fuelCapacity: 500,
  	availableStaff: ['pilots', 'flightAttendants']
  }
];

function meetsStaffRequirements(availableStaff, requiredStaff) {
  availableStaff.length >= requiredStaff ? true : false;
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

// ES6 introduced a second common approach to export modules. In addition to default export, named exports allow us to export data through the use of variables.
