/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { HeaderStyle,Button } from './style'
import Title from '../Title'
import { useNavigate } from 'react-router-dom'

const Header = ({position,width,actionbutton}) => {
  const navigate = useNavigate();

  function handleClick (type){
    localStorage.clear()
    navigate(type)
  }
  return (
   actionbutton == 'exit'?

   <HeaderStyle position={position} width={width}>
    <Title>CODE HUB</Title>

    <Button type='button' onClick={()=>{handleClick('/')}}>Sair</Button>
   </HeaderStyle>

   :actionbutton == 'return'?
   <HeaderStyle position={position} width={width}>
   <Title>CODE HUB</Title>

   <Button type='button' onClick={()=>{handleClick('/')}}>Voltar</Button>
  </HeaderStyle>

  :null
  )
}

export default Header
