import {ADD_TO_CALC, REMOVE_FROM_CALC} from './types'

export function addToCalc(name:string){
    return {
        type: ADD_TO_CALC,
        name: name
    }
}

export function removeFromCalc(){
    return {
        type: REMOVE_FROM_CALC
    }
}