import { useDispatch } from 'react-redux'
import { ActionType } from './types'

export function useToggleItem() {
  const dispatch = useDispatch();
  
  return (id: number) => {
    dispatch ({
      type: ActionType.TOGGLE_ITEM,
      payload: id
    })
  }
}

export function useChangeLimit() {
  const dispatch = useDispatch();

  return (number: number) => {
    dispatch ({
      type: ActionType.CHANGE_LIMIT,
      payload: number
    })
  }
}