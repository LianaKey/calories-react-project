import {TOGGLE_ITEM, CHANGE_LIMIT} from './types'

export function toggleItem(id:number){
    return {
        type: TOGGLE_ITEM,
        id: id
    }
}

export function changeLimit(number:number){
    return {
        type: CHANGE_LIMIT,
        payload: number
    }
}