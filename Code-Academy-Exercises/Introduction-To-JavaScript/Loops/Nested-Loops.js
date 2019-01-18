// Write your code below
const bobsFollowers = ['steve', 'tom', 'mark', 'william'];
const tinasFollowers = ['tom', 'mark', 'mary'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// One use for a nested for loop is to compare the elements in two arrays.
