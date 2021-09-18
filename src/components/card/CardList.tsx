import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IDish, IDishes } from '../../interfaces/dishes'
import { List, Radio } from 'antd'
import Card from './Card'

const CardList: React.FC<IDishes> = (props: IDishes) => {

  function collectCats(dishes: any) {
    return dishes.reduce((outcome: string[], accum: IDish) => {
      !outcome.includes(accum.strCategory) && outcome.push(accum.strCategory)
      return outcome
    }
      , [])
  }
  const cats = collectCats(props.dishes);

  return (
    <>
      <Radio.Group style={{marginBottom: '25px'}}>
        {cats.map((cat: string) => (
          <Radio.Button value={cat}>{cat}</Radio.Button>
        ))}
      </Radio.Group>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={props.dishes}
        renderItem={dish => (
          <List.Item>
            <Card {...dish} />
          </List.Item>
        )
        }
      />
    </>
  )
}

const mapStateToProps = (state: any) => ({
  dishes: state.dishes
})

// export default React.memo(connect(mapStateToProps)(CardList));
export default connect(mapStateToProps)(CardList);