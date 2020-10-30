import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Todo = ({todoName, isShown, onClick}) => {

    const [backgroundColor, setBackgroundColor] = useState("white");
    useEffect(() => {
        setBackgroundColor(isShown ? 'red' : 'white');
    },[isShown]);

    return (
        <div className={styles.todo} onClick={onClick} style={{backgroundColor: backgroundColor}}>{todoName}</div>
    )
};

Todo.propTypes = {
    todoName: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo