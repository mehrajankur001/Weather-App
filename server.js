const express = require('express');
const router = require('./route/home/latlonData')
const router1 = require('./route/home/cityName')

require('dotenv').config();
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/x.html');
})

app.use('/weather', require('./route/home/latlonData'));
app.use('/weather1', require('./route/home/cityName'));


const PORT = process.env.PORT || 1001;

app.listen(PORT, () => console.log(`Server ${PORT}`));

//CITY NAME: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//LAT-LON: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}