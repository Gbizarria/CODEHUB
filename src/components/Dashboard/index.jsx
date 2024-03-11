/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { SectionStyle,DivStyle, H2Text, PText } from './style'
import Header from '../Header'
import Main from '../Main'
import { DataContext } from '../../context/DataContext'
const Dashboard = () => {

const {dataUser} = useContext(DataContext)

  return (
    <>
      <Header position='fixed' width={100} actionbutton='exit'/>
    <Main>
      
      <SectionStyle>
       <DivStyle stylediv='header'>
          <H2Text>{dataUser.name}</H2Text>
          <PText>{dataUser.course_module}</PText>
       </DivStyle>
       
       <DivStyle >
          <H2Text>Que pena! Estamos em desenvolvimento :(</H2Text>
          <PText>Nossa aplicação está em desenvolvimento, em breve teremos novidades</PText>
       </DivStyle>


      </SectionStyle>
            
    </Main>
    </>

  )
}

export default Dashboard
