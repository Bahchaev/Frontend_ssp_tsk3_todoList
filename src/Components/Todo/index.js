import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({listName, isShown, onClick}) => {

    return (
        <div className="todo" onClick={onClick} style={{backgroundColor: isShown ? 'red' : 'white'}}>{listName}</div>
    )
};

Todo.propTypes = {
    listName: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo