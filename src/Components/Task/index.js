import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Task = ({task, onClick, deleteTask}) => {

    const [backgroundColor, setBackgroundColor] = useState("white");
    const [display, setDisplay] = useState("none");
    useEffect(() => {
        setBackgroundColor(task.isDone ? 'lightgray' : 'white');
    }, [task.isDone]);

    useEffect(() => {
        setDisplay(task.isImmediate ? 'block' : 'none')
    }, []);

    useEffect(() => {

    }, [task]);

    return (
        <div className={styles.task} style={{backgroundColor: backgroundColor}}>
            <input type={"checkbox"} onClick={onClick}/>
            <div className={styles.taskText}>{task.taskText}</div>
            <div style={{display: display}}>Срочное!!!</div>
            <div className={styles.taskCreationDate}>{task.dateOfCreate}</div>
            <button onClick={deleteTask}>Удалить</button>
        </div>
    )
};
Task.propTypes = {
    task: PropTypes.object.isRequired,
};

export default Task