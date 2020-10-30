import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store} from "./store/store";
import App from "./Components/App/index";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
