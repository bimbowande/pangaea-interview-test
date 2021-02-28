import React,{FunctionComponent}from 'react';
import {Sort} from '../FIlter/Sort';
import  {getCurrencySymbol,numberWithCommas} from  '../../../../utils/CurrencyList';
import {CartItem} from '../ProductDisplay/CartItem';
import {useSelector} from 'react-redux'


type CartProps ={
    onClick:()=>void,
    currency:string,
    dataProduct:any,
    price:any;
}
export const Cart : FunctionComponent<CartProps> = ({currency,dataProduct,onClick})=>{
    const items = useSelector((state:any)=>state.cart);


    const getAllPrice = (id:any,array:any)=>{
        let value = array.find((arr:any)=>arr.id === id);
        return value?.price;
    }

    const getTotaLprice = ()=>{
        let price:any = []
        items.map((d:any)=>{
            price.push( d.quantity * getAllPrice(d.id,dataProduct))
        })
        return price.reduce(function(acc:any, val:any) { return acc + val; }, 0)
    }

    return(
      
        <div className='cart-container'>
                <div className='side-nav'>
                    <div className='header'>
                        <div className='icon-holder'>
                            <span><i onClick={()=>{onClick()}}
                            className="fas fa-chevron-right"></i></span>
                        </div>
                        <div className='thumbnail'>
                            Your Cart
                        </div>
                    </div>
                    <Sort/>
                    <div className='form'>
                        <div className='cart-header'>
                           
                            </div>
                        <div className='cart-display'>
                            {items?.length ? items.map((detail:any)=><CartItem Itemprice={getAllPrice(detail.id,dataProduct)} fullDetail={detail} quantity={detail.quantity} title={detail.title} id={detail.id} image={detail.image_url} currency={currency} dataProduct={dataProduct}/>)
                            :<h5 className='text-center'>There are no items in your cart.</h5>}
                            
                        </div>

                        </div>
                        {items.length > 0 &&
                        <div className='add-to-cart cart-2'>
                            
                            <div className='price-display'>
                                <h4>Total</h4>
                                <h3 className='price-total'>{getCurrencySymbol(currency)} {numberWithCommas(getTotaLprice())}</h3>
                            </div>
                            
                           {items.length > 0 &&  <button>PROCEED TO CHECKOUT</button>}
                        </div>
                        }
                    </div>
            </div>
    )
}