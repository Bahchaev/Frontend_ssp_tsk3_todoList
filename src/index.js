import React from 'react';
import ReactDOM from 'react-dom';

import {store} from "./store/store";
import {Provider} from "react-redux";
import AppContainer from "./Containers/AppContainer";

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from "./Components/Auth";



ReactDOM.render(
    <Provider store={store}>
        <Router>

            <Route path={"/:todoName?"} component={AppContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
