import React from 'react'
import CardList from '../components/CardList'
import CaloriesForm from '../components/CaloriesForm'
import Title from '../components/Title'

const CalcPage: React.FC = () => (
    <div className="calc">
        <Title />
        <CaloriesForm />
        <CardList />
    </div>
)

export default CalcPage