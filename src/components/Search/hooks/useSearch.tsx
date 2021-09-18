import Axios from 'axios'
import { useEffect, useState } from 'react';

const mapRequests = {
  latest: 'latest',
  search: 'search'
}

interface Query {
  [key: string]: string;
}

export function useSearch(searchString:string) {
  const [dishes, setDishes] = useState([]);
  Axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    if(searchString.length < 1){
      setDishes([]);
      return;
    };
    Axios.get(`${mapRequests.search}.php/?s=${searchString}`).then((response)=>{
      let data = response.data.meals;
      if (!data){
        setDishes([]);
      } else if (data.length > 9) {
        setDishes(data.slice(0, 9));
      } else {
        setDishes(data);
      }
    }).catch((error) => {
      throw new Error(error);
    });
  }, [searchString]);

  return dishes || [];
}
