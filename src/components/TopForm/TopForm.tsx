import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IState } from '../../interfaces';
import { useChangeLimit } from '../../redux/actions'

interface ILimit {
  dayLimit?: number
}

const TopForm:React.FunctionComponent<ILimit> = () => {
  const changeLimit = useChangeLimit();
  const { dayLimit } = useSelector((state:IState) => state);

  return (
    <div className="row">
      <div className="input-field">
        Please write your average waste of calories per day
        <input id="text" type="text" className="validate" placeholder="2400 for men, and 2000 for women" maxLength={4} onChange={(event) => { changeLimit(parseFloat(event.target.value)) }} value={dayLimit || ''} />
      </div>
    </div>
  )
}

export default TopForm