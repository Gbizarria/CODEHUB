import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: ${({width})=>width}%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: ${({position})=>position};
    top: 0;
`
export const Button = styled.button`
    width:  55.49px;
    height: 32px;
    top: 20px;
    left: 1050px;
    border-radius: 4px;
    border: none;
    background-color: var(--color-grey3);
    color: var(--color-grey0);
    font-size: 12px;
    cursor: pointer;
`