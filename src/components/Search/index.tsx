import React, { useState } from 'react';
import { useFetchDish } from '../../redux/dish/actions';
import _ from 'lodash';

export const Search: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const fetchDish = useFetchDish('search', { s: search });
  const debaunceFetch = React.useMemo(() => {
    console.log('debaunce fired');
    return _.debounce(fetchDish, 500);
  }, []);

  const onChangeHandler = (event: any) => {
    setSearch(event.target.value);
    debaunceFetch();
  };

  return (
    <div className="row">
      <div className="input-field">
        Find your favorite dish:
        <input onChange={onChangeHandler} value={search} />
      </div>
    </div>
  );
};
