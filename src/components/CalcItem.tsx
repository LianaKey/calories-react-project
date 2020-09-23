import React from 'react'

interface IDish {
    title: string;
    calories: number;
    calculated: boolean;
}

export const CalcItem = (props:IDish) => (
    <li className="collection-item">
        <div>
            {props.title}
            <div className="secondary-content">
                <strong>{props.calories} kcal</strong>
                <i className="material-icons red-text text-darken-3">close</i>
            </div>
        </div>
    </li>
)