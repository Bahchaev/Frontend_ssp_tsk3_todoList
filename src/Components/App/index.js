import React from 'react';

//firebase imports
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import TodoListContainer from "../../Containers/TodoListContainer";
import TaskListContainer from "../../Containers/TaskListContainer";
import styles from "./styles.module.css"

import Auth from "../Auth";


function App({fetchTodoList, stopFetching}) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            let userId = firebase.auth().currentUser.uid;
            let dB = firebase.database();
            fetchTodoList(dB.ref(`${userId}/`))
        } else {stopFetching(firebase.database().ref())}
    });

    return (
        <>
            <Auth/>
            <div id="App" className={styles.app}>
                <TodoListContainer/>
                <TaskListContainer/>
            </div>
        </>
    )
}

export default App

