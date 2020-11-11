import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import Todo from "../Todo";
import TodoAddField from "../TodoAddField";
import styles from "./styles.module.css"
import {NavLink} from "react-router-dom";

const TodoList = ({todoList, clickOnTodo, addNewTodo, setTodoIsDone}) => {

    // список фильтра
    const filters = {
        all: "all",
        done: "done",
        unDone: "unDone",
        empty: "empty"
    };

    //фильтрация
    const getFilteredTodoList = (selectedFilter, initialTodoList) => {
        let filteredTodoList = {};
        switch (selectedFilter) {
            case filters.all:
                filteredTodoList = {
                    ...initialTodoList
                };
                break;
            case filters.done:
                Object.keys(initialTodoList).forEach(key => {
                    if (initialTodoList[key].isDone === true) {
                        filteredTodoList[key] = initialTodoList[key]
                    }
                });
                break;
            case filters.unDone:
                Object.keys(initialTodoList).forEach(key => {
                    if (initialTodoList[key].taskList &&
                        Object.keys(initialTodoList[key].taskList).length !== 0 &&
                        initialTodoList[key].isDone === false) {
                        filteredTodoList[key] = initialTodoList[key]
                    }
                });
                break;
            case filters.empty:
                Object.keys(initialTodoList).forEach(key => {
                    if (!initialTodoList[key].taskList || Object.keys(initialTodoList[key].taskList).length === 0) {
                        filteredTodoList[key] = initialTodoList[key]
                    }
                });
                break;
        }
        return filteredTodoList
    };

    const selectOnChange = (select) => {
        setSelectedFilter(select.value);
    };

    let select;
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [list, setList] = useState(todoList);

    useEffect(() => {
        let list = getFilteredTodoList(select.value, todoList);
        setList(list);
        if (!Object.keys(list).find((key) => list[key].isShown === true)) {
            let todoName = list[Object.keys(list)[0]] ? list[Object.keys(list)[0]].todoName : "";
            clickOnTodo(todoName)
        }
    }, [selectedFilter]);

    useEffect(() => {
        setList(getFilteredTodoList(selectedFilter, todoList));
    }, [todoList]);

    return (
        <div className={styles.todoListContainer}>

            <select className={styles.filter} ref={node => (select = node)} onChange={() => {
                selectOnChange(select)
            }}>
                <option value={filters.all} selected>Все</option>
                <option value={filters.done}>Сделанные</option>
                <option value={filters.unDone}>Не сделанные</option>
                <option value={filters.empty}>Пустые</option>
            </select>

            <div className={styles.todoList}>
                {Object.keys(list).map(key => (
                    <Todo
                        todo={list[key]}
                        onClick={() => clickOnTodo(list[key].todoName)}
                        setTodoIsDone={(todo, isDone) => setTodoIsDone(list[key], isDone)}
                    />
                ))}

            </div>
            <div className={styles.todoAddField}>
                <TodoAddField
                    addNewTodo={(newTodoName) => addNewTodo(newTodoName)}
                    todoList={todoList}
                />
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