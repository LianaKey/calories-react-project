import React from 'react'
import {connect} from 'react-redux'
import {toggleItem } from '../../redux/actions'

interface IDish {
    title: string;
    calories: number;
    calculated: boolean;
}

const CalcItem = (props:IDish & { removeCalc: Function }) => (
    <li className="collection-item">
        <div>
            {props.title}
            <div className="secondary-content">
                <strong>{ props.calories } kcal</strong>
                <i className="material-icons red-text text-darken-3 pointer" onClick={()=>{props.removeCalc(props.title)}}>close</i>
            </div>
        </div>
    </li>
)
const mapDispatchToProps = (dispatch:any) => ({
    removeCalc(name:string) {
        return (
            dispatch(toggleItem(name))
        )
    }
})
export default connect(null,mapDispatchToProps)(CalcItem)