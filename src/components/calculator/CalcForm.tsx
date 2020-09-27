import React from 'react'
import CalcItem from './CalcItem'
import { useSelector } from 'react-redux'
import { IDish } from "../../interfaces/dishes"

  
interface IState {
    dishes: IDish[]
    dayLimit: number
}

export const LargeForm:React.FC = () => {

    const {dishes, dayLimit}: IState = useSelector((state: IState) => state);

    function calc(){
        let summ = 0
        dishes.map((item:any) => (item.calculated) ? summ = summ + item.calories: '')
        return summ
    }

    return (
        <div className="col s12">
            <ul className="collection">
                {dishes.map((item, i) => {
                    return (item.calculated) ? (<CalcItem {...item} key={i}/>) : ''
                })}
            </ul>
            <div className="row margin0 total p2">
                <span className="to-left">Your day limit: <strong className="f20">{dayLimit}</strong></span>
                <span className="to-right">In total: <strong className="f20">{calc()}</strong> calories.</span>
            </div>
        </div>
    )
}