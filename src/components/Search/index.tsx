import React, { useState } from 'react';
import { useFetchDish } from '../../redux/dish/actions';
import _ from 'lodash';


export const Search: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [fetchtrigger, fireTrigger] = useState('');
  const fetchDish = useFetchDish('search', { s: search });
  const setDebaunceSearch = React.useCallback(_.debounce((value)=>{
    fireTrigger(value);
  }, 500), []);

  React.useEffect(() => {
    fetchDish();
  }, [fetchtrigger]);

  const onChangeHandler = (event:any) => {
    setSearch(event.target.value);
    setDebaunceSearch(event.target.value); 
  }

  return (
    <div className="row">
      <div className="input-field">
        Find your favorite dish:
        <input onChange={(event)=>onChangeHandler(event)} value={search} />
      </div>
    </div>
  )
}
