import { useDispatch } from "react-redux";

export enum SortBy {
    CATNAME = 'SORT_BY_CATNAME',
    AREA = 'SORT_BY_AREA'
}

export function useSortBy(sortby: keyof typeof SortBy) {
    const dispatch = useDispatch();
  
    return (name: string) => {
      dispatch ({
        type: SortBy[sortby],
        payload: name
      })
    }
}