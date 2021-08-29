import { IDish } from './dishes'

export interface IMessage {
  [key: string]: string
}

export interface IState {
  dishes: IDish[];
  dayLimit: number;
  message: IMessage;
}