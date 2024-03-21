/* eslint-disable react/prop-types */
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "../src/components/Login";
import Dashboard from "../src/components/Dashboard";
import Register from "../src/components/Register"
import { LoginProvider } from '../src/context/LoginContext'
import { RegisterProvider } from "../src/context/RegisterContext";
import { LogoutProvider } from "../src/context/LogoutContext";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "./PrivateRouter";

export const RoutesMain = () => {
    
    return(
        <BrowserRouter>
     
        <LogoutProvider>
            <Routes>
                <Route path="/" element = 
                {   
                    <LoginProvider>
                        <Login/>
                    </LoginProvider>
                }/>
        
                <Route path="/Dashboard" element = 
                {
                    <PrivateRouter>
                    <LoginProvider>
                        <Dashboard/>
                    </LoginProvider>
                    </PrivateRouter>
                    
                }/>

                <Route path="/Register" element = 
                {
                    <RegisterProvider>
                        <Register/>
                    </RegisterProvider>
                }/>
            </Routes>
        </LogoutProvider>
        <ToastContainer autoClose={2000} toastStyle={{background:'var(--color-grey2)',color:'var(--color-grey0)',}}/>



        </BrowserRouter>
        
    )
}