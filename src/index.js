import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';

import './assets/stylesheets/index.css';

import App from './components/App';

import dcsReducers from './reducers';

import registerServiceWorker from './utils/registerServiceWorker';

const middleWares = applyMiddleware(thunkMiddleware);

const store = createStore(
    dcsReducers,
    middleWares
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
