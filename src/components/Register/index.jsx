/* eslint-disable no-unused-vars */
import React from 'react'
import Main from '../Main'
import Header from '../Header'
import Form from '../Form'
import { DivStyle, SectionStyle } from './style'
const Register = () => {
  return (
    <SectionStyle>
        <Header width={45} position='relative' actionbutton='return'/>
    <Main>
      <DivStyle>
      <Form type='Register'/>

      </DivStyle>
    </Main>
    </SectionStyle>
  )
}

export default Register
