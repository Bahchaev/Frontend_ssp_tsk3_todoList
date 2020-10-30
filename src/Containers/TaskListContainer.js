import {connect} from 'react-redux'
import TaskList from "../Components/TaskList";
import {addNewTask, clickOnTask} from "../actions/actions";

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

const mapDispatchToProps = dispatch => ({
    addNewTask: (newTaskText, dataOfCreate) => dispatch(addNewTask(newTaskText, dataOfCreate)),
    clickOnTask: task => dispatch(clickOnTask(task))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)