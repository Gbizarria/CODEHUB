/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { StyleTitle } from './Style'

const Title = ({children}) => {
  return (
    <div>
      <StyleTitle>{children}</StyleTitle>
    </div>
  )
}

export default Title
