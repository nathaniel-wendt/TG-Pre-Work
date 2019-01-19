// Information to reach API
const apiKey = 'b7825507b6ed4f709b6678f61fe2dba1';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
  		'apikey': apiKey
    				},
    body: data,
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// I learned how to update the boilerplate code to utilize the Rebrandly API
