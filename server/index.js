const port = 6969;
const ip = require('ip');

const WebSocketServer = require('uws').Server;
const wss = new WebSocketServer({ port });

let ee;
if (process.argv[2] === 'demo') {
    ee = require('./mock');
} else {
    ee = require('./serial');
}

// ee.on('message', (data) => {
//     console.log(data);
// });

wss.on('connection', function (ws) {
    console.log('se conecto un guacho!');

    const sensor = (data) => {
        ws.send(JSON.stringify(data));
    };

    ws.on('close', () => {
        console.log('se desconecto el guacho!');
        ee.removeListener('message', sensor);
    });

    ee.on('message', sensor);
});



console.log(`Listening in ${ip.address()}:${port}`);
