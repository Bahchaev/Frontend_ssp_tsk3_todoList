import {connect} from 'react-redux'
import TaskList from "../Components/TaskList";
import {addNewTask, clickOnTask, deleteTask, deleteTodo} from "../actions/actions";

const getTaskList = (todoList, todoName) => {
    let taskList = [];
    Object.keys(todoList).forEach((key) => {
        if (todoList[key].todoName === todoName ) taskList = (todoList[key].taskList) ? todoList[key].taskList : {}
    });

    return taskList
};

// const getTodoName = (todoList, todoName) => {
//     let todoName;
//     Object.keys(todoList).forEach((key) => {
//         if (todoList[key].todoName === todoName) todoName = todoList[key].todoName
//     });
//
//     return todoName
// };

const mapStateToProps = (state, ownProps) => {
    return (
        {
            taskList: getTaskList(state.todoList, ownProps.todoName),
            todoName: ownProps.todoName
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