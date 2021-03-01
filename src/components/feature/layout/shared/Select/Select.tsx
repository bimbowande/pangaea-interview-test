import React,{FunctionComponent}from 'react';


type  SelectProps ={
    option:any;
} 
export const Select: FunctionComponent<SelectProps> = ({option})=>{
   
    return(
        
        <div className='form-data'>
            {option && option.map((o:any)=>{
                <div className='form-input-group'>
                    <label>{o.title}</label>
                    <select></select>
                </div>
            })}
        </div>
    )
}

