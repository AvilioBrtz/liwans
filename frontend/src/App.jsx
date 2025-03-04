import React, { useState } from 'react'
import Home from './Pages/Home/home'
import Product from './Pages/Product/product'
import { Routes, Route, Navigate } from "react-router-dom"
import ProductCategory from './Pages/Category/productcat'
import LoginSignUp from './Components/LoginSignup/loginSignup'

const App = () => {
  const [page, setPage] = useState("Discover")
  const [show, setShow] = useState(false)
  const [category, setCategory] = useState("women")
  return (
    <>
    {show ? <LoginSignUp setShow={setShow}/> : <></>}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home setShow = {setShow} setCategory = {setCategory}/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<ProductCategory category={category} setCategory={setCategory}/>} />
      </Routes>
    </>
  )
}

export default App

