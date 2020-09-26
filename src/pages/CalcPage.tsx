import React from 'react'
import CardList from '../components/card/CardList'
import TopForm from './../components/form_limit/TopForm'
import Title from '../components/Title'

class CalcPage extends React.Component  {
    render () {
      return(
        <div className="calc">
            <Title />
            <TopForm />
            <CardList />
        </div>
      )
    }
}

export default CalcPage