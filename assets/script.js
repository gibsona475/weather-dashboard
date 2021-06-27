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
      document.getElementById("currentTemp").textContent= "Temperature: " + weatherData.current.temp;
      document.getElementById("currentWind").textContent= "Wind: " + weatherData.current.wind_speed;
      document.getElementById("currentHumidity").textContent= "Humidity: " + weatherData.current.humidity;
      document.getElementById("currentUVI").textContent= "UVI: " + weatherData.current.uvi;

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
        document.getElementById("card1-date").textContent= "Date: " + dailyRecord.dt;
        document.getElementById("card1-icon").textContent= dailyRecord.dt;
        document.getElementById("card1-temp").textContent= "Temp: " + dailyRecord.temp.day;
        document.getElementById("card1-humi").textContent= "Humidity: " + dailyRecord.humidity;
        document.getElementById("card1-ws").textContent= "Wind Speed: " + dailyRecord.wind_speed;

        //CARD 2
        dailyRecord = weatherData.daily[1]; 
        //CARD2
        document.getElementById("card2-date").textContent= "Date: " + dailyRecord.dt;
        document.getElementById("card2-icon").textContent= dailyRecord.dt;
        document.getElementById("card2-temp").textContent= "Temp: " + dailyRecord.temp.day;
        document.getElementById("card2-humi").textContent= "Humidity: " + dailyRecord.humidity;
        document.getElementById("card2-ws").textContent= "Wind Speed: " + dailyRecord.wind_speed;

        //Card 3 
        dailyRecord = weatherData.daily[2]; 
        //Card 3
        document.getElementById("card3-date").textContent= "Date: " + dailyRecord.dt;
        document.getElementById("card3-icon").textContent= dailyRecord.dt;
        document.getElementById("card3-temp").textContent= "Temp: " + dailyRecord.temp.day;
        document.getElementById("card3-humi").textContent= "Humidity: " + dailyRecord.humidity;
        document.getElementById("card3-ws").textContent= "Wind Speed: " + dailyRecord.wind_speed;

        //Card 4
        dailyRecord = weatherData.daily [3];
        //Card 4
        document.getElementById("card4-date").textContent= "Date: " + dailyRecord.dt;
        document.getElementById("card4-icon").textContent= dailyRecord.dt;
        document.getElementById("card4-temp").textContent= "Temp: " + dailyRecord.temp.day;
        document.getElementById("card4-humi").textContent= "Humidity: " + dailyRecord.humidity;
        document.getElementById("card4-ws").textContent= "Wind Speed: " + dailyRecord.wind_speed;

        //Card 5
        dailyRecord = weatherData.daily [4];
        //Card 5
        document.getElementById("card5-date").textContent= "Date: " + dailyRecord.dt;
        document.getElementById("card5-icon").textContent= dailyRecord.weather.icon;
        document.getElementById("card5-temp").textContent= "Temp: " + dailyRecord.temp.day;
        document.getElementById("card5-humi").textContent= "Humidity: " + dailyRecord.humidity;
        document.getElementById("card5-ws").textContent= "Wind Speed: " + dailyRecord.wind_speed;

      }
    })

}

//PULLS THE LAT and LON for an entered city in the search BAR 
function geoCoordinates() {
  var cityName = searchInput.value; 
  // console.log("city name", cityName ); 
  var apiRequestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;
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

//Local Stoage
/*function weatherSearchHistory () {
  var previousScores = JSON.parse(localStorage.getItem("searchButton"))|| []; 
  Return display for previous cities
  */ 
