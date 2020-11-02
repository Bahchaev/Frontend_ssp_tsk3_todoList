import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import Todo from "../Todo";
import TodoAddField from "../TodoAddField";
import styles from "./styles.module.css"

const TodoList = ({todoList, showTaskList, addNewTodo, setTodoIsDone}) => {
    //сортировка по алфавиту
    const getSortedTodoList = (todoList) => {
        return todoList.sort(function (a, b) {
            let nameA = a.todoName.toLowerCase(), nameB = b.todoName.toLowerCase();
            if (nameA < nameB) //sort string ascending
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        })
    };
    //список фильтра
    const filters = {
        all: "all",
        done: "done",
        unDone: "unDone",
        empty: "empty"
    };
    //фильтрация
    const getFilteredTodoList = (selectedFilter, todoList) => {
        switch (selectedFilter) {
            case filters.all:
                return todoList;
            case filters.done:
                return todoList.filter(todo => todo.isDone === true);
            case filters.unDone:
                return todoList.filter(todo => todo.isDone === false);
            case filters.empty:
                return todoList.filter(todo => todo.isDone === undefined);
        }
    };
    const selectOnChange = (select) => {
        setSelectedFilter(select.value);
        let list = getFilteredTodoList(select.value, todoList);
        setList((list) ? list : []);
        if (!list.find((elem) => elem.isShown === true)) {
            showTaskList(list[0] ? list[0].todoName : "")
        }
    };

    let select;
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [list, setList] = useState(getSortedTodoList(todoList));

    // useEffect(() => {
    //     let list = getFilteredTodoList(selectedFilter, todoList);
    //     setList((list) ? list : []);
    //
    // }, [selectedFilter, todoList]);
    //
    // useEffect(() => {
    //     showTaskList(list[0] ? list[0].todo : "");
    // }, [selectedFilter]);
    useEffect(() => {

        let list = getFilteredTodoList(select.value, todoList);
        list = getSortedTodoList(list);
        setList(list)
    }, [todoList]);

    return (
        <div className={styles.todoListContainer}>

            <select ref={node => (select = node)} onChange={() => {selectOnChange(select)}}>
                <option value={filters.all} selected>Все</option>
                <option value={filters.done}>Сделанные</option>
                <option value={filters.unDone}>Не сделанные</option>
                <option value={filters.empty}>Пустые</option>
            </select>

            <div className={styles.todoList}>
                {list.map(todo => (
                    <Todo
                        todo={todo}
                        onClick={() => showTaskList(todo.todoName)}
                        setTodoIsDone={(todo, isDone) => setTodoIsDone(todo, isDone)}
                    />
                ))}

            </div>
            <div className={styles.todoAddField}>
                <TodoAddField addNewTodo={(newTodoName) => addNewTodo(newTodoName)} todoList={todoList}/>
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