const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
   if (region === 'The Arctic') {
     let lightWaves = 'Northern Lights';
     console.log(lightWaves);
   }
  console.log(lightWaves);
};

logVisibleLightWaves();

// we should follow best practices for scoping our variables as tightly as possible using block scope
