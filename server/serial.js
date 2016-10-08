'use strict';
const EventEmitter2 = require('eventemitter2').EventEmitter2;
const SerialPort = require('serialport');

const SENSORS_ORDER = [
    'humidity-ambient',
    'temperature-ambient',
    'humidity-ground',
    'ph',
]

var ee = new EventEmitter2();
const device = process.argv[2];

const port = new SerialPort(device, {
    baudRate: 9600,
    parser: SerialPort.parsers.readline("\n"),
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


port.on('data', (rawData) => {
    console.log("data recibida desde los sensores: " + rawData);

    var unixEpoch = (new Date).getTime();
    var sensorsData = rawData.split(";");
    if (sensorsData.length === 3) {
        // Add PH fake data!
        sensorsData.push(getRandomInt(1, 15));
        var measurements = [];
        // Format the data
        sensorsData.forEach((value, index) => {
            var tag = SENSORS_ORDER[index];
            measurements.push({type: tag, value: value, timestamp: unixEpoch});
        });
        // Emit
        ee.emit('message', measurements);
    }
});

module.exports = ee;
