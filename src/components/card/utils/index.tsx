import { IDish } from "../../../interfaces";

export function collectCats(dishes: any) {
    const catnames = dishes.reduce((outcome: string[], accum: IDish) => {
      !outcome.includes(accum.strCategory) && outcome.push(accum.strCategory)
      return outcome
    }, []);
    catnames.unshift('ALL');
    return catnames;  
}

export const sortingProcessor = (dishes: IDish[], cat: string) => {
    return cat !== (''||'ALL') ? dishes.filter(d=>d.strCategory === cat) : dishes
}