import React from 'react';
import TodoListContainer from "../../Containers/TodoListContainer";
import TaskListContainer from "../../Containers/TaskListContainer";
import styles from "./styles.module.css"



function App() {

    return (
        <div className={styles.app}>
            <TodoListContainer/>
            <TaskListContainer/>
        </div>
    )
}

export default App

