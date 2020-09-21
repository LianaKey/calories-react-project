import React from 'react'
import Card from './Card'
import LargeForm from './CalcForm'

let cardlist:any[] = []


const CardList:React.FC = () => {

        for (let i:number = 0; i < 10; i++) {
            cardlist.push(<Card key={i} />)
        }

        return (
            <div className="row">
                <div className="col s6 m6 cardlist flexlist mt1">
                <h3 className="header" >Dishes and products</h3>
                    {cardlist}
                </div>
                <div className="col s6 m6 cardlist flexlist mt1">
                    <h3 className="header">Count here</h3>
                    <LargeForm />
                </div>
            </div>
        )
}

export default CardList