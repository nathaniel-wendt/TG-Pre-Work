fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

// I learned to reconstruct the code from the previous exercise to write a complete POST request using fetch() and .then()
