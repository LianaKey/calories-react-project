import React from 'react'
import {connect} from 'react-redux'
import {changeLimit} from '../redux/actions'

interface ILimit {
    dayLimit?: number
    changeLimit: Function
}

class TopForm extends React.Component<ILimit> {
    static defaultProps = {
        dayLimit: 0,
        changeLimit: function(){}
    }

    render() {
        return(
            <div className="row">
                <div className="input-field">
                    Please write your average waste of calories per day
                    <input id="text" type="text" className="validate" placeholder="2400 for men, and 2000 for women" onChange={(event)=>{this.props.changeLimit(event.target.value)}} value={this.props.dayLimit || ''}/>
                </div>
            </div>
        )}
}

const mapStateToProps = (state:any) => ({
    dayLimit: state.dayLimit
})

const mapDispatchToProps = (dispatch:any) => ({
    changeLimit(item:number) {
        return (
            dispatch(changeLimit(item))
        )
    }
})



export default connect<any,any, {}>(mapStateToProps, mapDispatchToProps)(TopForm)