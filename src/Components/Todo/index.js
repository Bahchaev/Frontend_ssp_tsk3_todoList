import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Todo = ({todo, onClick, setTodoIsDone}) => {

    const [fontWeight, setFontWeight] = useState("white");
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        setFontWeight(todo.isShown ? 'bold' : 'normal');
    }, [todo.isShown]);

    useEffect(() => {
        if (todo.taskList.length !== 0) {
            if (todo.taskList.every(task => task.isDone === true)) {
                setTodoIsDone(todo, true);
            } else {
                setTodoIsDone(todo, false);
            }
        } else setTodoIsDone(todo, undefined)
    }, [todo.taskList]);

    useEffect(() => {
        switch (todo.isDone) {
            case true:
                setBackgroundColor("lightgray");
                break;
            case false:
                setBackgroundColor("lightgreen");
                break;
            default:
                setBackgroundColor("white");
        }
    }, [todo.isDone]);

    return (
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
    )
};

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo