import React from 'react';
import styles from "./styles.module.css"
import PropTypes from "prop-types";

const TaskAddField = ({addNewTask, taskList}) => {
    let input;
    let checkbox;
    return (
        <form className={styles.taskAddField}
              action="#"
              onSubmit={e => {
                  e.preventDefault();
                  if (!input.value.trim()) {
                      return
                  }
                  if (Object.keys(taskList).every((key) =>
                      input.value.trim() !== taskList[key].taskText
                  )) {
                      let dateOfCreate = new Date().toLocaleString();
                      addNewTask(input.value, dateOfCreate, checkbox.checked);
                  }

                  input.value = "";
                  checkbox.checked = false

              }}>
            <div className={styles.taskText}>
                <input className={styles.taskTextInput} ref={node => (input = node)} type="text" required/>
                <input className={styles.taskCheckbox} ref={node => (checkbox = node)} type={"checkbox"} id={"taskIsImmediate"}/>
                <label className={styles.taskCheckboxLabel} for={"taskIsImmediate"}>Срочное</label>
            </div>
            <button className={styles.taskAddBtn} type={"submit"}>Добавить задание</button>
        </form>
    )
}

TaskAddField.propTypes = {
    addNewTask: PropTypes.func.isRequired,
    taskList: PropTypes.array.isRequired,
};

export default (TaskAddField)