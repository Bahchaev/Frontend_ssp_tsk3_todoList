import React from 'react';
import {Provider} from 'react-redux'
import {store} from "../../store/store";
import firebaseConfig from "../../firebase/firebaseConfig"

//firebase imports
import firebase from 'firebase/app'

import TodoListContainer from "../../Containers/TodoListContainer";
import TaskListContainer from "../../Containers/TaskListContainer";
import styles from "./styles.module.css"

import Auth from "../Auth";
import {fetchTodoList} from "../../actions/actions";


function App() {
    fetchTodoList();
    return (
        <Provider store={store}>
            <Auth/>
            <div id="App" className={styles.app}>
                <TodoListContainer/>
                <TaskListContainer/>
            </div>
        </Provider>
    )
}

export default App

