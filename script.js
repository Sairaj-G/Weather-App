const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c1717c8efmsh1a36851c0f72f35p1c66f8jsn7b0247c96ed7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

var getWeather = (city) => fetch(url, options)
.then(response => response.json())
.then((response) => {
    console.log(response);
    cityName.innerHTML = city;
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
})
.catch(err => console.log(err))

async function updateWeather (city){
    var newUrl = url;
    newUrl = newUrl.concat(city);
    try{
        var weResponse = await fetch(newUrl, options);
    }
    catch(error){
        console.error("There is a problem", error);
    }

    console.log("He2");
    var response = await weResponse.json();
    console.log("He3");

    console.log(response)
    cityName.innerHTML = city
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;

}


submit.addEventListener("click", (e)=>{
    console.log("Submit");
    updateWeather(city.value);
})


