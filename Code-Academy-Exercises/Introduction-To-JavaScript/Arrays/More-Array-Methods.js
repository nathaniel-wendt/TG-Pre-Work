const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Using these built-in array methods make it easier to do some common tasks when working with arrays.
