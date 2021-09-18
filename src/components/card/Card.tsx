import React, { useState } from 'react'
import { IDish } from '../../interfaces'
import { Card as AntCard } from 'antd'

const Card = function(dish: IDish) {
    const [toggle, setToggle] = useState(false);
    
    const style = {
        cursor: "pointer",
        padding: toggle ? "10px" : ''
    }

    return (
        <AntCard
            onClick={()=>setToggle(!toggle)}
            title={dish.strMeal}
            cover={<img src={dish.strMealThumb}
            alt={dish.strMeal}
            style={style}
        />}>{dish.strCategory}</AntCard>
    )
};



export default Card
