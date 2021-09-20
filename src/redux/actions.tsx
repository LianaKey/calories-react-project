import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { IDishes } from '../interfaces';

export enum ActionType {
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  CHANGE_LIMIT = 'CHANGE_LIMIT',
  FETCH_DISHES = 'FETCH_DISHES',
  SORT_BY_CATNAME = 'SORT_BY_CATNAME',
}

export function useToggleItem() {
  const dispatch = useDispatch();
  
  return (id: number) => {
    dispatch ({
      type: ActionType.TOGGLE_ITEM,
      payload: id
    })
  }
}

export function useSearch() {
  const dispatch = useDispatch();

  return (input: string) => {
    dispatch ({
      type: ActionType.CHANGE_LIMIT,
      payload: input
    })
  }
}

const mapRequests = {
  latest: 'latest',
  search: 'search'
}

interface Query {
  [key: string]: string
}

export function useFetchDish(url: keyof typeof mapRequests | '', query?:Query) {
  const dispatch = useDispatch();
  Axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  let esc = encodeURIComponent;
  let queryString = '';
  if (query) {
    queryString = Object.keys(query)
      .map(k => esc(k) + '=' + esc(query[k]))
      .join('&');
  }

  useEffect(() => {
    Axios.get(`${url}.php` + (queryString && `/?${queryString}`)).then((response)=>{
      console.log(response);
      dispatch({
        type: ActionType['FETCH_DISHES'],
        payload: response.data.meals
      });
    }).catch((error)=>{
      throw new Error(error);
    });
  }, [url, query]);
}