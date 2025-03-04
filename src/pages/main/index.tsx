import React, { useEffect } from 'react';
import { Search, CardList } from '../../components';
import { useFetchDish } from '../../redux/dish/actions';

const MainPage = () => {
  const fetchDishes = useFetchDish('search');

  useEffect(() => {
    fetchDishes({ s: 'a' });
  }, []);

  return (
    <div className="calc">
      <Search />
      <CardList />
    </div>
  );
};

export default MainPage;
