var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=820d9bcc76e4697ebc5ef4d9284169ca';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  console.log (requestUrl)

// create variables for HTML responsive actions
// Search for a city =
//Search Button =
//Current weather info display =
//Five Day forcast =
