/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { FormStyle,Inputs,Label,Button,LinkStyle, Select,ErroStyle} from './style'
import {useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema,LoginSchema} from './SchemaRegister';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { DataContext } from '../../context/DataContext';

const Form = ({type}) => {
  const navigate = useNavigate();
  const {setDataUser} = useContext(DataContext)


const {register:registerUser,handleSubmit:handleSubmitUser,reset:resetFormRegister,formState:{errors: errorsUser}} = useForm({
  resolver:zodResolver(RegisterSchema),
  
});
    
const {register: registerLogin, handleSubmit: handleSubmitLogin,resetField:resetFieldLogin,formState:{errors: errosLogin}} = useForm({
    resolver: zodResolver(LoginSchema)
})

  function NewRegister (data){
    const PostNewUser = async()=>{     
      const id = toast.loading('Please Wait...')
       await api.post('/users',data,{
        headers:{
          "Content-Type":"application/json"
        }
        
     }).then((Response)=>{toast.update(id,{render:'Usuário criado com sucesso',type:'success',isLoading:false,autoClose:1100})},
      setTimeout(() => {
        resetFormRegister()
      }, 4000),
       setTimeout(() => {
        navigate('/')
      }, 5000)
      
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
      PostNewUser() 
};
  

function UserLogin(data){
        
        const login = async () =>{
          const id = toast.loading('Please Wait...')
          const response = await api.post('/sessions',data ,{
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
                  toast.update
                  (id,
                    {
                      render:`${erro.response.data.message}`, type:'error',isLoading:false,autoClose:1800
                    },
                    console.log(erro)
                  )
                  setTimeout(() => {
                    
                    resetFieldLogin('password')
                  }, 1810);
                })

                    
              } 
              login()         
  }
  


function handleClick (e){
navigate(e)    
}



  return (
    
    <>
    {type == 'Login'?    
    <FormStyle onSubmit={handleSubmitLogin(UserLogin)}>
      <Label htmlFor='email'>Email</Label>
      <Inputs type='email' id='email' {...registerLogin('email')}/>
      {errosLogin.email?<ErroStyle>{errosLogin.email.message}</ErroStyle>:null}

      <Label htmlFor='password'>Senha</Label>
      <Inputs type='password' id='password' {...registerLogin('password')}/>
      {errosLogin.password?<ErroStyle>{errosLogin.password.message}</ErroStyle>:null}

      <Button type='submit' buttonstyle='login'>Enviar</Button>

      <LinkStyle to='/Register'>Ainda não possui uma conta?</LinkStyle>

      <Button type='button' buttonstyle='register' onClick={()=>handleClick('/register')}>Cadastre-se</Button>

      </FormStyle>
     
: type == 'Register'?

    <FormStyle onSubmit={handleSubmitUser(NewRegister)}>
      <Label htmlFor='nome'>Nome</Label>
      <Inputs type='text' id='nome' {...registerUser('name')}/>
      {errorsUser.name?<ErroStyle>{errorsUser.name.message}</ErroStyle>:null}

      <Label htmlFor='email'>Email</Label>
      <Inputs type='email' id='email' {...registerUser('email')}/>
      {errorsUser.email?<ErroStyle>{errorsUser.email.message}</ErroStyle>:null}


      <Label htmlFor='password'>Senha</Label>
      <Inputs type='password' id='password' {...registerUser('password')}/>
      {errorsUser.password?<ErroStyle>{errorsUser.password.message}</ErroStyle>:null}

      
      <Label htmlFor='confirm_Password'>Confirmar Senha</Label>      
      <Inputs type='password' id='confirm_Password' {...registerUser('Confirmpassword')}/>
      {errorsUser.Confirmpassword?<ErroStyle>{errorsUser.Confirmpassword.message}</ErroStyle>:null}


      <Label htmlFor='Bio'>Bio</Label>
      <Inputs type='text' id='Bio' {...registerUser('bio')}/>
      
      <Label htmlFor='Contact'>Contato</Label>
      <Inputs type='text' id='Contact' {...registerUser('contact')}/>
      {errorsUser.contact?<ErroStyle>{errorsUser.contact.message}</ErroStyle>:null}

      <Label htmlFor='Select_Module'>Selecionar Módulo</Label>
      <Select id='Select_Module' {...registerUser('course_module')} defaultValue='select' >
      {errorsUser.course_module?<ErroStyle>{errorsUser.course_module.message}</ErroStyle>:null}
        
          <option value='select'disabled ></option>  
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>  
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>  
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>  
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>  
      </Select> 
      <Button type='submit' buttonstyle='new_register'>Cadastrar</Button>

    </FormStyle>
   
   :null
  }
 </>
   )}

export default Form
