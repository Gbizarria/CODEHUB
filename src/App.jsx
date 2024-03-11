// eslint-disable-next-line no-unused-vars
import { RoutesMain } from '../routes/RoutesMain'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./style/global.js"



function App() {

  return (
 
    <>
    
    <RoutesMain/>
    <ToastContainer autoClose={2000} toastStyle={{background:'var(--color-grey2)',color:'var(--color-grey0)',}}/>
    </>


   
  )
}

export default App
