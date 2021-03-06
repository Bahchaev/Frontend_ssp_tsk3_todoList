import React from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const TaskHeader = ({todoName, onClick}) => {

    const deleteBtnClick = () => {
        if (window.confirm("Удалить?")) onClick(todoName)
    };

    return (
        <div className={styles.taskListHeader}>
            <div className={styles.taskListTitle}>{todoName}</div>
            <button onClick={deleteBtnClick} className={styles.deleteBtn}>Удалить список</button>
        </div>
    )
};


TaskHeader.propTypes = {
    todoName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TaskHeader