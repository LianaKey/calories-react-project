import React from 'react'
import CardList from '../components/CardList'
import CaloriesForm from '../components/CaloriesForm'
import Title from '../components/Title'

function handleClick(event: MouseEvent) {
    event.preventDefault();
    console.log('The link was clicked.');
}

class CalcPage extends React.Component  {

    constructor(props:any) {
        super(props)
        this.addHandler = this.addHandler.bind(this)
    }

    addHandler(event: React.MouseEvent) {
        console.log('The link was clicked.');
    }
  
    render () {
      return(
        <div className="calc" onClick={this.addHandler}>
            <Title />
            <CaloriesForm />
            <CardList {...this.addHandler} />
        </div>
      )
    }
}

export default CalcPage