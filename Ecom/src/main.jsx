import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './assets/Components/Footer/Footer.jsx'
import Navbar from "./assets/Components/Navbar/Navbar.jsx"
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <App />
    {/* <Footer/> */}
    </BrowserRouter>
)
