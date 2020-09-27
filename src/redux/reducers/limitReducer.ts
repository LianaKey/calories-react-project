import {CHANGE_LIMIT} from './../types'

export const dayLimit = (state: number = 0, action?: any) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return action.payload
        default:
            return state
    }
}