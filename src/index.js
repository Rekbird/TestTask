import React from 'react';
import ReactDOM from 'react-dom';
import configureSocket from './core/sockets.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './core/reducers.js';
import './index.css';
import App from './app/App.js';


const store = createStore(reducer);
    
//setup socket connection
export const socket = configureSocket(store.dispatch);
    
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);