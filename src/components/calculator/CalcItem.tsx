import React from 'react'
import {connect} from 'react-redux'
import {toggleItem } from '../../redux/actions'
import {IDish} from '../../interfaces/dishes'

const CalcItem = (props:IDish & { removeCalc: Function }) => (
    <li className="collection-item">
        <div>
            {props.title}
            <div className="secondary-content">
                <strong>{ props.calories } kcal</strong>
                <i className="material-icons red-text text-darken-3 pointer" onClick={()=>{props.removeCalc(props.id)}}>close</i>
            </div>
        </div>
    </li>
)
const mapDispatchToProps = (dispatch:any) => ({
    removeCalc(id:number) {
        return (
            dispatch(toggleItem(id))
        )
    }
})
export default connect(null,mapDispatchToProps)(CalcItem)