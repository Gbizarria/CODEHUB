import {z} from "zod";


export const RegisterSchema = 
z.object({
    name:z.string().nonempty('Campo obrigatório').min(5,'seu nome deve conter pelo menos 5 carácteres'),

    email:z.string().nonempty('Campo obrigatório').email('Forneça um email válido'),

     password:z.string().nonempty('Campo obrigatório').min(8,'Sua senha deve conter pelo menos 8 dígitos'),

    Confirmpassword:z.string().nonempty('Campo obrigatório'),

    bio:z.string(),

    contact:z.string ().nonempty('Campo obrigatório'),

    course_module:z.string().nonempty('Campo obrigatório'),
}).refine((data)=>data.password === data.Confirmpassword,{
    message:'Campo não corresponder com a senha informada',
    path:['Confirmpassword']
})


export const LoginSchema = 

    z.object({
    email:z.string().nonempty('Informe seu email'),
    password:z.string().nonempty('Informe sua senha')
})