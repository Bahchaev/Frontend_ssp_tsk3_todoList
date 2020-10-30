import React from 'react';
import styles from "./styles.module.css"
import Task from "../Task";
import TaskAddField from "../TaskAddField";
import PropTypes from "prop-types";

const TaskList = ({taskList, addNewTask, clickOnTask}) => {

    //console.log(taskList);
    return (
        <div className={styles.taskListContainer}>
            <div className={styles.taskList}>
                {taskList.map(task => (
                    <Task task={task} onClick={() => clickOnTask(task)} />
                ))}
            </div>
            <div className={styles.taskAddField}>
                <TaskAddField addNewTask={(newTaskText, dataOfCreate) => addNewTask(newTaskText, dataOfCreate)} taskList={taskList}/>
            </div>
        </div>
    )
};

TaskList.propTypes = {
    taskList: PropTypes.array.isRequired,
    addNewTask: PropTypes.func.isRequired,
    clickOnTask: PropTypes.func.isRequired
};

export default TaskList