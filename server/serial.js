const serialport = require('serialport');

const port = new serialport(process.argv[2], {baudRate: 9600});

port.on('data', function(data) {
    console.log(data.toString());
});
