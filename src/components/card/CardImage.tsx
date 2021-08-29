/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { connect } from 'react-redux'
import { toggleItem } from '../../redux/actions'
import { IDish } from '../../interfaces/dishes'

import { Col, Card, CardTitle, Icon, Button } from 'react-materialize'

let val: string = 'add';
let color: string = 'blue';

const CardImage = (props: IDish & { addCalc: Function }) => {

  if (props.calculated) {
    val = 'remove';
    color = 'red';
  } else {
    val = 'add';
    color = 'blue';
  }

  let defaultClass: string = 'btn-floating halfway-fab waves-effect waves-light';
  let classList: string = defaultClass.concat(' ', color);

  return (
    <Col m={6}>
      <Card
        header= {
          <CardTitle image={require(`../../assets/img/${props.photo}`)}>
            { props.title }
            <Button
              key="1"
              className={classList}
              floating
              icon={<Icon>{val}</Icon>}
              large
              node="button"
              waves="light"
              onClick={() => { props.addCalc(props.id) }}
            />
          </CardTitle>
        }
      >
        <span className="calories"><strong>{props.calories} kcal</strong></span>
        <p>{props.description}</p>
      </Card>
    </Col>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  addCalc(id: number) {
    return (
      dispatch(toggleItem(id))
    )
  }
})

export default connect(null, mapDispatchToProps)(CardImage)
// export default Card