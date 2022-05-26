import React from 'react';
import { debounce } from 'lodash';
import { useFetchDish } from '../../redux/dish/actions';
import { useComponentDidUpdate } from '../../hooks/useComponentDidUpdate';

export const Search: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const debouncedFetch = React.useCallback(
    debounce(useFetchDish('search'), 500),
    []
  );

  useComponentDidUpdate(() => {
    debouncedFetch({ s: searchKeyword });
  }, [searchKeyword]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.currentTarget.value);
  };

  return (
    <div className="row">
      <div className="input-field">
        Find your favorite dish:
        <input onChange={onChangeHandler} value={searchKeyword} />
      </div>
    </div>
  );
};
