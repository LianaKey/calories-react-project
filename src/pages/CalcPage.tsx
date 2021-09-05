import React from 'react'
import CardList from '../components/Card/CardList'
import { TopForm } from './../components'
import Title from '../components/Title'
import { Toast } from 'react-materialize';

class CalcPage extends React.Component  {
  render () {
    return(
      <div className="calc">
        <Title />
        <TopForm />
        <CardList />
        <Toast
          options={{
            html: 'Here you go!'
          }}
        >
          Toast
        </Toast>
      </div>
    )
  }
}

export default CalcPage