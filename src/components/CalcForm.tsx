import React from 'react'
import {connect} from 'react-redux'
import {CalcItem} from './CalcItem'

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
        <span className="to-right">In total: <strong>{props.calc()}</strong> calories.</span>
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