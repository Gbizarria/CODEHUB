/* eslint-disable react/prop-types */
import { createContext, useState} from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export const LoginContext = createContext({})


export const LoginProvider = ({children}) => {
    const [dataUser,setDataUser] = useState({})
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'))
    async function login (data,reset){
        const id = toast.loading('Please Wait...')
        await api.post('/sessions',data ,{
        headers:{ 
          "Content-Type":"application/json"
        }
      })
      .then((res)=> {toast.update(id,{render:'Entrando...', type:'success', isLoading:false,autoClose:1000})
      localStorage.setItem('token',JSON.stringify(res.data.token)),
       setDataUser(res.data.user),
     setTimeout(() => {
           navigate('/dashboard')
         }, 1250)                  
       })

       .catch((erro)=>{
        toast.update (id,
          {
            render:`${erro.response.data.message}`, type:'error',isLoading:false,autoClose:1800
          },
          console.log(erro)
          )
          setTimeout(() => {
            reset('password')
          }, 1810);
      })
    }


    function autoLogin() {
  
     const reloadUser = async () =>{

      await api.get('/profile',{
        headers:{ 
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then(response => setDataUser(response.data))
        .catch((error)=> console.log(error))
        
    }
    reloadUser()
    
    }


        
    return (
        
        <LoginContext.Provider value={{dataUser,login,autoLogin}} >
            {children}
        </LoginContext.Provider>
    )
}