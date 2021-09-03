/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useToggleItem } from '../../redux/actions'
import { IDish } from '../../interfaces/dishes'
import { Col, Card, CardTitle, Icon, Button } from 'react-materialize'

let val: string = 'add';
let color: string = 'blue';

const CardImage = (props: IDish) => {

  if (props.calculated) {
    val = 'remove';
    color = 'red';
  } else {
    val = 'add';
    color = 'blue';
  }

  let defaultClass: string = 'btn-floating halfway-fab waves-effect waves-light';
  let classList: string = defaultClass.concat(' ', color);

  const toggleItem = useToggleItem();

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
              onClick={() => { toggleItem(props.id) }}
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

export default CardImage;
