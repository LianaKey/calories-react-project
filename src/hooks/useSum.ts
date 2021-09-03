import { IDishes } from "../interfaces"

export const calc = (dishes: IDishes) => {
  if (dishes instanceof Array) {
    let summ = 0
    dishes.map((item: any) => (item.calculated) ? summ = summ + item.calories : '')
    return summ
  }
}