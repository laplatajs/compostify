function getRandomFloat(min, max) {
    return parseFloat(Math.random() * (max - min)).toFixed(1) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const types = [
    'humidity-ambient',
    'temperature-ambient',
    'humidity-ground',
    'ph'
];

function getData() {
    return types.map((type) => {
        return {
            type,
            value: (type === 'ph') ? getRandomFloat(1, 15) : getRandomInt(0, 101)
        }
    });
}

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var ee = new EventEmitter2();

setInterval(() => ee.emit('message', getData()), 2000);

module.exports = ee;
