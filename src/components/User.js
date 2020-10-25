import React from 'react'
import PropTypes from 'prop-types'

export function User(props) {
    const {name} = props;
    return (
        <div>
            <p>Привет, {name}!</p>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
};