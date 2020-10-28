import { connect } from 'react-redux'
import TodoList from "../Components/TodoList";
import {showList} from "../actions/showList";

const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    showList: listName => dispatch(showList(listName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)