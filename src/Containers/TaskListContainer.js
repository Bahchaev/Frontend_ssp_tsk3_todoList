import {connect} from 'react-redux'
import TaskList from "../Components/TaskList";
import {addNewTask, clickOnTask, deleteTask, deleteTodo} from "../actions/actions";

const getTaskList = (todoList) => {
    let taskList = [];
    Object.keys(todoList).forEach((key) => {
        if (todoList[key].isShown === true ) taskList = (todoList[key].taskList) ? todoList[key].taskList : {}
    });

    return taskList
};

const getTodoName = (todoList) => {
    let todoName;
    Object.keys(todoList).forEach((key) => {
        if (todoList[key].isShown === true) todoName = todoList[key].todoName
    });

    return todoName
};

const mapStateToProps = (state) => {
    return (
        {
            taskList: getTaskList(state.todoList),
            todoName: getTodoName(state.todoList)
        }
    )
};

const mapDispatchToProps = dispatch => ({
    addNewTask: (newTaskText, dataOfCreate, isImmediate) => dispatch(addNewTask(newTaskText, dataOfCreate, isImmediate)),
    clickOnTask: task => dispatch(clickOnTask(task)),
    deleteTodo: (todoName) => dispatch(deleteTodo(todoName)),
    deleteTask: task => dispatch(deleteTask(task))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)