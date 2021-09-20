import { IDish } from "../../../interfaces";
import { SortBy } from "../../../redux/sorting/actions";

export function collectCats(dishes: any) {
  if(!dishes) return [];

  const catnames = dishes.reduce((outcome: string[], accum: IDish) => {
    !outcome.includes(accum.strCategory) && outcome.push(accum.strCategory)
    return outcome
  }, []);
  catnames.unshift('ALL');
  return catnames;
}



export const sortingProcessor = (dishes: IDish[], sorting:any ) => {
  if (Object.keys(sorting).length === 0) return dishes;

  for (let key in sorting) {
    switch (key) {
      case SortBy.CATNAME:
        return sorting[key] !== 'ALL' ? dishes.filter(d=>d.strCategory === sorting[key]) : dishes
      default:
        return dishes;
    }
  }
  
}