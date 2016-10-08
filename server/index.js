const port = 6969;
const ip = require('ip');

const WebSocketServer = require('uws').Server;
const wss = new WebSocketServer({ port });

wss.on('connection', function (ws) {
    console.info('Some client connected!');
});

console.log(`Listening in ${ip.address()}:${port}`);
