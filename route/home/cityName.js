const express = require('express');
const fetch = require('node-fetch');

const router1 = express.Router();

router1.get('/:cityName', async (req, res) => {
    const cityName = req.params.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    console.log(url);
    const fetchUrl = await fetch(url);
    const data = await fetchUrl.json();
    res.json(data);
});

module.exports = router1;