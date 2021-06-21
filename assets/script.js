var apiKey = '820d9bcc76e4697ebc5ef4d9284169ca';
var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchBar");

function fetchWeatherFOrecast(lat, lon) {

  var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
  console.log(requestUrl)

  //API CALL 
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(weatherData => {
      //api weather onecall response 
      console.log("weatherData", weatherData); 
      //setting values in the HTML elements 
      document.getElementById("currentTemp").textContent= "Temperature:" + weatherData.current.temp;

      //FORECAST 
      // for (var index=0; index < 5; index++){
      //   console.log(index, "Daily forecast", weatherData.daily[index]); 
      //   var dailyRecord = weatherData.daily[index]; 
        
      //   //CARD1
      //   document.getElementById("card1-date").textContent= dailyRecord.dt;
               
      // }
      if( weatherData.daily.length > 0 ){
        //CARD 1 
        var dailyRecord = weatherData.daily[0]; 
        //CARD1
        document.getElementById("card1-date").textContent= dailyRecord.dt;

        //CARD 2
        dailyRecord = weatherData.daily[1]; 
        //CARD2
        document.getElementById("card2-date").textContent= dailyRecord.dt;


      }
    })

}

//PULLS THE LAT and LON for an entered city in the search BAR 
function geoCoordinates() {
  var cityName = searchInput.value; 
  // console.log("city name", cityName ); 
  var apiRequestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;
  // console.log(apiRequestURL);

  fetch(apiRequestURL)
    .then(function (responseGeo) {

      return responseGeo.json();
    })
    .then(apiData => {
      console.log("api reponse", apiData); 

      if(apiData.length > 0 ){

        fetchWeatherFOrecast(apiData[1].lat, apiData[1].lon);

      }
    })


}


//EVENT LISTINER 
searchButton.onclick = geoCoordinates;

// create variables for HTML responsive actions
// Search for a city =
//Search Button =
//Current weather info display =
//Five Day forcast =

//Alert if Search not recognized "City Not Found"
// savesinfo in local storage JSON.parse(localStorage.getItem
