import {connect} from 'react-redux'
import TaskList from "../Components/TaskList";
import {addNewTask, clickOnTask, deleteTodo} from "../actions/actions";
import {todoList} from "../reducers/todoList";

const getTaskList = (todoList) => {
    let taskList = [];
    todoList.forEach((todo) => {
        if (todo.isShown === true) taskList = todo.taskList
    });

    return taskList
};

const getTodoName = (todoList) => {
    let todoName;
    todoList.forEach((todo) => {
        if (todo.isShown === true) todoName = todo.todoName
    });

    return todoName
};

const mapStateToProps = (state) => ({
    taskList: getTaskList(state.todoList),
    todoName: getTodoName(state.todoList)
});

const mapDispatchToProps = dispatch => ({
    addNewTask: (newTaskText, dataOfCreate, isImmediate) => dispatch(addNewTask(newTaskText, dataOfCreate, isImmediate)),
    clickOnTask: task => dispatch(clickOnTask(task)),
    deleteTodo: () => dispatch(deleteTodo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)