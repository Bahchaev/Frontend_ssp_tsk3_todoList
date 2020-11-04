import {connect} from 'react-redux'

import App from "../Components/App";
import {fetchTodoList} from "../actions/actions";



export default connect(
    undefined,
    (dispatch) => ({fetchTodoList: () => dispatch(fetchTodoList())})
)(App)