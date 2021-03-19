const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/:latlon', async (req, res) => {
    const latlon = req.params.latlon.split(',');
    console.log(latlon);
    const lat = latlon[0];
    const lon = latlon[1];
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    const fetch_url = await fetch(url);
    const data = await fetch_url.json();
    console.log(url);
    res.json(data);

});

module.exports = router;