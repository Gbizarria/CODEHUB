// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate} from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'))

  return (
   token? children: <Navigate to={'/'}/>
  )
}

export default PrivateRouter
