import React from 'react'
import Card from './Card'
import LargeForm from './CalcForm'
import {connect} from 'react-redux'

interface IDish {
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}
  

interface IDishes {
    dishes: IDish[]
}

const CardList:React.FC<IDishes> = (props:IDishes) => {
        return (
            <div className="row">
                <div className="col s6 m6 cardlist flexlist mt1">
                    <h3 className="header" >Dishes and products</h3>
                    {props.dishes.map((item, i) => {
                        return (<Card {...item} key={i}/>)
                    })}
                </div>
                <div className="col s6 m6 cardlist flexlist mt1">
                    <h3 className="header">Count here</h3>
                    <LargeForm />
                </div>
            </div>
        )
}

const mapStateToProps = (state:any) => ({
    dishes: state
})

export default connect(mapStateToProps)(CardList)