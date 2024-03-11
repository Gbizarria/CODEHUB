/* eslint-disable no-unused-vars */
import React from 'react'
import {SectionStyle,H2, DivStyle } from './style';
import Title from '../Title';
import Form from '../Form';

const Login = () => {

  return (

  <SectionStyle>
    <Title>CODE HUB</Title>  
    <DivStyle>
      <H2>Login</H2>
   
      <Form type='Login'/>  
    </DivStyle>
  </SectionStyle>


  )
}

export default Login
