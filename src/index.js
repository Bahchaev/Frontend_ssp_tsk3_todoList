import React from 'react';
import ReactDOM from 'react-dom';

import {store} from "./store/store";
import {Provider} from "react-redux";
import AppContainer from "./Containers/AppContainer";


ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
)
;
