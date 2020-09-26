import { IDish } from '../interfaces/dishes'
import { IMessage } from '../interfaces/reducers'
import M from 'materialize-css';

// --- Checks if calories reached limit ---
export function checkLimit(limit:number, dishes:IDish[], item:IDish, message: IMessage):void {

    let summ = dishes.reduce(function(total, dish):number{
        return (dish.calculated) ? ( total + dish.calories ) : total
    }, 0);

    if (limit < summ && limit) {
        item.calculated = false
        M.toast({html: message.limitReached})
    } else {
        M.toast({html: message.itemAdded})
    }

}