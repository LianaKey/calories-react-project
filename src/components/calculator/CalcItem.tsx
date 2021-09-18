import React from 'react'
import { IDish } from '../../interfaces'

export const CalcItem = (props:IDish) => {
    return (
        <li className="collection-item">
            <div>
                {props.strMeal}
                <div className="secondary-content">
                    <i className="material-icons red-text text-darken-3 pointer">close</i>
                </div>
            </div>
        </li>
    )
}
