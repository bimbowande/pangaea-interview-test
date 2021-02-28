

import React,{FunctionComponent} from 'react';
import {ProductCart} from '../ProductDisplay/ProductCart'


type ProductProps = {
    productList: any
}

export const ProductDisplay: FunctionComponent<ProductProps> = ({productList})=>
    <div className='product-display'>
        <div className='product-display-container'>   
         {
            productList && productList.map(
                (product:any) => <ProductCart AddToCart={()=>{}} imgLink={product.image_url} name={product.title} price={product.price}/>
            )
        } 
          </div>
    </div>
