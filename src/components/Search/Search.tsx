import React, {useRef, useState } from 'react'
import { IDish } from '../../interfaces';
import { useFetchDish } from '../../redux/actions'
import { useSearch } from './hooks/useSearch';
import { useAddStyles, onHoverProcessor } from '../../hooks/useAddStyles'


export const Search: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const searchItem = useRef<HTMLParagraphElement[]>([]);
  const dishes = useSearch(search);
  useFetchDish('search', { s: searchByName });

  const paragraph = {
    cursor: "pointer",
    padding: "10px 20px",
    margin: "0"
  }

  const styles = `
    backgroundColor: rgba(0, 0, 0, 0.3);;
    color: white;
  `;

  const onHoverHandler = useAddStyles(onHoverProcessor)(styles);

  const onSearchSelectHandler = (meal: string) => {
    setSearchByName(meal);
    setSearch('');
  }

  return (
    <div className="row">
      <div className="input-field">
        Find your favorite dish:
        <input onChange={(event) => { setSearch(event.target.value) }} value={search} />
        <div style={{ position: 'absolute', left: 0, top: '100%', zIndex: 2, backgroundColor: 'white', width: '100%', boxShadow: '1px 2px 4px gainsboro', borderRadius: '8px' }}>
          {dishes.map((dish: IDish, i) => (
            <p
              key={dish.idMeal}
              onClick={()=>onSearchSelectHandler(dish.strMeal)}
              style={paragraph}
              onMouseOver={onHoverHandler}
              onMouseLeave={onHoverHandler}
              ref={el => el ? searchItem.current[0] = el : '' }
            >{dish.strMeal}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
