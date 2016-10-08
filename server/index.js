const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  console.log('conecta');
  const led = new five.Led(13);

  led.strobe();
});

board.on('error', (e) => {
  console.log(e.message);
});
