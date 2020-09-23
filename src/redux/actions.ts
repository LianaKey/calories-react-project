import {TOGGLE_ITEM} from './types'

export function toggleItem(name:string){
    return {
        type: TOGGLE_ITEM,
        name: name
    }
}