import React, { useEffect, useState } from 'react'
import { CalcItem } from './CalcItem'
import { useSelector } from 'react-redux'
import { IState, IDish } from "../../interfaces"

export const CalcForm: React.FC = () => {

  const { dishes }: IState = useSelector((state: IState) => state);
  const [summ, setSumm] = useState(0);
  
  const calc = (items:IDish[]):number => {
    let summ = 0
    items.map((item: any) => (item.calculated) ? summ = summ + item.calories : '')
    return summ
  }

  useEffect(() => {
    setSumm(calc(dishes));
  },[dishes]);

  return (
    <div className="col s12">
      <ul className="collection">
      </ul>
      <div className="row margin0 total p2">
        <span className="to-right">In total: <strong className="f20">{ summ }</strong> calories.</span>
      </div>
    </div>
  )
}