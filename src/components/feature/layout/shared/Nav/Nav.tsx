
import React,{FunctionComponent} from 'react';
import {useSelector} from 'react-redux';

import {NavContainer,FlexContainer} from '../../../../GlobalStyle';

type NavProps = {
    onClick:()=>void,
    lists:string[]
    title:string,
}

 export const Nav:FunctionComponent<NavProps> =({title,lists,onClick}) => {
    const items = useSelector((state:any)=>state.cart);
    const getQuantity = () => {
        let quantity:any = []
        items.map((d:any)=>{
            quantity.push( d.quantity);
        })
        return quantity.reduce(function(acc:any, val:any) { return acc + val; }, 0)
    }
    return(
 <div>

    <NavContainer>
        <FlexContainer wordspacing={15} flex={1}><p className='word-space'>{title}</p></FlexContainer>
        <FlexContainer justify="flex-start"direction="row" flex={3}>{lists.map((list,key)=><li key={key}>{list}</li>)}</FlexContainer>
        <FlexContainer justify="center"  flex={2}>
            <div className='nav-option'>
                <span>Account</span>
                <span className='cart-display' onClick={()=>{onClick()}}><i className="fas fa-shopping-cart"></i><span className='quantity-tag'>{getQuantity()}</span></span>
            </div>
        </FlexContainer>
    </NavContainer>
</div>
 )
 }
;