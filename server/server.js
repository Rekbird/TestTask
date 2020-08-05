const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// we will use port 8000 for our app
server.listen(8000, () => console.log('connected to port 8000!'));

let currentButtonState = 'OFF';

io.on('connection', socket => {

    socket.on('GET_BUTTON_STATE', () => {
        io.emit('BUTTON_STATE', currentButtonState ); 
    });

    socket.on('CHANGE_BUTTON_STATE', () => {
        currentButtonState = currentButtonState == 'ON' ? 'OFF' : 'ON';
        io.emit('BUTTON_STATE', currentButtonState ); 
    });
  
  });