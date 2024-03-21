/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { HeaderStyle,Button } from './style'
import Title from '../Title'
import { useContext } from 'react'
import { LogoutContext } from '../../context/LogoutContext'
import { Outlet } from 'react-router-dom'

const Header = ({position,width,actionbutton}) => {
  const {logout,backPage} = useContext(LogoutContext)

 
  return (
    <>
  { actionbutton == 'exit'?

   <HeaderStyle position={position} width={width}>
    <Title>CODE HUB</Title>

    <Button type='button' onClick={logout}>Sair</Button>
   </HeaderStyle>

   :actionbutton == 'return'?
   <HeaderStyle position={position} width={width}>
   <Title>CODE HUB</Title>

   <Button type='button' onClick={()=> {backPage('/')}}>Voltar</Button>
  </HeaderStyle>

  :null}

  <Outlet/>
    </>

  
  )
}

export default Header
