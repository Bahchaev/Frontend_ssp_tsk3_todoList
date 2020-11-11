import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

import {NavLink} from "react-router-dom";

const Todo = ({todo, onClick, setTodoIsDone}) => {

    const [fontWeight, setFontWeight] = useState("white");
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        if (todo) setFontWeight(todo.isShown ? 'bold' : 'normal');
    }, [todo.isShown]);

    useEffect(() => {
        let taskList = todo.taskList;
        if (todo && taskList && Object.keys(taskList).length !== 0) {
            if (Object.keys(taskList).every(key => taskList[key].isDone === true)) {
                setTodoIsDone(todo, true);
                setBackgroundColor("lightgray");
            } else {
                setTodoIsDone(todo, false);
                setBackgroundColor("lightgreen");
            }
        } else {
            setTodoIsDone(todo, false);
            setBackgroundColor("white");
        }
    }, [todo.taskList]);

    return (
        <NavLink to={`${todo.todoName}`}>
            <div
                className={styles.todo}
                onClick={onClick}
                style={{
                    fontWeight: fontWeight,
                    backgroundColor: backgroundColor,
                }}
            >
                {todo.todoName}
            </div>
        </NavLink>
    )
};

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo