import React from 'react';
import CardList from '../../components/Card/CardList';
import { Search } from '../../components';
import { useFetchDish } from '../../redux/actions'

const MainPage = () => {
  useFetchDish('search', {s:'a'});

  return (
    <div className="calc">
      <Search />
      <CardList />
    </div>
  )
}

export default MainPage