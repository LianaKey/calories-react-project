import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'

export function toggleItem(name:string){
    return {
        type: TOGGLE_ITEM,
        name: name
    }
}

export function changeLimit(number:number){
    return {
        type: CHANGE_LIMIT,
        payload: number
    }
}