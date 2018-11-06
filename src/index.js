import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension'

import './assets/stylesheets/index.css';

import App from './components/App';

import dcsReducers from './reducers';

import registerServiceWorker from './utils/registerServiceWorker';

const loggerMiddleware = createLogger();
const middleWares = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
);

const store = createStore(
    dcsReducers,
    composeWithDevTools(
        middleWares
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
