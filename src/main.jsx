import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './style/global.js'
import { BrowserRouter} from 'react-router-dom'
import { UserProvider } from './context/DataContext.jsx'
// import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
