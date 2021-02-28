import styled from 'styled-components';
import {bgColor} from './Root'

type FlexProps = {
    flex:number,
    align?:string;
    direction?:string
    wordspacing?:any;
    justify?:any
}

export const NavContainer  = styled.div`
    background-color: ${bgColor.bgColor1};
    padding:.9rem;
    display:flex;
    box-shadow: 0 2px 3px -3px grey;

    
` 


export const FlexContainer = styled.div<FlexProps>`
  letter-spacing:${props => props.wordspacing}px;
  justify-content:${props => props.justify};
  display:flex;
  align-items: center;
  flex:${props => props.flex};
  position:relative;
  flex-direction:${props=>props.direction};
   
  @media (max-width: 768px) {
      font-size:.84rem !important;
      font-weight:300 !important;
  }
}
`

export const Select =  styled.select`
    width: 300px;
`
