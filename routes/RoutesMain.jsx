/* eslint-disable react/prop-types */
import { Route,Routes } from "react-router-dom";
import Login from "../src/components/Login";
import Dashboard from "../src/components/Dashboard";
import Register from "../src/components/Register"


export const RoutesMain = () => {
    
    return(
        <Routes>
            <Route path="/" element = {<Login/>}/>
            <Route path="/Dashboard" element = {<Dashboard/>}/>
            <Route path="/Register" element = {<Register/>}/>
        </Routes>
        
    )
}