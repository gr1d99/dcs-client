import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './assets/stylesheets/index.css';

import App from './components/App';

import dcsReducers from './reducers';

import registerServiceWorker from './utils/registerServiceWorker';

const store = createStore(dcsReducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
