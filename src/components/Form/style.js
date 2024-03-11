import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content: center; 
    width:369px;
    padding:20px;
    gap:16px;
`
export const Inputs =styled.input`
    width: 329px;
    background-color:var(--color-grey2);
    padding:10px;
    color:var(--color-grey0);
    border:none;
    border-radius:4px;

    &:focus  {
        border:solid 1px;
        color:var(--color-grey0);
    }
`

export const Label = styled.label`
        
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey0);
        align-self: first baseline;

`
export const Button = styled.button`
        width: 329px;
        padding:10px;
        color:var(--color-grey0);
        border:none;
        border-radius: 4px;
        gap: 22px;
        cursor:pointer;
      


${({buttonstyle})=>{
    if(buttonstyle ==='login'){
        return css`
        background-color:var(--color-primary);
        &:hover{
            background-color:var(--color-primary-focus);
        }
        `
    }else if(buttonstyle === 'register'){
        return css`
        background-color:var(--color-grey1);
        & :hover{
            backgorund-color:var(--color-grey0)
        }
        `
    }else if(buttonstyle === 'new_register'){
        return css`
         background-color:var(--color-primary-negative);
       
        `
    }
  }}      
`

export const Select = styled.select`
     width: 329px;
    background-color:var(--color-grey2);
    padding:10px;
    color:var(--color-grey0);
    border:none;
    border-radius:4px;

    &:focus  {
        border:solid 1px;
        color:var(--color-grey0);
    }
`


export const LinkStyle = styled(Link)`
    font-size: 12px;
    color:var(--color-grey1);
    
`
export const ErroStyle= styled.p`
    color: var(--color-negative);
    font-weight: 500;
    font-size: 12px;
`