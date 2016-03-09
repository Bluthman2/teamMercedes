var json = '[{"location_id": 1,"lightning_all_clear": true,"lightning_5_mi": false,"lightning_15_mi": false,"lightning_25_mi": false,"lightningTime": "2016-01-17T08:52:23.000Z","lightningBearing": "ESE","lightningDistance": 8.286,"summary": "Mostly Cloudy","temperature": 54,"precipProbability": 0,"heatIndex": 54,"windSpeed": 36,"windDirection": "NNW","humidity": 35}]';

var parsed = JSON.parse(json);

console.log(JSON.stringify(parsed));
console.log(JSON.stringify(parsed[0]['location_id']));

