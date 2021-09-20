import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { IDishes } from '../../interfaces/dishes';
import { List, Radio } from 'antd';
import Card from './Card';
import { useSortBy } from '../../redux/reducers/sorting/actions';
import { collectCats, sortingProcessor } from './utils';

const CardList: React.FC<IDishes & {cat: string}> = (props: IDishes & {cat: string}) => {

  const sort = useSortBy('CATNAME');
  const cats = useMemo(()=> collectCats(props.dishes), [props.dishes]);
  const sorted = sortingProcessor(props.dishes, props.cat);

  return (
    <>
      <Radio.Group style={{marginBottom: '25px'}}>
        {cats.map((cat: string) => (
          <Radio.Button key={cat} value={cat} onClick={()=>sort(cat)}>{cat}</Radio.Button>
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
        dataSource={sorted}
        renderItem={dish => (
          <List.Item key={dish.idMeal}>
            <Card {...dish} />
          </List.Item>
        )
        }
      />
    </>
  )
}

const mapStateToProps = (state: any) => ({
  dishes: state.dishes,
  cat: state.sorting
})

// export default React.memo(connect(mapStateToProps)(CardList));
export default connect(mapStateToProps)(CardList);