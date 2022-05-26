import React, { useState } from 'react';
import { debounce } from 'lodash';
import { useFetchDish } from '../../redux/dish/actions';

export const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const debouncedFetch = React.useCallback(
    debounce(useFetchDish('search'), 500),
    []
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    debouncedFetch({ s: search });
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
