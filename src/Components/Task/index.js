import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Task = ({task, onClick}) => {

    const [backgroundColor, setBackgroundColor] = useState("white");
    useEffect(() => {
        setBackgroundColor(task.isDone ? 'lightgray' : 'white');
    }, [task.isDone]);

    return (
        <div className={styles.task} style={{backgroundColor: backgroundColor}} onClick={onClick}>
            <div className={styles.taskText}>{task.taskText}</div>
            <input type={"checkbox"} checked={task.isDone}/>
            <div className={styles.taskCreationDate}>{task.dateOfCreate}</div>
        </div>
    )
};
Task.propTypes = {
    task: PropTypes.object.isRequired,
};

export default Task