import React from 'react'
import Card from './Card'

let cardlist:any[] = []

const CardList:React.FC = () => {
    
        for (let i:number = 0; i < 10; i++) {
            cardlist.push(<Card key={i} />)
        }

        return (
            <div className="row">
            <h3 className="header">Dishes and products</h3>
            <div className="col s6 m6 cardlist flexlist mt1">
                {cardlist}
            </div>
            </div>
        )
}

export default CardList