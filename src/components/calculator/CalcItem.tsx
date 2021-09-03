import React from 'react'
import { useToggleItem } from '../../redux/actions'
import {IDish} from '../../interfaces/dishes'

export const CalcItem = (props:IDish) => {
    const toggleItem = useToggleItem();

    return (
        <li className="collection-item">
            <div>
                {props.title}
                <div className="secondary-content">
                    <strong>{ props.calories } kcal</strong>
                    <i className="material-icons red-text text-darken-3 pointer" onClick={()=>{ toggleItem(props.id) }}>close</i>
                </div>
            </div>
        </li>
    )
}
