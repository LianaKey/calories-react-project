import axios from "axios";
import { useDispatch } from "react-redux";

export enum Dishes {
  FETCH_DISHES = 'FETCH_DISHES'
}

interface mapRequests {
  latest: string;
  search: string;
}

interface Query {
  [key: string]: string
}

export function useFetchDish(url: keyof mapRequests | '', query?: Query) {
  const dispatch = useDispatch();
  axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  let esc = encodeURIComponent;
  let queryString = '';

  if (query) {
    queryString = Object.keys(query)
      .map(k => esc(k) + '=' + esc(query[k]))
      .join('&');
  }

  return () => {
    axios.get(`${url}.php` + (queryString && `/?${queryString}`)).then((response) => {
      const payload = response.data.meals || []
      dispatch({
        type: Dishes['FETCH_DISHES'],
        payload
      });
    }).catch((error) => {
      throw new Error(error);
    });
  }
}