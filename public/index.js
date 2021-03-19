navigator.geolocation.getCurrentPosition(async pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log(lat, lon);

    const weatherApiLatLon = `weather/${lat},${lon}`;
    const res = await fetch(weatherApiLatLon);
    const data = await res.json();
    $('.my_location').text(data.timezone);
    $('.weather_right_now').text(data.current.temp);

    document.getElementById('img').src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

    $(".btn").click(async () => {

        $(".rmv").remove();

        const cityName = $('.City_Name').val();
        const weatherApiCityName = `weather1/${cityName}`;
        const response = await fetch(weatherApiCityName);
        const datas = await response.json();

        $('body').append(
            `<h3 class="rmv ">
                Weather: <span class="weather_of_this_city"></span>
            </h3> `
        );
        $('body').append(
            `<img  alt="icon" class = 'rmv border' id="img1 ">`
        );
        document.getElementById('img1 ').src = `http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`;

        $('.weather_of_this_city').text(datas.main.temp)

    });

});