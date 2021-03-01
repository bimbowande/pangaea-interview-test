import React,{FunctionComponent}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import  {getCurrencySymbol} from  '../../../../utils/CurrencyList';
import {increment,decrement} from '../../../../../reducer/Actions/GetProducts'
type CartProps ={
    id:any,
    Itemprice:any,
    image:any;
    title:any;
    fullDetail:any,
    currency:any;
    dataProduct: any;
    quantity:any
    
}
export const CartItem:FunctionComponent<CartProps> = ({ fullDetail,title,id,currency,quantity,dataProduct,Itemprice,image})=>{
    const currencyVal = useSelector((state:any)=>state.currency);
    const currencyCode = currencyVal[0].currency; 

    const dispatch = useDispatch();
    // const getDataInfo =(id:any) =>{
    //     const value = dataProduct.find((data:any)=>data.id = id);
    //     return value?.price;
    // }
    const numberWithCommas  = (x:any) => {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        
        <div className='cart-display-item'>
           
            <div className='text'>
                {/* {CartDetail} */}
                <h5>{title}</h5>
                <h3>{getCurrencySymbol(currencyCode)} {numberWithCommas(Itemprice * quantity) }</h3>
                
                <div className='product-add-container'>
                    <div className='product-add'>
                        <h3 className='cart-action' onClick={()=>{
                            dispatch(decrement(fullDetail))
                        }}>-</h3>  
                            <h3>{quantity}</h3> 
                            <h3 className='cart-action' onClick={()=>{
                            dispatch(increment(fullDetail))
                        }}>+</h3>
                        
                    </div>
                    
                </div>
            </div>
            <div className='image-section-display'>
                <img src={image} alt={'item display'}/>
            </div>
        </div>
    )
}