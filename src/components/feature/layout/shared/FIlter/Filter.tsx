import React,{FunctionComponent}from 'react';
import {FlexContainer,Select} from '../../../../GlobalStyle';
import {headerText,paragraphText} from '../../../../../assets/css/typography'

export const Filter: FunctionComponent = ()=>{
    
        return (<section className='flex'>
                    <FlexContainer flex={1} direction="column">
                        <div>
                            <h3 style={headerText}>All Products</h3>
                            <p style={paragraphText}>A 360 Look at Lumin</p>
                        </div>
                    </FlexContainer>
                    <FlexContainer flex={2} direction="column">
                        <div className='border-show'>
                            <Select>
                                <option>Filter by</option> 
                            </Select>
                        </div>
                    </FlexContainer>
                </section>
                )
}