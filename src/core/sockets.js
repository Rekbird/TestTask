import io from 'socket.io-client'

const socket = io('http://localhost:8000')

const configureSocket = (dispatch) => {
  socket.on('connect', () => {
    console.log('connected')
  })
  //Incoming messages from server
  socket.on('BUTTON_STATE', currentButtonState => {
    dispatch({type: 'UPDATE_BUTTON_STATE', buttonState: currentButtonState})
  })

  return socket;
}

//Functions for generating messages to server to use it via interface

export const ChangeButtonState = () => socket.emit('CHANGE_BUTTON_STATE')

export const GetButtonState = () => socket.emit('GET_BUTTON_STATE')

export default configureSocket