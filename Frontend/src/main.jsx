import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import  Catalog  from './Catalog/Catalog.jsx'
import Registration from './registration/Registration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <Registration/>
      <Footer/>
  </StrictMode>,
)
