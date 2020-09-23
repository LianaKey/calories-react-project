import React from 'react'
import {connect} from 'react-redux'
import CalcItem from './CalcItem'

interface IDish {
    title: string;
    calories: number;
    calculated: boolean;
}
  

interface IDishes {
    dishes: IDish[]
    calc: Function
}


const LargeForm:React.FC<IDishes> = (props:IDishes) => (
    <div className="col s12">
        <ul className="collection">
            {
            props.dishes.map((item, i) => {
                if(item.calculated){
                    return(<CalcItem {...item} key={i} />)
                }
            })
            }
        </ul>
        <div className="row margin0 total ">
            <span className="to-left">Your day limit: <strong className="f20">0</strong></span>
            <span className="to-right">In total: <strong className="f20">{props.calc()}</strong> calories.</span>
        </div>
    </div>
)

const mapStateToProps = (state:any) => ({
    dishes: state,
    calc: function(){
        let summ = 0
        state.map((item:any) => (item.calculated) ? summ = summ + item.calories: '')
        console.log()
        return summ
    }
})

export default connect(mapStateToProps)(LargeForm)