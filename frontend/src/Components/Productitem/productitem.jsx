import React from 'react'
import blouse from '/blouse.webp'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import './productitem.css'
import useProductItem from '../../Zustand/useProductItem';

const ProductItem = () => {
  const navigate = useNavigate()
  const { product } = useProductItem()

  const handleNavigation = (route) =>{
    navigate(route)
  }

  return (
    <div className='product-wrap'>
    <div className="product-header">
        <GoArrowLeft size={30} onClick={()=> handleNavigation("/home")}/>
    </div>
    <div className='product'>
      <div className="column1">
        <img src={product.image} alt="item" />
      </div>
      <div className="column2">
        <h2>Ksh 2000</h2>
        <p>+Delivery from KSh 300.00 (Nairobi only)</p>
        <div className='btn'>
          <button>Buy Now</button>
          <button className='btn2'>Available Offers</button>
        </div>
        <div className="desc">
          <p>Product Description:</p>
          <p>Thrifted ladies top</p>
          <div className="desc-btn">
            <button>Size: XL</button>
            <button>Color: White</button>
            <button>Condition: Good</button>
            <button>Women</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductItem
