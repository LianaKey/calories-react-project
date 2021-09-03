import { useDispatch } from 'react-redux'
import { TOGGLE_ITEM, CHANGE_LIMIT } from './types'



export function useToggleItem() {
  const dispatch = useDispatch();
  
  return (id: number) => {
    dispatch ({
      type: TOGGLE_ITEM,
      payload: id
    })
  }
}

export function useChangeLimit() {
  const dispatch = useDispatch();

  return (number: number) => {
    dispatch ({
      type: CHANGE_LIMIT,
      payload: number
    })
  }
}