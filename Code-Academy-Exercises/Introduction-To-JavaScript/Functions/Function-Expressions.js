const plantNeedsWater = function(day) {
	if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.
