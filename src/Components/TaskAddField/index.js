import React from 'react';
import styles from "./styles.module.css"
import PropTypes from "prop-types";

const TaskAddField = ({addNewTask, taskList}) => {
    let input;
    return (
        <div>
            <form action="#" onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                if (taskList.every((task) =>
                    input.value.trim() !== task.taskText
                ))
                    addNewTask(input.value);
                input.value = ""

            }}>
                <input ref={node => (input = node)} type="text" required/>
                <button type={"submit"}>Добавить задание</button>
            </form>
        </div>
    )
}

TaskAddField.propTypes = {
    addNewTask: PropTypes.func.isRequired,
    taskList: PropTypes.array.isRequired,
};

export default (TaskAddField)