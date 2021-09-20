import { useDispatch } from "react-redux";

export enum Search {
    SEARCH_DISH = 'CHANGE_LIMIT',
}

export function useSearch() {
    const dispatch = useDispatch();
  
    return (input: string) => {
      dispatch ({
        type: Search.SEARCH_DISH,
        payload: input
      })
    }
  }