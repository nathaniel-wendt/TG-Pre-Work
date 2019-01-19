let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 6;
delete spaceship['Secret Mission'];

// although we can't reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
