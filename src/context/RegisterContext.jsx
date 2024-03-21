/* eslint-disable react/prop-types */
import { createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const RegisterContext = createContext({})


export  const  RegisterProvider = ({children}) =>{
  const navigate = useNavigate()
  
  
  async function newUser(data,reset){
    const id = toast.loading('Please Wait...')
    await api.post('/users',data,{
        headers:{
          "Content-Type":"application/json"
        }
        
     })
     .then(()=>{toast.update(id,{render:'Usuário criado com sucesso',type:'success',isLoading:false,autoClose:1200})},
     setTimeout(() => {
        reset()
     }, 3000),
      setTimeout(() => {
       navigate('/')
     }, 4000)

     
     )  

     .catch((error)=> {
        if(error.status === 401){

          toast.update(id,
          {
            render:`Email de usuário existente`,
            type:'error',
            isLoading:false,
            autoClose:2000
          })
        }else{
          toast.update(id,
            {
              render:`${error.response.data.message}`,
              type:'error',
              isLoading:false,
              autoClose:2000
            })
        }

    
      })


    }
    return(
      <RegisterContext.Provider value={{newUser}} >
          {children}
      </RegisterContext.Provider>
    )
  }