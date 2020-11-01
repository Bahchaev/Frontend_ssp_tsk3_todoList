import React from 'react';
import styles from "./styles.module.css"
import Task from "../Task";
import TaskAddField from "../TaskAddField";
import PropTypes from "prop-types";
import TaskListHeader from "../TaskHeader";

const TaskList = ({taskList, addNewTask, clickOnTask, todoName, deleteTodo, deleteTask}) => {
    return (
        <div className={styles.taskListContainer}>
            <div className={styles.taskListHeader}>
                <TaskListHeader todoName={todoName} onClick={() => deleteTodo()}/>
            </div>
            <div className={styles.taskList}>
                {taskList.map(task => (
                    <Task task={task} onClick={() => clickOnTask(task)} deleteTask={() => deleteTask(task)} />
                ))}
            </div>
            <div className={styles.taskAddField}>
                <TaskAddField addNewTask={(newTaskText, dataOfCreate, isImmediate) => addNewTask(newTaskText, dataOfCreate, isImmediate)} taskList={taskList}/>
            </div>
        </div>
    )
};

TaskList.propTypes = {
    taskList: PropTypes.array.isRequired,
    addNewTask: PropTypes.func.isRequired,
    clickOnTask: PropTypes.func.isRequired,
    todoName: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList