import {connect} from 'react-redux'
import TaskList from "../Components/TaskList";
import {addNewTask} from "../actions/actions";
import {todoList} from "../reducers/todoList";

const getTaskList = (todoList) => {
    let taskList = [];
    todoList.forEach((todo) => {
        if (todo.isShown === true) taskList = todo.taskList
    });

    return taskList
};

const mapStateToProps = (state) => ({
    taskList: getTaskList(state.todoList)
});

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (newTaskText) => dispatch(addNewTask(newTaskText))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)