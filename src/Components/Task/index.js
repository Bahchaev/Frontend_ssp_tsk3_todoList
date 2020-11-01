import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Task = ({task, onClick}) => {

    const [backgroundColor, setBackgroundColor] = useState("white");
    const [display, setDisplay] = useState("none");
    useEffect(() => {
        setBackgroundColor(task.isDone ? 'lightgray' : 'white');
    }, [task.isDone]);

    useEffect(() => {
        setDisplay(task.isImmediate ? 'block' : 'none')
    }, []);

    return (
        <div className={styles.task} style={{backgroundColor: backgroundColor}}>
            <input type={"checkbox"} onClick={onClick}/>
            <div className={styles.taskText}>{task.taskText}</div>
            <div style={{display: display}}>Срочное!!!</div>
            <div className={styles.taskCreationDate}>{task.dateOfCreate}</div>
        </div>
    )
};
Task.propTypes = {
    task: PropTypes.object.isRequired,
};

export default Task