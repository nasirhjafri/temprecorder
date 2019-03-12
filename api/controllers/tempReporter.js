'use strict';

const axios = require('axios');


exports.get_temp_by_city = function(req, res) {
    let city = req.query.city;

    if (city === undefined || city === ''){
        res.send('Parameter city is required!');
        return;
    }

    axios.get('http://api.apixu.com/v1/current.json?key=661cd05e7edc4ff39a4153500191103&q=' + city)
        .then(response => {
            let weather = {'city': city};
            weather['temp_f'] = response.data.current.temp_f;
            res.send(JSON.stringify(weather));
        })
        .catch(error => {
            res.send(city + ' might not be a correct value for city');
        });
};

