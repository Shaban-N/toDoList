import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer  from './components/toDo/reducers/index'
import App from './components/App.jsx';

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root')
)