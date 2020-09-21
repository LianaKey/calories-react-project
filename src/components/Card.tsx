/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface IDish {
    title: string;
    calories: string;
    description: string;
    photo: string;
    recommend: string;
}

const Card = (props:IDish) => {
    return(
        <div className="card col2">
            <div className="card-image">
            <img src={require(`./../assets/img/${props.photo}`)} alt={props.title} />
            <span className="card-title">{props.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card