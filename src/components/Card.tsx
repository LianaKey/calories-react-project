/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {connect} from 'react-redux'
import {toggleItem} from '../redux/actions'

interface IDish {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
    addCalc: Function;
}

let val:string = 'add';

const Card = (props:IDish) => {

    if (props.calculated === true) {
        val = 'remove';
    } else {
        val = 'add';
    }

    return(
        <div className="card col2">
            <div className="card-image">
                <img src={require(`./../assets/img/${props.photo}`)} alt={props.title} />
                <span className="card-title">{props.title}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{props.addCalc(props.title)}}>
                <i className="material-icons">{val}</i>
                </a>
            </div>
            <div className="card-content">
                <span className="calories"><strong>{props.calories} kcal</strong></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => ({
    addCalc(name:string) {
        return (
            dispatch(toggleItem(name))
        )
    }
})

export default connect(null, mapDispatchToProps)(Card)
// export default Card