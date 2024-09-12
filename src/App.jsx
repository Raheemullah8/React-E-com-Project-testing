import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Product from './components/product/Product.jsx'
import Productdetails from './components/productdetails/Productdetails.jsx'
import Login from './components/login/Login.jsx'
import Singup from './components/singup/Singup.jsx'
import Logout from './components/logout/Logout.jsx'


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='' element={<Layout/>}>
             <Route path='/' element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='Products' element={<Product/>}/>
             <Route path='Products/:id' element={<Productdetails/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='singup' element={<Singup/>}/>
             <Route path='logout' element={<Logout/>}/>
            </Route>
        )
    )
  return (
    <RouterProvider router={router} />
  )
}

export default App