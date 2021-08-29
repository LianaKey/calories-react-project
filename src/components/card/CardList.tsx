import React from 'react'
import CardImage from './CardImage'
import { LargeForm } from './../calculator/CalcForm'
import { connect } from 'react-redux'
import { IDishes } from '../../interfaces/dishes'

const CardList:React.FC<IDishes> = (props:IDishes) => {
        return (
            <div className="row">
                <div className="col s12 m6 cardlist flexlist mt1">
                    <h3 className="header" >Dishes and products</h3>
                    {props.dishes.map((item, i) => <CardImage {...item} key={i} />)}
                </div>
                <div className="col s12 m6 cardlist flexlist mt7">
                    <LargeForm />
                </div>
            </div>
        )
}

const mapStateToProps = (state:any) => ({
    dishes: state.dishes
})

export default connect(mapStateToProps)(CardList)