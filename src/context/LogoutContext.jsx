/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutContext = createContext({})

export const LogoutProvider = ({ children }) => {
    const navigate = useNavigate()

    function logout (){
        localStorage.clear()
        navigate('/')
    }

    function backPage(url){
        navigate(url)
    }

    return(
        <>
        <LogoutContext.Provider value={{logout,backPage}}>
            {children}
        </LogoutContext.Provider>
        </>
    )
}