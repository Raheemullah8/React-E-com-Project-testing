import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Product from './components/product/Product.jsx'
import Productdetails from './components/productdetails/Productdetails.jsx'
import Login from './components/login/Login.jsx'
import Singup from './components/singup/Singup.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Products' element={<Product/>}/>
      <Route path='Products/:id' element={<Productdetails/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='singup' element={<Singup/>}/>

    </Route>
 

  )
)


createRoot(document.getElementById('root')).render(

  <StrictMode>
    
    <RouterProvider router={router} />
   
          
      
  </StrictMode>

)
