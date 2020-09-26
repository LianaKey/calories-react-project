import { IDish } from './dishes'

export interface IState {
    dishes: IDish[];
    dayLimit: number;
    message: IMessage;
}

export interface IMessage {
    [key: string]: string
}