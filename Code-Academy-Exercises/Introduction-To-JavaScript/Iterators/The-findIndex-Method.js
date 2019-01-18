const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(ani => {
  return ani === 'elephant';
});

const startsWithS = animals.findIndex(ani => {
  return ani.charAt(0) === 's';
});

// .findIndex() will return the index of the first element that evaluates to true in the callback function.
