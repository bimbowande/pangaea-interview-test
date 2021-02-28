import React,{FunctionComponent}from 'react';
import { GetAllCurrency} from  '../../../../../graphQL/Product';
import {Select} from '../../../../GlobalStyle';
import {useDispatch} from 'react-redux';
import { useQuery} from '@apollo/react-hooks';
import {updateCurrency} from '../../../../../reducer/Actions/GetProducts'


export const Sort: FunctionComponent = ({})=>{
    //const [currencyCode,changeCurrency] = useState('');
    const dispatch = useDispatch();
    const  { data, loading, error }= useQuery(GetAllCurrency);
    const allC = data && data.currency

    return(
        <div className='sort-section'>
            <Select onChange={(e)=>{
               
                dispatch(updateCurrency(e.target.value));
            }}>
                <option value='NGN'>NGN</option>
                { allC && allC.map((currency:any,key:any)=> <option key={key} value={currency}>{currency}</option>)}
                
            </Select>
        </div>
    )
   
}