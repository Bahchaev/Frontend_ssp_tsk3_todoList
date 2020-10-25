import React from 'react'
import {connect} from 'react-redux'
import {User} from "../components/User";
import {Page} from "../components/Page";
import {getPhotos} from "../actions/PageActions";

import '../index.css';


function App(props) {
    const {user, page, getPhotosAction} = props;
    return (
        <div className={'App'}>
            <Page
                year={page.year}
                photos={page.photos}
                getPhotos={getPhotosAction}
                isFetching={page.isFetching}
            />
            <User name={user.name}/>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
        page: store.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotosAction: (year) => dispatch(getPhotos(year))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
