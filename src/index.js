import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from 'react-redux'
import { API_WS_ROOT } from './constants';
import { ActionCableProvider } from 'react-actioncable-provider';
import store from './store'


ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
        <Provider store={store}>
            <App />
        </Provider>
    </ActionCableProvider>,
    
    document.getElementById('root')
);

 