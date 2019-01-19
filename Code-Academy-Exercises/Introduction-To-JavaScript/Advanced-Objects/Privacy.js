const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

console.log(robot.recharge());

// JavaScript doesn't have built-in privacy for objects, instead it relies on specific naming conventions.
