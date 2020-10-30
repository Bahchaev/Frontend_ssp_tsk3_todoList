import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./styles.module.css"

const Todo = ({todoName, isShown, onClick}) => {

    const [fontWeight, setfontWeight] = useState("white");
    useEffect(() => {
        setfontWeight(isShown ? 'bold' : 'normal');
    },[isShown]);

    return (
        <div className={styles.todo} onClick={onClick} style={{fontWeight: fontWeight}}>{todoName}</div>
    )
};

Todo.propTypes = {
    todoName: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo