 const request = require('request');
 const geo = require('./geocode.js');
 const fore = require('./forecast.js');

 const input_city = process.argv[2];
 if(input_city){
 geo.geocode(input_city,(err, data) => {
     if(err) return console.log(err);
      fore.forecast(data.lon, data.lat, (err, forecast_data) => {
            if(err) return  console.log(err);
        console.log(forecast_data);
        console.log(data.loc);
     })
 })
}else {
    console.log('Enter a city');
}

 

/* request({
    url: 'http://api.weatherstack.com/current',
    json: true,
    qs: {
        access_key: '2c28b1b30e9b6b276fd9112794cc5489',
        query: 'San Jose'
    }
}, (err, res) => {
    if(err){
        console.log(err);

    }else if(res.body.error){
        console.log(res.body.error.type);
    }
    else{
    console.log(`The weather in San Jose is ${res.body.current.humidity} but it feels like ${res.body.current.feelslike}`);
    }
}) */


// request({
//     url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json',
//     json: true,
//     qs: {
//     access_token: 'pk.eyJ1IjoiY2hhbmRpbmlwYXRlbCIsImEiOiJja3NyNm12ajQwajFwMm9wZ2FlMTg5NjBiIn0.B5bJa8OKVroogMkxi8PUnw'
//     }
// }, ( err, res) => {
//     if(err){
//         console.log('unable to connect to location service');
//     }else if(res.body.features.length === 0){
//         console.log('Enter a valid search location')
//     }
//      else
//     {
//         console.log(`latitude is ${res.body.features[0].center[0]}`);
//         console.log(`longitude is ${res.body.features[0].center[1]}`);
//     }

    
// })




