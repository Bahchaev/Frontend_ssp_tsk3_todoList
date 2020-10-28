import React from 'react';
import PropTypes from 'prop-types'
import Todo from "../Todo";
import {useDispatch} from "react-redux";

const TodoList = ({todoList, showList}) => {
    return (
        <div className="todoList">
            {todoList.map(todo => (
                <Todo isShown={todo.isShown} listName={todo.listName} onClick={() => showList(todo.listName)}/>
            ))}
        </div>
    );
};


TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    showList: PropTypes.func.isRequired
};

export default TodoList