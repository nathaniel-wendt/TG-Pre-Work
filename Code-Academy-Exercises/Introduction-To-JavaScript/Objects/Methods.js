let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let launchMessage = 'Spim... Borp... Glix... Blastoff!';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log(launchMessage);
  }
};

alienShip.retreat();
alienShip.takeOff();

// When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
