import React, { useState } from 'react'
import { IDish } from '../../interfaces'
import { Card as AntCard } from 'antd'

const Card = function (dish: IDish) {
  const [toggle, setToggle] = useState(false)

  return (
    <AntCard
      onClick={() => setToggle(!toggle)}
      title={dish.strMeal}
      cover={<img src={dish.strMealThumb} alt={dish.strMeal} />}
    >
      {dish.strCategory}
    </AntCard>
  )
}

export default Card
