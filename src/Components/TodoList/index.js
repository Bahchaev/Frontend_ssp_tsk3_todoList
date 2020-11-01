import React from 'react';
import PropTypes from 'prop-types'
import Todo from "../Todo";
import TodoAddField from "../TodoAddField";
import styles from "./styles.module.css"
import {store} from "../../store/store";

const TodoList = ({todoList, showTaskList, addNewTodo, setTodoIsDone}) => {
    //сортировка по алфавиту
    let sortTodoList = todoList.sort(function (a, b) {
        let nameA = a.todoName.toLowerCase(), nameB = b.todoName.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });

    return (
        <div className={styles.todoListContainer}>
            <div className={styles.todoAddField}>
                <TodoAddField addNewTodo={(newTodoName) => addNewTodo(newTodoName)} todoList={sortTodoList}/>
            </div>
            <div className={styles.todoList}>
                {sortTodoList.map(todo => (
                    <Todo
                        todo={todo}
                        onClick={() => showTaskList(todo.todoName)}
                        setTodoIsDone={(todo, isDone) => setTodoIsDone(todo, isDone)}
                    />
                ))}
            </div>
        </div>
    );
};


TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    showTaskList: PropTypes.func.isRequired,
    addNewTodo: PropTypes.func.isRequired
};

export default TodoList