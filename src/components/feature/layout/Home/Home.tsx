import React,{FunctionComponent,useState} from 'react';
import {Nav} from '../shared/Nav/Nav';
import {Filter} from '../shared/FIlter/Filter';
import {FilterByCurrency} from  '../../../../graphQL/Product';
import { useQuery} from '@apollo/react-hooks';
import {useDispatch, useSelector} from 'react-redux'
import {Container} from '../../../../assets/css/Container';
import {ProductCart} from '../../layout/shared/ProductDisplay/ProductCart';
import {Cart} from '../../layout/shared/ProductDisplay/Cart';
import {addtoCart, increment} from '../../../../reducer/Actions/GetProducts'



export const Home: FunctionComponent = () => {
    
    const [products, updateProducts] = useState([])
    const [overlay,setOverlay] = useState(false);
    const [currentProduct,updateProduct] = useState<any>([]);
    const item = useSelector((state:any)=>state.cart);
    const dispatch = useDispatch();
    //console.log('cart',item);
    //store call
    const currencyCode = useSelector((state:any)=>state.currency);
    
    const code = currencyCode[0].currency;
    const { loading, error }= useQuery(FilterByCurrency(code),{ onCompleted: (data) => updateProducts(data.products) });
    const doAddToCart = (product:any)=>{
        setOverlay(!overlay);
        //console.log(currentProduct);
        const checkList =  item.find((data:any)=>data.id === product.id);
        console.log(checkList)
        if (checkList){
            dispatch(increment(product))
        }
        else{
            dispatch(addtoCart(product));
        }
    }
        

    
    return(
        
        <div style = {Container}>
           
            <Nav onClick={()=>setOverlay(!overlay)} title="LUMIN" lists={['Shop','learn']}/>
            <Filter/>
            {/* {data && <ProductDisplay productList={data.products}/>} */}
            <div className='product-display'>
                <div style={{overflow : overlay ? 'hidden':'scroll'}} className={`product-display-container`}>   
                {
                   products &&  products.map(
                        (product:any,key:any) => <ProductCart key={key} AddToCart={()=>doAddToCart(product)} imgLink={product.image_url} name={product.title} price={product.price}/>
                    )
                } 
                </div>
            </div>

             <div className={`beforeanime ${overlay && 'container'}` } style={{display:overlay ? 'block':'none'}}>
                { currentProduct && <Cart  price={products} dataProduct={products}  currency={code}  onClick={()=>{setOverlay(!overlay)}}/>}
            </div> 
        </div>
    )

}