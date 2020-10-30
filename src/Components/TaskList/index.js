import React from 'react';
import styles from "./styles.module.css"
import Task from "../Task";
import TaskAddField from "../TaskAddField";
import PropTypes from "prop-types";

const TaskList = ({taskList, clickedTodo, addNewTask}) => {

    //console.log(taskList);
    return (
        <div className={"taskList"}>
            <div>
                {taskList.map(task => (
                    <Task creationDate={9999999999} onClick={""} taskText={task.taskText}
                          isDone={task.isDone}/>
                ))}
            </div>
            <div>
                <TaskAddField addNewTask={(newTaskText) => addNewTask(newTaskText)} taskList={taskList} clickedTodo={clickedTodo}/>
            </div>
        </div>
    )
};

TaskList.propTypes = {
    taskList: PropTypes.array.isRequired,
    clickedTodo: PropTypes.string.isRequired,
    addNewTask: PropTypes.func.isRequired
};

export default TaskList