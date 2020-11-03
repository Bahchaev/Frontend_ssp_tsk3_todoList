import React from 'react';
import {Provider} from 'react-redux'
import {store} from "../../store/store";

//firebase imports
import firebase from 'firebase/app'
import 'firebase/auth'

import TodoListContainer from "../../Containers/TodoListContainer";
import TaskListContainer from "../../Containers/TaskListContainer";
import styles from "./styles.module.css"


function App() {
    return (
        <Provider store={store}>
        <div className={styles.app}>
            <TodoListContainer/>
            <TaskListContainer/>
        </div>
        </Provider>
    )
}

export default App

