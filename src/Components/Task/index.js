import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Task = ({taskText, isDone, onClick, creationDate}) => {

    const [backgroundColor, setBackgroundColor] = useState("white");
    useEffect(() => {
        setBackgroundColor(isDone ? 'gray' : 'white');
    }, [isDone]);

    return (
        <div className={styles.task} onClick={onClick} style={{backgroundColor: backgroundColor}}>
            <div>{taskText}</div>
            <div>{creationDate}</div>
        </div>
    )
};
Task.propTypes = {
    taskText: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    creationDate: PropTypes.number.isRequired,
};

export default Task