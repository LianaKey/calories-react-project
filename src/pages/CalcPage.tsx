import React from 'react'
import CardList from '../components/CardList'
import TopForm from '../components/TopForm'
import Title from '../components/Title'

class CalcPage extends React.Component  {
    render () {
      return(
        <div className="calc">
            <Title />
            <CardList />
            <TopForm />
        </div>
      )
    }
}

export default CalcPage