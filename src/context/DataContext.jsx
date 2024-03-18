/* eslint-disable react/prop-types */
import { createContext, useState} from "react";

export const DataContext = createContext({})

export const UserProvider = ({children}) => {
    const [dataUser,setDataUser] = useState({})
    return (
        
        <DataContext.Provider value={{dataUser,setDataUser}} >
            {children}
        </DataContext.Provider>
    )
}