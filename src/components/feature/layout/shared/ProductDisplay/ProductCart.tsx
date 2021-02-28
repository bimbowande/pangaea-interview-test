import React,{FunctionComponent} from 'react';
import  {getCurrencySymbol} from  '../../../../utils/CurrencyList';
import {useSelector} from 'react-redux'

type ProductCartProps = {
 name:any,
 imgLink:string,
 price:any,
 AddToCart:()=>void
}

export const ProductCart: FunctionComponent<ProductCartProps> = ({name,price,imgLink,AddToCart}) =>{
   
    const currency = useSelector((state:any)=>state.currency);
    const currencyCode = currency[0].currency;
   return(<div className='product-card'>
        <a className='image-container'><img src={imgLink} alt = {'Text'}/></a>
        <div className='product-name'>
            <h3>{name}</h3>
            <p> from {getCurrencySymbol(currencyCode)} &nbsp;{price}</p>
        </div>
        <div className='add-to-cart'>
            <button onClick={()=>AddToCart()}>Add to Cart</button>
        </div>
    </div>
   )
}