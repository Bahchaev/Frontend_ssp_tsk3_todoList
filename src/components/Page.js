import React from 'react'
import PropTypes from 'prop-types'

export function Page(props) {
    const onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        props.getPhotos(year)
    };
    const {year, photos, isFetching} = props;
    return (
        <div className={"ib page"}>
            <p>
                <button className={"btn"} onClick={onBtnClick}>2018</button>
                <button className={"btn"} onClick={onBtnClick}>2017</button>
                <button className={"btn"} onClick={onBtnClick}>2016</button>
                <button className={"btn"} onClick={onBtnClick}>2015</button>
                <button className={"btn"} onClick={onBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото</p>}
        </div>
    )
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
};