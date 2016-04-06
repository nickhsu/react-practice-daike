import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Filter from './components/Filter'
import DaikeApp from './reducers'
import Api from './api'
import App from './components/App'

let store = createStore(DaikeApp, Api);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)