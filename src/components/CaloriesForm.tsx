import React from 'react'

const CaloriesForm:React.FC = () => (
    <div className="row">
            <div className="input-field">
                Please write your average waste of calories per day
                <input id="text" type="text" className="validate" placeholder="2400 for men, and 2000 for women" />
            </div>
    </div>
)

export default CaloriesForm