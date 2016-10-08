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
    const type = types[getRandomInt(0, types.length)];
    let value;
    if (type === 'ph') {
      value = getRandomFloat(1, 15);
    } else {
      value = getRandomInt(0, 101);
    }
    return {
        type,
        value
    };
}

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var ee = new EventEmitter2();

setInterval(() => ee.emit('message', getData()), 2000);

module.exports = ee;
