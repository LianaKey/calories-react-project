import React from 'react'
import Pizza from '../assets/img/pizza.jpg'

const Card = () => (
    <div className="card col2">
        <div className="card-image">
        <img src={Pizza} />
        <span className="card-title">Pepperoni Pizza</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
    </div>
)

export default Card