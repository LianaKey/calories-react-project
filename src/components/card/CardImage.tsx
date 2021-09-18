import React from 'react'
import { IDish } from '../../interfaces/dishes'
import { Col, Card, CardTitle, Icon, Button } from 'react-materialize'

let val: string = 'add';
let color: string = 'blue';

const CardImage = (props: IDish) => {

  let defaultClass: string = 'btn-floating halfway-fab waves-effect waves-light';
  let classList: string = defaultClass.concat(' ', color);

  return (
    <Col m={3}>
      <Card
        header= {
          <>
            <CardTitle image={props.strMealThumb}>
              { props.strMeal }
            </CardTitle>
            <Button
              key="1"
              className={classList}
              floating
              icon={<Icon>{val}</Icon>}
              large
              node="button"
              waves="light"
            />
          </>
        }
      >
        <p>{props.strInstructions}</p>
      </Card>
    </Col>
  )
}

export default CardImage;
