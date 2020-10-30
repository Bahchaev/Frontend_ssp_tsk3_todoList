import React from 'react';
import styles from "./styles.module.css"
import PropTypes from "prop-types";


const TodoAddField = ({addNewTodo, todoList}) => {
    let input;
    return (
        <div>
            <form action="#" onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }

                //добавляем новый список только если имя списка уникально
                if (todoList.every((todo) =>
                    input.value.trim() !== todo.todoName
                )) addNewTodo(input.value);
                input.value = ""
            }}>
                <input className={styles.todoAddInput} ref={node => (input = node)} type="text" required/>
                <button className={styles.todoAddButton} type={"submit"}>Добавить список</button>
            </form>
        </div>
    )
};

TodoAddField.propTypes = {
    addNewTodo: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired,
};

export default (TodoAddField)