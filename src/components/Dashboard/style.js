import styled, { css } from "styled-components";

export const SectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top:100px ;
`

export const DivStyle = styled.div`
    ${({stylediv})=>{
        if(stylediv === 'header'){
            return css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 118px;
            box-shadow: 0px 0px 0px 2px var(--color-grey3);
            `
        }else{
            return css`
            display: flex;
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            height: 100%;
            padding-top: 50px;
            gap:10px;
            padding-left: 300px;
            `
        }
    }}
`

export const H2Text = styled.h2`
    color: var(--color-grey0);
`


export const PText = styled.p`
    color: var(--color-grey0);
`


