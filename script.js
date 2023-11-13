const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c1717c8efmsh1a36851c0f72f35p1c66f8jsn7b0247c96ed7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

var getWeather = (city) => (fetch(url.concat(city), options)
.then(response => response.json())
.then((response) => {
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
})
.catch(err => console.log(err))
);

submit.addEventListener("click", (e)=>{
    console.log("Submit")
    getWeather(city.value);
})


