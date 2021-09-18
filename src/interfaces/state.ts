import { IDish } from "./dishes"

export interface IState {
  dishes: IDish[];
  search: string;
  message: string;
}