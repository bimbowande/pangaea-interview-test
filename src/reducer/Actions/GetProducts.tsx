import { combineReducers } from 'redux'
import {UPDATE_CURRENCY} from '../Constants/GetProducts';

import {ADD_TO_CART,INCREMENT,DECREMENT,REMOVE_FROM_CART} from '../Constants/GetProducts'
/**
 *  get all products
 */


export function updateCurrency(currency:any){
    return{
        type:UPDATE_CURRENCY,
        currency
    }
}



 const defaultCurrency:any = [{
    currency:'NGN'
 }];


 export function addtoCart(product:any){
    return {
        type: ADD_TO_CART,
        product
    }
 }

 export function removeFromCart(product:any){
    return {
        type: REMOVE_FROM_CART,
        product
    }
 }

 export function increment(product:any){
     return {
         type:INCREMENT,
         product
     }
 }
 export function decrement(product:any){
    return {
        type:DECREMENT,
        product
    }
}
 
const defaultCart: any = []




 function currency(state = defaultCurrency,action:any){
    switch(action.type){
        
        case UPDATE_CURRENCY :
            return[
                {currency:action.currency}
            ];
        default:
            return state
    }
 }


 function cart (state = defaultCart,action:any){
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,{...action.product,quantity:1}
            ];

        case INCREMENT:
            const cart = state.find((b:any)=>action.product.id === b.id);
            const otherItems = state.filter((b:any)=>action.product.id !== b.id);
            return [
                ...otherItems,{
                    ...cart, quantity:(cart.quantity || 0) + 1
                }
            ];
            case DECREMENT:
            const cart1 = state.find((b:any)=>action.product.id === b.id);
            const otherItems1 = state.filter((b:any)=>action.product.id !== b.id);
            if(cart1.quantity === 1){
                
                return [...otherItems1]
                //return {...state, ...state.splice(index,0)}
            }

           else{
            return [
                ...otherItems1,{
                    ...cart1, quantity:cart1.quantity - 1
                }
            ];
            }
            default:
                return state
    }
 }


   const reducerFunc = combineReducers({
     currency,cart
  })

export default reducerFunc